const webpack = require('webpack');
var path = require("path")

module.exports = {
  outputDir : path.resolve(__dirname, "../backend/public/"),
  devServer: {
    //https 는 geolocation을 위해 사용 but 맥 크롬에서 오류남
    https:true,
    proxy: { // proxyTable 설정
      '/api': { target: 'http://localhost:65005/api',
        changeOrigin: true ,
        pathRewrite:{ "^/api" : ''
        }
      }
    }
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
