import { NextPage } from "next"
import Link from "next/link"

const SchoolsPage: NextPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-800 text-white">
      <div className="sticky top-0 flex w-full flex-col items-center bg-gray-900">
        <div className="flex w-full max-w-7xl flex-row items-center justify-between p-4">
          <div className="flex flex-row items-center">
            <div className="flex cursor-pointer flex-row items-center justify-between space-x-2">
              <div className="select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className="text-xl">32.5 ºC</p>
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
        <div className="flex w-full max-w-6xl flex-col py-10 px-5 md:p-10">
          <div className="flex flex-col items-center space-y-6 p-4">
            <div className="flex min-h-[44rem] w-full flex-col justify-between rounded-lg bg-gray-900 p-4 shadow sm:w-4/5 md:w-5/6">
              <div className="cursor-default">
                <p className="text-2xl">대구동중학교</p>
                <p className="cursor-pointer text-base text-gray-300 underline">
                  https://dgdong.ms.kr
                </p>
              </div>
              <div className="flex flex-1 shrink-0 flex-col space-y-2 py-6 px-2">
                <div className="flex h-full max-h-[50%] w-full flex-col flex-wrap items-center justify-center space-x-2 p-4">
                  <div className="flex cursor-default flex-col items-center justify-start">
                    <p className="text-3xl">급식</p>
                    <div className="flex flex-row items-center py-4">
                      <input
                        type="date"
                        className="w-44 rounded-lg border border-slate-400 bg-gray-900 px-3 py-1.5"
                      />
                    </div>
                  </div>
                  <div className="flex w-full snap-x snap-mandatory flex-row items-baseline space-x-6 overflow-x-auto p-6">
                    <div className="flex w-2/5 shrink-0 snap-center snap-always flex-col items-start justify-between rounded-lg bg-slate-900 py-4 px-6 shadow-lg">
                      <div className="cursor-default">
                        <p className="text-lg">2022/4/22</p>
                        <p className="text-lg">522.5 kcal / 중식</p>
                      </div>
                      <div className="flex flex-col py-2">
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                      </div>
                      <div className="-ml-4 flex flex-row items-center pt-4">
                        <div className="flex cursor-pointer flex-row items-center justify-between space-x-2 rounded-3xl bg-gray-800 px-3 py-1 transition duration-300 hover:bg-gray-900">
                          <div className="-mb-0.5 select-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                          <p className="text-lg text-gray-200 underline">
                            영양정보 표시
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-2/5 shrink-0 snap-center snap-always flex-col items-start justify-between rounded-lg bg-slate-900 py-4 px-6 shadow-lg">
                      <div className="cursor-default">
                        <p className="text-lg">2022/4/22</p>
                        <p className="text-lg">522.5 kcal / 중식</p>
                      </div>
                      <div className="flex flex-col py-2">
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                      </div>
                      <div className="-ml-4 flex flex-row items-center pt-4">
                        <div className="flex cursor-pointer flex-row items-center justify-between space-x-2 rounded-3xl bg-gray-800 px-3 py-1 transition duration-300 hover:bg-gray-900">
                          <div className="-mb-0.5 select-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                          <p className="text-lg text-gray-200 underline">
                            영양정보 표시
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-2/5 shrink-0 snap-center snap-always flex-col items-start justify-between rounded-lg bg-slate-900 py-4 px-6 shadow-lg">
                      <div className="cursor-default">
                        <p className="text-lg">2022/4/22</p>
                        <p className="text-lg">522.5 kcal / 중식</p>
                      </div>
                      <div className="flex flex-col py-2">
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                        <p className="text-base">찰밥밥2.2.2.2.2</p>
                      </div>
                      <div className="-ml-4 flex flex-row items-center pt-4">
                        <div className="flex cursor-pointer flex-row items-center justify-between space-x-2 rounded-3xl bg-gray-800 px-3 py-1 transition duration-300 hover:bg-gray-900">
                          <div className="-mb-0.5 select-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                          <p className="text-lg text-gray-200 underline">
                            영양정보 표시
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-full max-h-[50%] w-full flex-row flex-wrap items-start justify-between space-x-2 p-4">
                  <div className="flex cursor-default flex-col justify-start p-4">
                    <p className="text-3xl">시간표</p>
                    <div className="flex flex-row items-center py-4">
                      <div className="cursor-pointer">
                        <input
                          type="date"
                          className="rounded-lg border border-slate-400 bg-gray-900 px-2.5 py-1.5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center rounded-lg p-4 shadow">
                    <div className="flex flex-col items-end py-2">
                      <p className="text-lg">1. 국어</p>
                      <p className="text-lg">2. 영어</p>
                      <p className="text-lg">3. 영어</p>
                      <p className="text-lg">4. 영어</p>
                      <p className="text-lg">5. 영어</p>
                      <p className="text-lg">6. 영어</p>
                      <p className="text-lg">7. 영어</p>
                      <p className="text-lg">8. 영어</p>
                    </div>
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
