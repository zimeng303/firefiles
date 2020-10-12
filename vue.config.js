'use strict'
const port = process.env.port || process.env.npm_config_port || 80  // 端口

// vue.config.js
module.exports = {
    // 部署生产环境和开发环境下的URL
    publicPath: process.env.NODE_ENV === 'production' ? "/" : "",
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    outputDir: 'dist',
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "static",
    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    lintOnSave: process.env.NODE_ENV === 'development',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: port,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: "http://localhost/",
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    }
}