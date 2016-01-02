module.exports = {
  // 表示入口文件
  entry: "./app.js",
  // 表示输出文件
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  // 表示这个依赖项是外部lib，遇到require它不需要编译，
  // 且在浏览器端对应window.React
  externals: {
    'react': 'window.React'
  },
  // 凡是遇到jsx结尾的，都用jsx-loader这个插件来加载，
  // 且启用harmony模式
  module: {
    loaders: [
      { test: /\.js/, loader: "jsx-loader?harmony" }
    ]
  }
};
