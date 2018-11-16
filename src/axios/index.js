import axios from 'axios'
import api from './api'
import cookie from '../util/cookie'
import { message} from 'antd';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

// http request 请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, err => Promise.reject(err))


// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use((response) => {
console.log(response,response.status, response.status === 200 ,response.data.code , response.data.code !== '200')
  if (response.status && response.status === 200 && response.data.code && response.data.code !== '200') {
    message.error('This is a message of error');
    return
  }
  return response
}, (err) => {

  if (err.response) {
    if (err.response.status === 504 || err.response.status === 404) {
    } else if (err.response.status === 401) {
      cookie.del('token')
    }
  } else {
    console.log('未知错误')
  }
  return Promise.reject(err)
})
export default api
