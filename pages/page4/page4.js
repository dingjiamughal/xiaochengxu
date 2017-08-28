// pages/page4/page4.js
var productList=require("../../data/product-data.js");
Page({
  data:{
    isshort:false
  },
  onLoad:function(){
    this.setData({
      productList:productList.productList
    })
  },
  onAppointmentTap:function(event){
    var id=event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../page5/page5?id='+id
    })
  },
  onIconTap:function(){
    var isshort=this.data.isshort
    this.setData({

isshort:!isshort
    })
  }
})