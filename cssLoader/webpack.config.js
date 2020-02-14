const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
module.exports = {
    mode:'development',
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.eot|svg|ttf|woff|woff2/,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                           // module:true,//css模块化 css不会影响全局
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                'xml-loader'
                ]
            },
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
                filename:'dist.html',
                template:'./index.html'
            }
        )
    ]
}