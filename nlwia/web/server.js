import axios from "axios"

export const server = axios.create({
  baseURL: "https://nlwia-ten.vercel.app/",
})
