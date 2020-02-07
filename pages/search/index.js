
import { request} from '../../request/request.js'
// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_data:[],  //商品列表的数
    sugData: '', //搜索框的值


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
// 绑定搜索框
  bindKeyInput: function (e) {
    this.setData({
      sugData: e.detail.value
    })
  },

// 点击搜素
  handlesearch:async function(e){
      let {sugData} =this.data;

      // 输入商品不能为空
      if(!sugData){
          wx.showToast({
            title: '输入商品不能为空',
            icon:'none'
          })
          return false
      }

      const res= await request({
        url:'/goods/qsearch',
        data:{query:sugData}
      })
      console.log(res)
      if(!res.data.message){
        wx.showToast({
          title: '搜索物品不存在',
          icon:'none'
        });
        return false
      };

    this.setData({
      search_data: res.data.message
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