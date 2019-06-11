// pages/ucenter/actlist/actlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //当前被选中的tab页
    activityNum: 0, //当前分类下需显示的活动数量
  },

  /**
   * 切换活动类型
   */
  viewSwitch: function (event) {
    var cur = event.currentTarget.dataset.current

    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({ currentTab: cur })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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