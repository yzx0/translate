
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
  onLoad(option){
    if(option.query){
      this.setData({query:option.query})
      this.setData({ currentLanguageTo: app.globalData.currentLanguageTo })
      this.setData({ currentLanguageFrom: app.globalData.currentLanguageFrom })
      this.onBlur()
    }
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
  translateText(){
    if (!this.data.query) { return }
    console.log(this.data.query, this.data.currentLanguageTo.lang)
    translate.translate(this.data.query, 'auto', this.data.currentLanguageTo.lang)
      .then(response => {
        console.log(response)
        this.setData({
          result: response.trans_result[0].dst
        })
        this.setData({ isShow: true })

        let history = wx.getStorageSync('history') || []
        history.unshift({ query: this.data.query, result: this.data.result })
        history.length = history.length > 10 ? 10 : history.length
        wx.setStorageSync('history', history)
      })
  },
  onBlur(e) {
    if (!this.data.query) {return}
    console.log(this.data.query, this.data.currentLanguageTo.lang)
    translate.translate(this.data.query, 'auto', this.data.currentLanguageTo.lang)
      .then(response => {
        console.log(response)
        this.setData({
          result: response.trans_result[0].dst
        })
        this.setData({isShow:true})

        let history = wx.getStorageSync('history') || []
        history.unshift({query:this.data.query,result:this.data.result})
        history.length = history.length>10 ? 10: history.length
        wx.setStorageSync('history', history)
      })
  },
  onShow(){
    this.setData({ currentLanguageTo: app.globalData.currentLanguageTo})
    this.setData({ currentLanguageFrom: app.globalData.currentLanguageFrom })
  }
})