const withImages = require("next-images");
module.exports = withImages({

  basePath: "/bkk-followup",
  // assetPrefix: '/bkk-followup/',
  webpack(config, options) {
    return config;
  },
});
