// pages/page2/page2.js
var msglist = require("../../data/product-data.js");
Page({
  data: {
    array: ["上海", "北京"],
    index: 0,
    selectedIndex: 0,
    active: "active",
    changecolor: "active",
    idArr: [],
    msglist: [],
    confirmisshow: true,
    isshow: true
  },
  onLoad: function () {
    this.setData({
      msglist: msglist.shopList
    })
  },
  bindPickerChange: function (event) {
    this.setData({
      index: event.detail.value
    })
  },
  onmsgtap(event) {
    // console.log(event.currentTarget.dataset.msgid);
    let id = event.currentTarget.dataset.msgid;
    let list = this.data.msglist;
    for (var i = 0; i < list.length; i++) {
      var msglist = this.data.msglist;
      msglist[i].color = false;
      msglist[i].isshow = false;
      this.setData({
        msglist: msglist
      })
      if (id == list[i].msgid) {
        msglist[i].color = !msglist[i].color
        msglist[i].isshow = msglist[i].color
        this.setData({
          msglist: msglist
        })
      }
    }
    console.log(msglist)
  },
  onchoosetap: function () {
    var idArr = [];
    var list = this.data.msglist;
    for (var i = 0; i < list.length; i++) {
      if (list[i].color) {
        idArr.push(list[i].msgid)
      }
    }
    if (idArr !== []) {
      wx.navigateTo({
        url: '../page3/page3?id=' + idArr,
        success: function (res) {
          console.log(idArr)
        }
      })
    }
    this.setData({
      idArr: idArr
    })
  },
  onIcontap() {
    this.setData({
      isshow: false
    })
  },
  onConfirmclose: function () {
    this.setData({
      confirmisshow: false
    })
  }
})
// module.exports={
//   idArr:this.data.idArr
// }