import axios from 'axios'

const config = {
  baseURL: 'http://localhost:4000/',
}

const axiosConfig = axios.create(config)

axiosConfig.interceptors.response.use(
  (response) => {
    return response
  }
)

export const apiConnection = axiosConfig