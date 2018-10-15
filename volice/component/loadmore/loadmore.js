Component({
  options: {
    multipleSlots: false
  },
  data: {
    isHideLoadMore: true,
    loadis:false
  },
  properties: {
    title: {
      type: String,
      value: '标题'
    }
  },
  methods: {
    showClose() {
      this.setData({
        isHideLoadMore: false,
      })
    },
    showUp() {
      this.setData({
        isHideLoadMore:true,
      })
    },
    loadshow(){
      this.setData({
        loadis:true
      })
    },
    loadshowUp() {
      this.setData({
        loadis: false
      })
    }
  }
})


