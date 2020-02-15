module.exports = {
   
    "env": {//环境
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",//导入推荐规则  npm install -D eslint-config-airbnb  使用airbnb规则
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"//按照模块解析
    },
    "rules": {
        //自定义规则
        "no-var": "error",
    }
};
//npx eslint --init
//npx eslint src检查src下的代码是否符合规范