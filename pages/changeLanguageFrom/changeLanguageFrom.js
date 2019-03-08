const app = getApp()
Page({
  data: {
    currentLanguageFrom: {},
    langList: app.globalData.langList
  },
  onShow() {
    this.setData({ currentLanguageFrom: app.globalData.currentLanguageFrom })
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