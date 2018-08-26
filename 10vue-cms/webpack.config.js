
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
            { test: /\.vue$/,
                use: 'vue-loader'},
                {test:/\.js/,use:'babel-loader',exclude:/node_modules/} ,
            {test:/\.(jpg|png|gif|jpeg|bmp)$/,use:'url-loader?limit=8000'},
            // limit 限制图片是否转换为 base64 ,如果图片大小，小于 8000 则不转换为 base64 ， 反之则转换
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test: /\.css$/,use: ["style-loader", "css-loader", "sass-loader"]},
            { test: /\.scss$/,use: [ "style-loader", "css-loader" , "sass-loader"]}
        ]
    },
    devServer:{

    }
}