// pages/publish/publish.js
Page({
  data: {
    location: "点击选择，要勾选哦~",
    info: {
      "title":"说明", 
      "msg": "填写您的具体需求"
    },
    contect: {
      "title": "联系方式",
      "msg": "填写您的联系方式"
    }
  },
  info: {
    "type": "sell"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  location() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          location: res.address
        })
        Object.assign(this.info,{
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        })
        // console.log(this.info)
      }
    })
  },
  radioChange(e) {
    this.info.type = e.detail.value;
  },
  inputdesc(e) {
    this.info.msg = e.detail.value;
  },
  inputtel(e) {
    this.info.contact = e.detail.value;
    // console.log(this.info)
  },
  pub() {
    wx.request({
      url: 'http://localhost:3000/list',
      data: this.info,
      header: {"content-type": "application/json"},
      method: 'POST',
      success: (res) => {
        wx.showModal({
          content: '发布成功！',
          showCancel: false,
          success: (res) => {
            wx.navigateBack({
              delta: 1
            })
          }
        })
      }
    })
  }
})