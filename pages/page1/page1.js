// pages/page1/page1.js
var app=getApp();
Page({
  data:{
    userInfo:{}
  },
  onLoad:function(){
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
onAppointmentTap:function(event){
  wx.navigateTo({
    url: '../page2/page2'
  })
},
onHistoryTap:function(event){
  var historyid=[1,2,4]
  wx.navigateTo({
    url: '../page6/page6?historyid='+historyid
  })
}
})