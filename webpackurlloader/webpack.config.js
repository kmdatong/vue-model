
const path = require('path')

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|jpeg|bmp)$/,use:'url-loader?limit=8000'},
            // limit 限制图片是否转换为 base64 ,如果图片大小，小于 8000 则不转换为 base64 ， 反之则转换
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}