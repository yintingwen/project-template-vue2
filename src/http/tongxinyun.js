import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create()

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    let {
      data: { code, data, message }
    } = response

    if (code === 403) {
      data = Promise.reject(new Error('登录失效'))
    }

    if (code) {
      data = Promise.reject(new Error(message))
    }

    return data
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * @param { import('../types/http').TongXinYunRequest } config
 */
async function request ({ showMessage = true, ...config }) {
  try {
    return await instance(config)
  } catch (error) {
    showMessage && Message.error(error.message)
    return Promise.reject(error)
  }
}

export default request
