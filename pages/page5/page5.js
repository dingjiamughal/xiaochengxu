// pages/page5/page5.js
var list = require("../../data/product-data.js");

Page({
  data: {
    productImage: "../../image/page4-p1.png",
    textImage: "../../image/page5-text1.png",
    day: "2017.4.13 周四",
    time: "10:00-11:00",
    isshow:false,
    isshow2:false,
    productid:null
  },
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      productid:id,
      listdata: list.page5List
    })
    var listdata = this.data.listdata
    for (var i = 0; i < listdata.length; i++) {
      if (id == listdata[i].id) {
        this.setData({
          productImage: listdata[i].productImage,
          textImage: listdata[i].textImage
        })
      }
    }
  },
  onCloseTap: function () {
      this.setData({
        isshow2:true,
        isshow:false
      })

  },
  onCpmpleteTap:function(){
        var that = this;
    var productid=this.data.productid
    wx.redirectTo({
      url: '../page6/page6?productid='+productid,
      success: function (res) {
        that.setData({
          isshow2: false
        })
      }
    })
  },
  onCompleteTap: function () {
    this.setData({
      isshow: true
    })
  }
})