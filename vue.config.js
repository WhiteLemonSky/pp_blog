const webpack=require("webpack")
module.exports = {
  configureWebpack:{
    plugins:[
      new webpack.ProvidePlugin(
        {
          $:"jquery",
          jQuery: "jquery",
          "windows.jQuery" : "jquery"
        }
      )
    ]
      }
    ,
   


    // 选项...
    // publicPath: "./", //打包时加上
    publicPath: process.env.NODE_ENV === 'production' ? './' : './'  
    // devServer: {
    //   https: false,
    //   proxy: {
    //     '/api': {
    //       target: 'http://120.78.95.239',
    //       changOrigin: true,
    //       pathRewrite: {
    //         ['^' + process.env.VUE_APP_BASE_API]: ''
    //       }
    //     }
    //   },
    // }
  }
  