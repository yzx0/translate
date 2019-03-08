const app = getApp()
Page({
  data: {
    langList: app.globalData.langList
  },
  changeLanguageFrom(e) {
    let temp = e.currentTarget.dataset
    console.log(temp)
    app.globalData.currentLanguageFrom.chs = temp.chs
    app.globalData.currentLanguageFrom.lang = temp.lang
    wx.switchTab({
      url: '../index/index',
    })
  }
})