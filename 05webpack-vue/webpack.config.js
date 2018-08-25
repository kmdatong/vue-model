
const webpack = require('webpack')
const path = require('path')
const htmlwebpackplugins = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { // 指定打包文件的 入口文件，和出口文件
  entry:path.join(__dirname,'./src/main.js'),
  output:{
      path:path.join(__dirname,'./dist'),
      filename:'bundle.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),  // new 一个启动热更新的对象
    new htmlwebpackplugins({
       // 创建一个在内存中生成html 页面的插件
       template:__dirname + '/src/index.html',
       filename:'index.html'

    }),
    new VueLoaderPlugin()  // vue-loader 要可以用这里是必须的
 ],
 module:{
   rules:[
     {test:/\.vue$/,use:'vue-loader'}
   ]
 }
}