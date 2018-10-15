Page({
  data: {
    tabIndex:0 ,
    transPer:0, 
  },
  onLoad: function () {
    this.setData({
      tabNav: {
        tabnum: 3,
        tabitem: [
          {
            "text": "Tab1"
          },
          {
            "text": "Tab2"
          },
          {
            "text": "Tab3"
          }
        ]
      },
    })
  },
  tabClick(e){
    this.setData({
      tabIndex: e.currentTarget.dataset.tabid,
       })
    this.setData({
      transPer: this.data.tabIndex * 100 / this.data.tabNav.tabnum
    })
  },
  /**下拉到底部 */
  pullUpLoad(e){
    console.log(e)
  }
})
