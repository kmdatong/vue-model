
const path = require('path')

// 在这里通过node中的配置。向外设置一个配置对象
module.exports = {
 // 需要手动指定 入口 和 出口
  entry:'./src/main.js',// __dirnam 当前根目录
  output:{
      // 输出文件相关的配置
      path:__dirname, // 指定打包好的文件输出的位置
      filename:'bundle2.js'
  }
}