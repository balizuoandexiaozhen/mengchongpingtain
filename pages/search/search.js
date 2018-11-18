// pages/search/search.js
Page({
  data: {
    list: []
  },
  onLoad: function (options) {

  },
  input(e) {
    wx.request({
      url: 'http://localhost:3000/list?q='+e.detail.value,
      header: {"content-type": "application/json"},
      method: 'GET',
      success: (res) => {
        // console.log(res.data)
        this.setData({
          list: res.data
        })
      }
    })
  },
  detail(e) {
    var id = e.currentTarget.dataset.id
    // console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  onShow: function () {

  }
})