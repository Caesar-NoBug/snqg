"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    change01: function() {
      common_vendor.index.navigateTo({
        url: "/pages/call_detail/call_detail"
      });
    },
    change02: function() {
      common_vendor.index.navigateTo({
        url: "/pages/call_history/call_history"
      });
    }
  }
};
if (!Array) {
  const _easycom_nut_divider2 = common_vendor.resolveComponent("nut-divider");
  const _easycom_nut_button2 = common_vendor.resolveComponent("nut-button");
  (_easycom_nut_divider2 + _easycom_nut_button2)();
}
const _easycom_nut_divider = () => "../../uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/divider/index.js";
const _easycom_nut_button = () => "../../uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/button/index.js";
if (!Math) {
  (_easycom_nut_divider + _easycom_nut_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change01),
    b: common_vendor.o($options.change02)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u5C11\u5E74\u5F3A\u56FD/wechat-end-master/pages/main/main.vue"]]);
wx.createPage(MiniProgramPage);
