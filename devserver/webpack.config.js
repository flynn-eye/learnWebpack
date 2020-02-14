const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const webpack = require('webpack');
module.exports = {
    mode:'development',
    devtool:'source-map',
    devServer:{
        contentBase:'./dist', //script webpack-dev-server
        open:true,//自动打开浏览器,
        hot:true,
        // hotOnly:true,//hmr
        proxy:{
            '/api':"localhost:3000", //如果请求  /api/login    则会加上localhost:3000/api/login
            changeOrigin: true,//跨域
        }
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {'^/api' : 'redict'}
        //     }    发送  localhost:3000/redict/login
        // }
        // proxy: [{
        //     context: ['/auth', '/api'],
        //     target: 'http://localhost:3000',也可以这样匹配多个
        // }]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'./dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                title:'learnWebpack',
                filename:'index.html',
                template:'./index.html'
            }
        ),
       new webpack.HotModuleReplacementPlugin(),
      
    ]
}