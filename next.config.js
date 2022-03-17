const withImages = require("next-images");
const withTM = require('next-transpile-modules')(['@wevisdemo/ui']);
module.exports = withTM(withImages({

  basePath: "/bkk-followup",
  // assetPrefix: '/bkk-followup/',
  webpack(config, options) {

    return config;
  },
}));

