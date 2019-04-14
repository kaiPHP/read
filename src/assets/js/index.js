import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]

let service = axios.create({
  baseURL: 'http://39.107.117.174:8096/', 
  timeout: 5000,
  proxy: {
    host: '127.0.0.1',
    port: 8080
  } 
}) 

let configData = {
  platform: 1,
  appVersion: '1.0.0',
  timestamp: Date.now(),
  sign: 'aaaa',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : 'aaaa',
  uid: localStorage.getItem('uid') ? localStorage.getItem('uid') : 0,
  equipmentNo: 'aaaa',
  equipmentModel: 'aaaa',
  equipmentSysVersion: 'aaaa'
}

function axiosPost(url, data) {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url: url,
      data: Object.assign({}, configData, data)
    }).then((res) => {
      if(res.data.errCode){
        this.$toast({message: res.data.message})
        this.$loading.hide()
        if(res.data.errCode === 60){ //已经领取过红包
          this.$router.push('/memberpay')
        }
        return
      }
      resolve(res)
    }).catch(err => {
      this.$toast(err)
      this.$loading.hide()
      reject(err)
    })
  })
}

function axiosGet(url, data) {
  return new Promise((resolve, reject) => {
    service({
      method: 'get',
      url: url,
      params: Object.assign({}, configData, data)
    }).then((res) => {
      if(res.data.errCode){
        this.$toast({message: res.data.message})
        this.$loading.hide()
        return
      }
      resolve(res)
    }).catch(err => {
      this.$toast(err)
      this.$loading.hide()
      reject(err)
    })
  })
}

export {axiosPost, axiosGet}