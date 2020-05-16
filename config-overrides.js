const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  fixBabelImports("import", { // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true  // css只加载.css文件，true加载 .css、.less、.sass文件
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      "@primary-color": "red",
      "@link-color": "orange"
    }
  }),
  addDecoratorsLegacy()//配置装饰器器
);