import axios from 'axios'
import { getToken } from './utils/changtoken'
import { Promise } from 'core-js'
import { Message } from 'element-ui/lib/theme-chalk/index.css'


const service = axios.create({
  baseURL: '/api',
  timeout: 3000,
})

// 请求拦截器
// 在发送请求前 操作
service.interceptors.request.use((config) => {
  // 获取 并 在请求头设置 token
  config.headers['token'] = getToken('token')
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
// 对响应数据的操作
service.interceptors.response.use((response) => {
  let { status, message } = response.data
  if (status !== 200) {
    Message({ message: message || 'error', type: 'error' })
  }
  return response
}, (error) => {
  return Promise.reject(error)
})
export default service