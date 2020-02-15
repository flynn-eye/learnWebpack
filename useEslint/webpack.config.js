const path = require('path')
module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: "pre",//编译前检查
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
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
}