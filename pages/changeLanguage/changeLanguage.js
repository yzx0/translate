const app = getApp()
Page({
  data: {
    langList: app.globalData.langList
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