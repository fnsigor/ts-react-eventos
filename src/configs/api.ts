import axios, { AxiosInstance } from 'axios'


const axiosConfig = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    "Content-Type": "application/json"
  }
})


axiosConfig.interceptors.response.use(
  (response) => {
    return response
  }
)

export const api = axiosConfig