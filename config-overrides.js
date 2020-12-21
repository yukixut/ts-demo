//config-overrides.js
const { override, addLessLoader, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }),
    addLessLoader({
      lessOptions: {
        strictMath: true,
        noIeCompat: true,
        modifyVars: {
          "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
        },
      },
    })
    // addDecoratorsLegacy(),
  ),
};
