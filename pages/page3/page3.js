// pages/page3/page3.js
Page({
  data:{
    timeArray: ['09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00'],
    index:0
  },
  onLoad:function(options){
    console.log(options);
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  onChooseTap:function(){
    wx.navigateTo({
      url: '../page4/page4',
      success: function(res){
        // success
      }
    })
  }
})