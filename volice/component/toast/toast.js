// components/Dialog/dialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 弹窗内容
    content: {
      type: String,
      value: 'BRM小程序：已复制'
    },
  },
  data: {
    // 弹窗显示控制
    isShow: true
  },
  methods: {
    showToast(time) {
      let that = this;
      this.setData({
        isShow: !this.data.isShow
      })
      setTimeout(function () {
        that.setData({
          isShow: !that.data.isShow
        })
      }, time?time:1500)
    },
  }
})

