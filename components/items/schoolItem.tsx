import { gql, useQuery } from "@apollo/client"
import { FC } from "react"

interface SchoolItemFCProps {
  scCode: string
  code: string
}

const GET_SCHOOL = gql`
  query GetSchool($scCode: String!, $code: String!) {
    schools(scCode: $scCode, code: $code) {
      name
      kind
      address
      homepage
    }
  }
`

const SchoolItem: FC<SchoolItemFCProps> = ({ scCode, code }) => {
  const { loading, error, data } = useQuery(GET_SCHOOL, {
    variables: { scCode, code },
  })

  return (
    <>
      {!error && (
        <div className="flex h-48 flex-col justify-between rounded-lg border-slate-700 bg-gray-900 p-4 shadow">
          <div className="cursor-default">
            <p className="text-2xl font-bold">
              {loading ? "로딩중..." : data.schools[0].name}
            </p>
            <p className="text-base text-gray-300">
              {!loading && data.schools[0].address}
            </p>
            <p className="cursor-pointer text-sm text-gray-300 underline">
              {!loading && (
                <a
                  href={data.schools[0].homepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.schools[0].homepage}
                </a>
              )}
            </p>
          </div>
          <div className="cursor-default">
            <button className="rounded-lg bg-gray-800 px-4 py-2 text-base shadow">
              {loading ? "잠시만 기다려 주세요!" : "추가하기"}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SchoolItem
