"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_nut_button2 = common_vendor.resolveComponent("nut-button");
  _easycom_nut_button2();
}
const _easycom_nut_button = () => "../../uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/button/index.js";
if (!Math) {
  _easycom_nut_button();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "primary"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/miniprogram/UniNutUI\u793A\u4F8B/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
