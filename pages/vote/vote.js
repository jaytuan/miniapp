//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    // 用户信息
    userInfo: null
  },
  onLoad: function () {

  },
  // 选择方法，根据dataset source判断来源
  vote (e) {
    console.log(e)
    if (e && e.detail) {
      let type = e.currentTarget.dataset.source;
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo
      }, () => {
        wx.navigateTo({
          url: `/pages/write/write?type=${type}`
        })
      })
    }
  }

})
