import axios from "axios"

const client = axios.create({
  baseURL: "https://open.neis.go.kr/hub",
})

export default client

export const DEFAULT_API_PARAMS = {
  KEY: process.env.API_KEY,
  type: "json",
  pSize: 100,
}
