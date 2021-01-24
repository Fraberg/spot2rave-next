const path = require("path")

module.exports = {
  outputDir: path.resolve(__dirname, "../back/public"),
  devServer: {
    progress: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  },
  chainWebpack: config => {
    config.performance.maxEntrypointSize(400000).maxAssetSize(400000)
  }
}
