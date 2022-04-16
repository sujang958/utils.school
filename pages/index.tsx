import { gql } from "@apollo/client"
import type { NextPage } from "next"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import SchoolItem from "../components/items/schoolItem"
import client from "../utils/client"
import useTextInput from "../utils/useTextinput"

const words = ["급식", "시간표", "학사일정"]

const Home: NextPage = () => {
  const [searchQuery, onSearchQueryChange] = useTextInput()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [searchedSchoolResults, setSearchedSchoolResults] = useState<
    { code: string; scCode: string }[]
  >([])
  const searchSchool = useCallback(async () => {
    const { error, data } = await client.query({
      query: gql`
        query GetSchoolWithOnlyCode($name: String!) {
          schools(name: $name) {
            code
            scCode
          }
        }
      `,
      variables: { name: searchQuery },
    })

    if (error) throw new Error(String(error))

    setSearchedSchoolResults(data.schools)
  }, [searchQuery])
  useEffect(() => {
    const wordChangingInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : 0))
    }, 3000)
    return () => clearInterval(wordChangingInterval)
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col text-white">
      <div className="flex flex-col items-center justify-center bg-gray-900 py-32 pb-20 md:pt-44 md:pb-32">
        <p className="text-6xl md:text-7xl font-bold py-2">{words[currentWordIndex]} 검색</p>
        <div className="relative flex flex-col justify-center py-12">
          <input
            type="text"
            placeholder="학교 이름을 검색 해 보세요"
            className="w-80 rounded-lg border border-slate-300 bg-gray-800 p-3 font-noto-sans text-xl outline-offset-4 focus:outline-slate-600 md:w-96"
            value={searchQuery}
            onChange={onSearchQueryChange}
            onKeyDown={({ key }) => key === "Enter" && searchSchool()}
          />
          <div
            className="absolute right-4 cursor-pointer"
            onClick={searchSchool}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="sticky top-0 flex w-full flex-col items-center border-b border-b-slate-700 bg-gray-900">
        <div className="flex w-full max-w-7xl flex-row items-center justify-end space-x-2 p-4 md:space-x-4">
          <div className="flex shrink-0 cursor-pointer flex-row justify-between space-x-2 rounded-3xl py-2 px-4 transition duration-300 hover:bg-gray-800 hover:shadow-lg">
            <div className="select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xl">소개</p>
          </div>
          {/* <div className="flex shrink-0 cursor-pointer flex-row justify-between space-x-2 rounded-3xl py-2 px-4 transition duration-300 hover:bg-gray-800 hover:shadow-lg">
            <div className="select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xl">회원가입</p>
          </div> */}
          <div className="flex shrink-0 cursor-pointer flex-row justify-between space-x-2 rounded-3xl py-2 px-4 transition duration-300 hover:bg-gray-800 hover:shadow-lg">
            <div className="select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <p className="text-xl">
              <Link href="/schools" passHref>
                내 학교
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center bg-gray-800">
        <div className="flex w-full max-w-6xl flex-col p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {searchedSchoolResults.map((codes, i) => (
              <SchoolItem {...codes} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
