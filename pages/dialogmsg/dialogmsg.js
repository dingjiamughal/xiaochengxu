var app = getApp();
Page({
    data:{

    },
    urlbind:function(e){
        wx.navigateTo({
          url: '../dialog/dialog',
          success: function(res){
            // success
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
    }
})