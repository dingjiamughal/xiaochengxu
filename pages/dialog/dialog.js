var app = getApp();
Page({
  data: {

  },
  urlmsg: function (e) {
    wx.navigateTo({
      url: '../dialogmsg/dialogmsg'
    })
  },
  onLoad: function (option) {
    console.log(option);
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        that.setData({
         
        });
      }
    });
  }
})

// function getHeight(){
//   var h=document.getElementsByClassName("alertcontainer")[0].outerHeight;
//   return h;
// }