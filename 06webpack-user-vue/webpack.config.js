
const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlwebpackplugin = require('html-webpack-plugin')

// 这是node中向外暴露成员的形式
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new vueLoaderPlugin(),
        new htmlwebpackplugin({
             // 创建一个在内存中生成html 页面的插件
        template:__dirname + '/src/index.html',
        filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    devServer:{
        open:true,
        port:3333
    }
}