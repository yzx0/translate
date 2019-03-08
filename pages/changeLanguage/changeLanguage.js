const app = getApp()
Page({
  data: {
    currentLanguageTo:{},
    langList: app.globalData.langList
  },
  onShow(){
    this.setData({currentLanguageTo:app.globalData.currentLanguageTo})
  },
  changeLanguageTo(e) {
    let temp = e.currentTarget.dataset
    app.globalData.currentLanguageTo.chs = temp.chs
    app.globalData.currentLanguageTo.lang = temp.lang
    wx.switchTab({
      url: '../index/index',
    })
  }
})