const path = require('path')
module.exports ={
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',
                        limit: 14000,//pic大小小于url
                        outputPath:'img/',
                        publicPath:'dist/img'
                    }
                }
            },
            // {
            //     test:/\.(jpg|png)$/,
            //     use:{
            //         loader:'file-loader',
            //         options:{
            //             name:'[name].[ext]',
            //             outputPath:'img/'
            //         }
            //     }
            // }
        ]
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    }
}