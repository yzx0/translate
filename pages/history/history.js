
Page({
  data: {
    history:[]
  },
  onShow: function () {
    let temp = wx.getStorageSync('history')
    this.setData({history:temp}) 
  },
  gotoIndex(e){
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`,
    })
  }
})