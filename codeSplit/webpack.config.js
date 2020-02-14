const path = require('path')
module.exports ={
    mode:'development',
    entry:{
       // lodash:"./src/fun.js",
        main:'./src/index.js'
    },
    module:{
        rules:[
        ]
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    optimization:{
        splitChunks:{
            chunks: "all",//默认async 分割只对异步生效 all全部生效 
            minSize: 30000,//文件最小大小  字节单位
            minChunks: 1,//最少的文件数
            maxAsyncRequests: 5,//最大异步请求数
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
            default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
            //  codespliting
        }
    }
}