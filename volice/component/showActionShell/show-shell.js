
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 弹窗内容
    content: {
      type: String,
      value: '你确认要驳回该商品的活动申请'
    },
  },  
  data: {
    showShell:true,
    cancelbind:true,
    copybind:true,
    iphonebind:true,
    isshow:false
  },
  methods: {
  clickMe(data) {
    if(data==1){
      this.setData({
        showShell: !this.data.showShell,
        cancelbind: true,
        copybind: true,
        iphonebind: true,
        isshow:false
      })
    }else{
      this.setData({
        showShell: !this.data.showShell,
        cancelbind: true,
        copybind: true,
        iphonebind: true,
        isshow: true
      })
    }
  },
  disaped(){
    let that = this
    setTimeout(function () {
      that.clickMe()
    },100)
  },
  cancel() {
    this.setData({
      cancelbind: !this.data.cancelbind
    })
  },
  phones(){
    this.setData({
      iphonebind: !this.data.iphonebind
    })
  },
  copys(){
    this.setData({
      copybind: !this.data.copybind
    })
  },
  /**
   * 私有
   */
    callPhone(){
      this.triggerEvent("callPhone")
    },
    callCopy(){
      this.triggerEvent("callCopy") 
    }
  }
})
