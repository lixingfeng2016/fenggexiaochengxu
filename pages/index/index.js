Page({

  /**
   * 页面的初始数据
   */
  data: {
    carouselList: [],
    navigationBars:[],
    fashions:[],
    num:'搜索'

  },
  onetwo(e){
      console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestCarouselListData();//请求轮播图
    this.requestnavigationBar();//请求导航栏
    this.loods();//楼层请求
  },
  //请求轮播图
  requestCarouselListData() {
    var that = this;//注意this指向性问题
    // var urlStr = that.data.host + "/api/public/v1/home/swiperdata"; //请求连接注意替换（我用本地服务器模拟）
    // console.log("请求轮播图：" + urlStr);
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      data: {//这里放请求参数，如果传入参数值不是String，会被转换成String 
        // x: '',
        // y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log("轮播图返回值：");
        // console.log(res);
        var resultArr = res.data.message;
        that.setData({
          carouselList: resultArr
        })
      }
    })
  },

  //点击了轮播图
  chomeCarouselClick: function (event) {
    var urlStr = event.currentTarget.dataset.url;
    console.log("点击了轮播图：" + urlStr);
    // wx.navigateTo({
    //   url: 'test?id=1'
    // })
  },

  // 请求导航栏数据
  requestnavigationBar(){
    var that = this;//注意this指向性问题
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      data: {//这里放请求参数，如果传入参数值不是String，会被转换成String 
        // x: '',
        // y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log("轮播图返回值：");
        // console.log(res);
        var resultArr = res.data.message;
        that.setData({
          navigationBars: resultArr
        })
      }
    })
  },

  // 楼层请求
  loods(){
    var that = this;//注意this指向性问题
    wx.request({
      url: "https://api.zbztb.cn/api/public/v1/home/floordata",
      data: {//这里放请求参数，如果传入参数值不是String，会被转换成String 
       
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log("轮播图返回值：");
        console.log(res);
        var resultArr = res.data.message;
        that.setData({
          fashions: resultArr
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})