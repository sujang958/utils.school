import { NextPage } from "next"
import Link from "next/link"

const SchoolsPage: NextPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-800 text-white">
      <div className="sticky top-0 flex w-full flex-col items-center bg-gray-900">
        <div className="flex w-full max-w-7xl flex-row items-center justify-between p-4">
          <div className="flex flex-row items-center">
            <div className="cursor-pointer">
              <p className="text-2xl">좋은 아침입니다.</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2 md:space-x-4">
            <div className="flex shrink-0 cursor-pointer flex-row justify-between space-x-2 rounded-3xl py-2 px-4 transition duration-300 hover:bg-gray-800 hover:shadow-lg">
              <div className="mt-0.5 select-none">
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
              <p className="text-xl">
                <Link href="/" passHref>
                  학교 추가
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-6xl flex-col p-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex h-96 flex-col justify-between rounded-lg bg-gray-900 p-4 shadow">
              <div className="cursor-default">
                <p className="text-2xl">대구동중학교</p>
                <p className="cursor-pointer text-base text-gray-300 underline">
                  https://dgdong.ms.kr
                </p>
              </div>
              <div className="flex flex-1 shrink-0 flex-col space-y-2 py-6 px-2">
                <div className="flex h-1/3 flex-col">
                  <div className="cursor-pointer">
                    <details>
                      <summary>급식</summary>
                      <div className="flex flex-col p-2">
                        <div className="flex w-full flex-row items-center justify-between space-x-2">
                          <p className="text-lg">날짜 설정</p>
                          <input
                            type="date"
                            className="rounded-lg bg-gray-800 px-2 py-0.5 text-white"
                          />
                        </div>
                        <div className="flex flex-col m-1 bg-gray-800 rounded-xl p-2">
                          <p className="text-lg">2022월 11월 31일</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
                <div className="flex h-1/3 flex-col">
                  <div className="cursor-pointer">
                    <details>
                      <summary>시간표</summary>
                      Something small enough to escape casual notice.
                    </details>
                  </div>
                </div>
                <div className="flex h-1/3 flex-col">
                  <div className="cursor-pointer">
                    <details>
                      <summary>학사일정</summary>
                      Something small enough to escape casual notice.
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolsPage
