import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

if (baseUrl === undefined) throw new Error("axiosClient: APP_API_URL is undefined");

const axiosClient = axios.create({
  baseURL: baseUrl,
  timeout: 50000
})

axiosClient.interceptors.request.use(async (config: any) => {
  const token = localStorage.getItem('token')
  console.log(config.url)
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config
}, (error) => {
  console.log({ "error axios:": error })
  return error;
})

export default axiosClient
