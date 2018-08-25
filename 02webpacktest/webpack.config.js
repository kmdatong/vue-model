
const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
// 只要是插件都要导入到 下面的 plugins 中去
// 作用： 在内存中生成 html 
const htmlwebpackplugins = require('html-webpack-plugin')

// 在这里通过node中的配置。向外设置一个配置对象
module.exports = {
 // 需要手动指定 入口 和 出口
  entry:'./src/main.js',// __dirnam 当前根目录
  output:{
      // 输出文件相关的配置
      path:__dirname, // 指定打包好的文件输出的位置
      filename:'bundle.js'
  },
  devServer:{
     // 配置 webpack-dev-server 命令参数的第二种形式，删除webpack.json 
      //中的参数   --open --port 3001 --hot 

      open:true,  // 是否自动打开浏览器
      port:3000,  // 指定端口号
      contentBase:'scr', // 指定托管的根目录
      hot:true  // 启用热更新 第一步

  },
  plugins:[
     new webpack.HotModuleReplacementPlugin(),  // new 一个启动热更新的对象
     new htmlwebpackplugins({
        // 创建一个在内存中生成html 页面的插件
        template:__dirname + '/src/index.html',
        filename:'index.html'

     })
  ],
  module:{
      rules:[
          {test:/\.css$/,
            use:['style-loader','css-loader' // 从右到左调用
        ]} 
      ]
  }
}