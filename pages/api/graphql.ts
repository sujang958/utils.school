import { createServer } from "@graphql-yoga/node"
import { NextApiRequest, NextApiResponse } from "next"
import client, { DEFAULT_API_PARAMS } from "../../utils/api"

const server = createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: {
    typeDefs: `
      type Query {
        schools(name: String, code: String, scCode: String): [School]
        timetable(code: String!, scCode: String!, type: String!, semester: Int, year: Int, grade: Int, classNo: Int, date: String): [Timetable]
      }

      type Timetable {
        schoolName: String!
        semester: Int!
        year: Int!
        grade: Int!
        classNo: Int!
        period: Int!
        date: String!
        subject: String!
      }

      type School {
        code: String!
        scCode: String!
        name: String!
        kind: String!
        address: String!
        homepage: String!
      }
    `,
    resolvers: {
      Query: {
        schools: async (_, args) => {
          const optionalArgs: { [key: string]: any } = {}
          ;[
            ["name", "SCHUL_NM"],
            ["code", "SD_SCHUL_CODE"],
            ["scCode", "ATPT_OFCDC_SC_CODE"],
          ].map(
            ([arg, apiArg]) => arg in args && (optionalArgs[apiArg] = args[arg])
          )
          let { data } = await client.get("/schoolInfo", {
            params: { ...DEFAULT_API_PARAMS, ...optionalArgs },
          })

          if (!data.schoolInfo) throw Error("학교를 찾을 수 없습니다!")
          data = data.schoolInfo[1].row

          return data.map((school: any) => ({
            code: school.SD_SCHUL_CODE,
            scCode: school.ATPT_OFCDC_SC_CODE,
            name: school.SCHUL_NM,
            kind: school.SCHUL_KND_SC_NM,
            address: school.ORG_RDNMA,
            homepage: school.HMPG_ADRES,
          }))
        },
        timetable: async (_, args) => {
          const { code, scCode, type } = args
          const optionalArgs: { [key: string]: any } = {}
          ;[
            ["SEM", "semester"],
            ["AY", "year"],
            ["GRADE", "grade"],
            ["CLASS_NM", "classNo"],
            ["ALL_TI_YMD", "date"],
          ].map((arg) => (optionalArgs[arg[0]] = args[arg[1]]))

          let data: any = {}
          if (type.includes("중"))
            data = (
              await client.get("/misTimetable", {
                params: {
                  ...DEFAULT_API_PARAMS,
                  ATPT_OFCDC_SC_CODE: scCode,
                  SD_SCHUL_CODE: code,
                  ...optionalArgs,
                },
              })
            ).data
          else if (type.includes("초"))
            data = (
              await client.get("/elsTimetable", {
                params: {
                  ...DEFAULT_API_PARAMS,
                  ATPT_OFCDC_SC_CODE: scCode,
                  SD_SCHUL_CODE: code,
                  ...optionalArgs,
                },
              })
            ).data
          else
            data = (
              await client.get("/hisTimetable", {
                params: {
                  ...DEFAULT_API_PARAMS,
                  ATPT_OFCDC_SC_CODE: scCode,
                  SD_SCHUL_CODE: code,
                  ...optionalArgs,
                },
              })
            ).data

          data = data.misTimetable[1].row

          return data.map((timetable: any) => ({
            schoolName: timetable.SCHUL_NM,
            semester: Number(timetable.SEM),
            year: Number(timetable.AY),
            grade: Number(timetable.GRADE),
            classNo: Number(timetable.CLASS_NM),
            period: Number(timetable.PERIO),
            date: timetable.ALL_TI_YMD,
            subject: timetable.ITRT_CNTNT.replace("-", "").trim(),
          }))
        },
      },
    },
  },
})

export default server
