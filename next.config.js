const withImages = require("next-images");
module.exports = withImages({
  // target: "serverless",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:any*",
  //       destination: "/",
  //     },
  //   ];
  // // },
  basePath: "/bkk-followup",
  // assetPrefix: '/bkk-followup/',
  webpack(config, options) {
    return config;
  },
});
