//index.js
//获取应用实例
const app = getApp()

Page({
  onShow() {
    this.getLocation();
    this.getList();
  },
  data: {
    markers: []
  },
  getList() {
    wx.request({
      url: 'http://localhost:3000/list',
      header: {"content-type": "application/json"},
      method: 'GET',
      success: (res) => {
        // console.log(res.data)
        var arr = res.data.map((item) => {
          return {
            iconPath: "/resources/"+ item.type +".png",
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            width: 30,
            height: 30
          }
        })
        // console.log(arr)
        this.setData({
          markers: arr
        })
      }
    })
  },
  onShareAppMessage: function (res) { //转发
    return {
      title: '萌宠交易平台',
      path: 'pages/index/index'
    }
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success:(res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  goCenter() {
    wx.createMapContext("map").moveToLocation();
    // this.ctx.moveToLocation()
  },
  pub() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  search() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  markertap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId,
    })
  },
  onLoad: function () {
    
  }
  
})
