
const isDebug = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: './',
  devServer: {
    open: true
  },
  chainWebpack: config => {
    isDebug || config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
}
