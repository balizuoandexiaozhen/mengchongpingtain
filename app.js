//app.js
App({
  onLaunch: function () {
    var info = wx.getSystemInfoSync();
    this.globalData.winWidth = info.windowWidth;
    this.globalData.winHeight = info.windowHeight;
    // console.log(this.globalData.winHeight)
  },
  globalData() {
    
  }
  
})