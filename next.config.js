const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@wevisdemo/ui"]);
module.exports = withTM(
  withImages({
    basePath: "",
    assetPrefix: "",
    webpack(config, options) {
      return config;
    },
  })
);
