"use strict";
module.exports = () => ({
    plugins: [
        require("autoprefixer")({
            // 浏览器兼容
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
            ],
        }),
        require("postcss-pxtorem")({
            // 根大小
            rootValue: 100,
            propList: ["*"],
        }),
    ],
});
