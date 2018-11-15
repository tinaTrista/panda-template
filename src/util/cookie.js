export default {
  get(name) {
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    const arr = document.cookie.match(reg)
    return arr ? unescape(arr[2]) : null
  },
  set(name, value, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  },
  del(name) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = this.get(name)
    if (cval !== null) {
      document.cookie = name + "=" + ";expires=" + exp.toGMTString()
    }
  }
}
