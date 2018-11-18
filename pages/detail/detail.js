// pages/detail/detail.js
Page({
  data: {
    detail: {}
  },
  onLoad: function (options) {
    this.getDetail(options)
  },
  getDetail(e) {
    // console.log(e.id)
    wx.request({
      url: 'http://localhost:3000/list/' + e.id,
      header: { "content-type": "application/json" },
      method: 'GET',
      success: (res) => {
        // console.log(res)
        this.setData({
          detail: res.data
        })
      }
    })
    // console.log(e.markerId)
  },
  onShow: function () {

  }
})