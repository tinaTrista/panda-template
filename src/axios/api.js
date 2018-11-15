import axios from 'axios'

const api = {}

// 配送范围
api.getScope = param => axios.post('/cspweb/productRules/queryProductRules', param)

// 注册
api.register = param => axios.post('', param)

// login登录
api.login = (param, type) => {
  const baseURL = type === 1 ? '/cspweb/login' : '/cspweb/login/mobileLoginVerify'
  return axios.post(baseURL, param)
}
// forget password
api.validateMobile = param => axios.post('/cspweb/login/validateMobile', param)

// validateSmsCode
api.validateSmsCode = param => axios.post('/cspweb/login/validateSmsCode', param)

// changeNewPassword
api.changeNewPassword = param => axios.post('/cspweb/login/changeNewPassword', param)

api.changePassword = param => axios.post('/cspweb/login/changePassword', param)

api.searchAreaInfo = param => axios.post('/cspweb/ydc/searchAreaInfo', param)

api.getVarifyCode = () => axios.get('/cspweb/code/getCode')

api.getAgentInfo = (param = {}) => axios.post('/cspweb/agentManage/queryAgentInfo', param)

api.pullPriceList = param => axios.post('/cspweb/agentPrice/queryAgentPrice', param)

api.insertAgentPrice = param => axios.post('/cspweb/agentPrice/insertAgentPrice', param)

api.updateAgentPrice = param => axios.post('/cspweb/agentPrice/updateAgentPrice', param)

api.getListRole = (param = { level: 'agent_staff' }) => axios.post('/cspweb/role/listRole', param)

api.getActiveCode = param => axios.post('/cspweb/sms/sendVerifyCodeSms', param)

// order trail
api.getOrderTrailInfo = param => axios.post('/cspweb/orderTrail/getOrderTrailInfo', param)

// orderManager backend => Wu bin
api.getParcelPost = param => axios.post('/cspweb/orderManager/orders', param)

api.updateOrders = param => axios.post('/cspweb/orderManager/updateOrders', param)

api.reprintOrder = param => axios.post('/cspweb/orderManager/reprintOrder', param)

api.scanOrder = param => axios.post('/cspweb/orderManager/getOrder', param)

api.printingOrder = param => axios.post('/cspweb/orderManager/printingOrder', param)

// pendingOrderManage  backend => Ma wen Ming  http://192.168.204.109:7040
api.getPendingOrder = param => axios.post('/cspweb/pendingOrderManage/queryPendingOrderInfo', param)

api.cancelPendingOrder = param => axios.post('/cspweb/pendingOrderManage/cancelPendingOrder', param)

api.printPendingOrder = param => axios.post('/cspweb/pendingOrderManage/printPendingOrder', param)

// customer backend => Xie kun
api.getCustomerList = param => axios.post('/cspweb/customer/getCustomerList', param)

api.addCustomer = param => axios.post('/cspweb/customer/addCustomer', param)

api.modifyCustomer = param => axios.post('/cspweb/customer/modifyCustomer', param)

api.deleteCustomerList = param => axios.post('/cspweb/customer/deleteCustomerList', param)

api.getPhoneNo = param => axios.post('/cspweb/statistics/getPhoneNo', param)

// offline backend-hewei

api.offlineSelectorders = param => axios.post('/cspweb/offline/selectorders', param)

api.offlineCancelOrders = param => axios.post('/cspweb/offline/cancelOrders', param)

api.offlineUpdatestaus = param => axios.post('/cspweb/offline/updatestaus', param)

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
export default api
