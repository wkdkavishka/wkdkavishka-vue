const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./", // Crucial!
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
  pwa: {
    name: "WKDKavishka",
    themeColor: "#134E4A",
    backgroundColor: "#FFFFFF",

    favicon32: "img/icons/favicon-32x32.png",
    favicon16: "img/icons/favicon-16x16.png",
    appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
    maskIcon: "img/icons/safari-pinned-tab.svg",
    msTileImage: "img/icons/msapplication-icon-144x144.png",
  },
});
