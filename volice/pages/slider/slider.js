Page({
  data: {
    controls: [
      {
        id: 1,
        name: '功能一',
        value: 30,
        max: 60
      },
      {
        id: 2,
        name: '功能二',
        value: 30,
        max: 60
      },
      {
        id: 3,
        name: '功能三',
        value: 30,
        max: 60
      },
      {
        id: 4,
        name: '功能四',
        value: 50,
        max: 100
      }
    ]
  },

  // 控制加
  addCount: function (event) {
    let data = event.currentTarget.dataset
    let controls = this.data.controls
    let control = controls.find(function (v) {
      return v.id == data.id
    })
    let control1 = controls.find(function (v) {
      return v.max == data.max
    })

    if (control.value > control1.max)
      return
    control.value += 10;
    this.setData({
      'controls': controls
    })
  },
  // 控制减
  minusCount: function (event) {
    let data = event.currentTarget.dataset
    let controls = this.data.controls
    let control = controls.find(function (v) {
      return v.id == data.id
    })
    if (control.value <= 0)
      return
    control.value -= 10;
    this.setData({
      'controls': controls
    })
  },
  //拖动
  sliderchange: function (e) {
    let data = e.currentTarget.dataset
    let controls = this.data.controls
    let control = controls.find(function (v) {
      return v.id == data.id
    })
    this.setData({
      'controls': controls
    })

  }
})