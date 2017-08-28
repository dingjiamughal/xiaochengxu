// pages/page6/page6.js
var list = require("../../data/product-data.js");
Page({
  data: {
    historyList: [],
    day: "2017.4.13 周四",
    time: "10:00-11:00",
    confirmisshow: false
  },
  onLoad: function (options) {
    console.log(options);
    var productid = options.productid //通过完成预约进入
    // var id = options.historyid;//[1,2,4] 通过首页进入
    var id = [1, 2, 4]
    if (productid) {
      id.push(productid)
    }
    this.setData({
      productList: list.page5List
    })
    var productList = this.data.productList
    var List = [];
    // List.push(productid)
    for (var i = 0; i < id.length; i++) {
      for (var j = 0; j < productList.length; j++) {
        if (id[i] == productList[j].id) {
          List.push({
            productImage: productList[j].productImage,
            textImage: productList[j].textImage
          })
        }
      }
    }
    // List.push(productid)
    this.setData({
      historyList: List
    })

  },
  onCorrectTap: function () {
    this.setData({
      confirmisshow: true
    })
  },
  onConfirmclose: function () {
    this.setData({
      confirmisshow: false
    })
  }
})