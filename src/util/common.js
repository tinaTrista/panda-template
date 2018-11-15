export default 
    formatDate(value, flag) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      if (flag) {
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
      return y + '-' + MM + '-' + d;

    },
    downloadFile(content, fileName) {
      const blob = new Blob([content], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      if ('download' in document.createElement('a') && navigator.userAgent.indexOf('Edge') <= -1) { // 非IE 及edge下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else { // IE10+下载
        // navigator.msSaveBlob(blob, fileName)
        navigator.msSaveOrOpenBlob(blob, fileName)
      }
    },
    addScript(url) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
      document.body.appendChild(script)
    }

  }
}
