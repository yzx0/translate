
import translate from '../../utils/translate'
const app = getApp()

Page({
  data: {
    query: '',
    result: '',
    currentLanguageTo:{},
    currentLanguageFrom:{},
    isShow:false,
    isClear:false
  },
  clearText(){
    this.setData({query:'',isClear:false})
  },
  onInput(e){
    this.setData({query:e.detail.value})
    if(this.data.query.length >0){
      this.setData({isClear:true})
    }else{
      this.setData({ isClear: false })
    }
  },
  onBlur(e) {
    if (!this.data.query) {return}
    translate.translate(this.data.query, 'auto', this.data.currentLanguageTo.lang)
      .then(response => {
        this.setData({
          result: response.trans_result[0].dst
        })
        this.setData({isShow:true})

        let history = wx.getStorageSync('history') || []
        history.unshift({query:this.data.query,result:this.data.result})
        history.length = history.length>10 ? 10: history.length
        console.log(history.length)
        wx.setStorageSync('history', history)


      }, error => {
        console.log(error)
      })
  },
  onShow(){
      this.setData({ currentLanguageTo: app.globalData.currentLanguageTo})
      this.setData({ currentLanguageFrom: app.globalData.currentLanguageFrom })
  }
})