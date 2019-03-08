import md5 from '../utils/md5.min.js'

const  appid = '20190307000274675'
const  key = 'Em5mmpoTtJknI3h6QNgf'

export default {
  translate (q,from,to){
    return new Promise(function (resolve,reject){
      let salt = parseInt(Date.now(),10)
      let sign = md5(`${appid}${q}${salt}${key}`)
      wx.request({
        url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
        data:{
          q,
          from,
          to,
          appid,
          salt,
          sign
        },
        success(e){
          resolve(e.data)
        },
        fail(e){
          console.log(e)
        }
      })
    })
  }
}