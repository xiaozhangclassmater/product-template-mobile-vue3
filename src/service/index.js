import axios from "axios";

const instance = axios.create({
  baseURL: './',
  timeout: 2000,
})
const resolveRequestCallback = (request) => {}
const rejectRequestCallback = () => {}

instance.interceptors.request.use(resolveRequestCallback , rejectRequestCallback)

const resolveResponseCallback = (response) => {
  return response
}

const rejectResponseCallback = () => {

}

instance.interceptors.response.use(resolveResponseCallback , rejectResponseCallback)

export const request = (config) => instance.request(config)

