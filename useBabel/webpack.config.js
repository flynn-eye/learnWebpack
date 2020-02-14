const path = require('path')
// npm install --save-dev babel-loader @babel/core
//npm install @babel/preset-env --save-devc
module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    optimization:{
        usedExports:true//打开tree shaking 生产环境默认·true package.json sideEffects
    },
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'./dist')
    },
}