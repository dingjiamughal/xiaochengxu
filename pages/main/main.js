Page({
    urlbind: function (e) {
        wx.navigateTo({
            url: '../dialog/dialog'
        })
    },
    urlmsg: function (e) {
        wx.navigateTo({
            url: '../dialogmsg/dialogmsg'
        })
    },
    urlcancel: function (e) {
        wx.navigateTo({
            url: '../dialogcancel/dialogcancel'
        })
    },
    baoqian: function (e) {
        wx.navigateTo({
            url: '../dialogmsg/dialogmsg2'
        })
    },
    urlmsg3: function (e) {
        wx.navigateTo({
            url: '../dialogmsg/dialogmsg3'
        })
    },
    gongxi: function (e) {
        wx.navigateTo({
            url: '../dialogcancel/gongxi'
        })
    }
})