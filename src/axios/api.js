import axios from 'axios'

const api = {}
// import export
api.importFile = (url, param) => axios({
  method: 'POST',
  url,
  data: param,
  responseType: 'blob',
})

api.exportFile = (url, param) => axios({
  method: 'POST',
  url,
  data: param,
  responseType: 'blob',
})

api.post = (url, data = {}, config = {}) => new Promise(((resolve, reject) => {
  axios.post(url, data, config)
    .then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
}))
api.get = (url, data = {}, config = {}) => new Promise(((resolve, reject) => {
  axios.get(url, data, config)
    .then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
}))
export default api
