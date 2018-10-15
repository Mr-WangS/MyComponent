
Component({
  options: {
    multipleSlots: false
  },
  data: {
    isShow: false
  },

  methods: {
    //隐藏弹框
    hideDialogShow() {
      this.setData({
        isShow: true
      })
    },
    hideDialogHide() {
      this.setData({
        isShow: false
      })
    },

  }
})
