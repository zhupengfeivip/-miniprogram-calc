//index.js
//获取应用实例
const app = getApp()

Page({
  data: { list: [] },
  onLoad: function (options) {
    console.log('onLoad');
    // 页面初始化 options为页面跳转所带来的参数
    var groupItem = {};
    var index = 0;
    //紧急电话
    groupItem.id = (index++).toString();
    groupItem.name = "紧急电话";
    groupItem.open = false;
    groupItem.subName = [];
    groupItem.phone = [];
    groupItem.subName.push("交通事故");
    groupItem.phone.push("122");
    groupItem.subName.push("号码查询");
    groupItem.phone.push("114");
    this.data.list.push(groupItem);

    //银行电话
    groupItem = {};
    groupItem.id = (index++).toString();
    groupItem.name = "银行电话";
    groupItem.open = false;
    groupItem.subName = [];
    groupItem.phone = [];
    groupItem.subName.push("工商银行");
    groupItem.phone.push("95588");
    groupItem.subName.push("建设银行");
    groupItem.phone.push("95533");
    groupItem.subName.push("农业银行");
    groupItem.phone.push("95599");
    groupItem.subName.push("中国银行");
    groupItem.phone.push("95559");
    groupItem.subName.push("交通银行");
    groupItem.phone.push("95528");
    groupItem.subName.push("浦发银行");
    groupItem.phone.push("95568");
    this.data.list.push(groupItem);
    //快递电话
    groupItem = {};
    groupItem.id = (index++).toString();
    groupItem.name = "快递电话";
    groupItem.open = false;
    groupItem.subName = [];
    groupItem.phone = [];
    groupItem.subName.push("EMS");
    groupItem.phone.push("11183");
    groupItem.subName.push("顺丰速运");
    groupItem.phone.push("95338");
    groupItem.subName.push("申通快递");
    groupItem.phone.push("95543");
    groupItem.subName.push("中通速递");
    groupItem.phone.push("95311");
    groupItem.subName.push("韵达快运");
    groupItem.phone.push("95546");
    this.data.list.push(groupItem);
    //通讯客服
    groupItem = {};
    groupItem.id = (index++).toString();
    groupItem.name = "通讯客服";
    groupItem.open = false;
    groupItem.subName = [];
    groupItem.phone = [];
    groupItem.subName.push("中国移动");
    groupItem.phone.push("10086");
    groupItem.subName.push("中国联通");
    groupItem.phone.push("10010");
    groupItem.subName.push("中国电信");
    groupItem.phone.push("10000");
    groupItem.subName.push("中国邮政");
    groupItem.phone.push("11185");
    groupItem.subName.push("中国广电");
    groupItem.phone.push("96888");
    this.data.list.push(groupItem);
    //投诉举报
    groupItem = {};
    groupItem.id = (index++).toString();
    groupItem.name = "投诉举报";
    groupItem.open = false;
    groupItem.subName = [];
    groupItem.phone = [];
    groupItem.subName.push("消费者投诉");
    groupItem.phone.push("12315");
    groupItem.subName.push("价格投诉");
    groupItem.phone.push("12358");
    groupItem.subName.push("环保投诉");
    groupItem.phone.push("12369");
    groupItem.subName.push("质量投诉");
    groupItem.phone.push("12365");
    groupItem.subName.push("税务投诉");
    groupItem.phone.push("12366");
    groupItem.subName.push("电信投诉");
    groupItem.phone.push("12366");
    groupItem.subName.push("市长热线");
    groupItem.phone.push("12345");
    this.data.list.push(groupItem);
    //铁路航空
    groupItem = {};
    groupItem.id = (index++).toString();
    groupItem.name = "铁路航空";
    groupItem.open = false;
    groupItem.subName = [];
    groupItem.phone = [];
    groupItem.subName.push("铁路");
    groupItem.phone.push("12306");
    groupItem.subName.push("购买机票");
    groupItem.phone.push("66666666");
    this.data.list.push(groupItem);

    this.setData({
      list: this.data.list
    });
  },
  widgetsToggle: function (e) {
    console.log('widgetsToggle');
    var id = e.currentTarget.id;
    var list = this.data.list;
    console.log(list);
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  },
  callPhone: function (e) {
    console.log(e);
    console.log(e.target.dataset.phone);
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.phone
    })
  },
  calc: function () {
    wx.navigateTo({
      url: '../calc/calc'
    })
  },
  calendar: function () {
    wx.navigateTo({
      url: '../calendar/calendar'
    })
  }
});
