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
  // 单选方法
  singleVote (e) {
    console.log(e)
    if (e && e.detail) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo
      })
    }
  }

})
