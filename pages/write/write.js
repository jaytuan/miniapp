//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    options: null,
    types: {
      single: '单选',
      multipe: '多选',
      eat: '吃什么'
    }
  },
  onLoad: function (options) {
    let that = this;
    wx.setNavigationBarTitle({title: `创建${that.data.types[options.type]}投票`})
    this.setData({
      options
    })

  }

})
