Page({

  /**
   * 页面的初始数据
   */
  data: {



    // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

    // isOpen: false,//播放开关 

    // starttime: '00:00', //正在播放时长

    // duration: '06:41' //总时长
    tablist:[
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",  starttime: '00:00', duration: '06:41'},


      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
      { src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46", starttime: '00:00', duration: '06:41' },
     
    ],
    arrs:[],
    autoplat: [],
    allval:[],
    updatas:[],
    ends:[],
  },

  onLoad: function (e) {

    for (let i = 0; i < this.data.tablist.length;i++){
      this.data.arrs.push(wx.createAudioContext('myAudio'+i))
      this.data.autoplat.push({ isOpen:false})
      this.data.updatas.push({ offset: "", starttime: '00:00',max:"" })
      this.data.ends.push({ duration: "", offsetNow: "", currentTime: "", min: "",starttime:"",max:""})
    }
    this.setData({ arrs: this.data.arrs, autoplat: this.data.autoplat, updatas: this.data.updatas, ends: this.data.ends})
    var that = this;
  },
  //开始播放
  audioPlay: function (e) {
    console.log(e.currentTarget.dataset.id)
    let i = e.currentTarget.dataset.id;
   

    for (var s = 0; s < this.data.arrs.length;s++){
      if(i==s){
        this.data.arrs[i].play()
        this.data.autoplat[i].isOpen = true;
        this.setData({
          autoplat: this.data.autoplat
        })
      }else{
        this.data.arrs[s].pause()
        this.data.autoplat[s].isOpen = false;
        this.setData({
          autoplat: this.data.autoplat
        })
      }
    }

  },

  //暂停播放
  audioPause: function (e) {
    let i = e.currentTarget.dataset.id;
    this.data.arrs[i].pause()
    this.data.autoplat[i].isOpen = false;
    this.setData({
      autoplat: this.data.autoplat
    })

  },

  //拖动进度条

  sliderChange(e) {
    let i = e.currentTarget.dataset.id;
    this.data.updatas[i].offset = parseInt(e.detail.value);
    console.log(this.data.arrs[i])
    this.data.arrs[i].seek(this.data.updatas[i].offset);
  },

  //监听播放时长

  updata(e) {

    let i = e.currentTarget.dataset.id;

    var that = this;
   
    this.data.ends[i].duration = e.detail.duration; //总时长
    console.log(e)
    this.data.ends[i].offsetNow = e.detail.currentTime; //当前播放时长

    this.data.ends[i].currentTime  = parseInt(e.detail.currentTime);

    this.data.ends[i].min = "0" + parseInt(this.data.ends[i].currentTime  / 60);

    this.data.ends[i].max  = e.detail.duration;

    var sec = this.data.ends[i].currentTime % 60;

    if (sec < 10) {

      sec = "0" + sec;

    }; 

    this.data.ends[i].starttime = this.data.ends[i].min + ':' + sec; /* 00:00 */
    this.data.updatas[i].offset = this.data.ends[i].currentTime
    this.data.updatas[i].starttime = this.data.ends[i].starttime
    this.data.updatas[i].max = this.data.ends[i].max
    that.setData({
      updatas: this.data.updatas
    })

    //判断音频播放结束

    if (this.data.ends[i].offsetNow >= this.data.ends[i].duration) {

      console.log("播放结束")
      that.data.updatas[i].starttime =  '00:00'
      that.data.updatas[i].offset = 0
      this.data.autoplat[i].isOpen = false;
      that.setData({
        updatas: that.data.updatas,
        autoplat: this.data.autoplat,
      })

    }

  }



})