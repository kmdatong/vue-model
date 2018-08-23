
const path = require('path')

module.exports = { // 指定打包文件的 入口文件，和出口文件
  entry:path.join(__dirname,'./src/main.js'),
  output:{
      path:path.join(__dirname,'./dist'),
      filename:'bundle.js'
  }
}