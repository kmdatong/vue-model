// 这里是项目的 js 入口文件

//1 导入jquery 
import $ from 'jquery'

import './css/index.css'
// 引入node_modules 中的文件，可以省略 node_modules
import 'bootstrap/dist/css/bootstrap.css'


// 使用 webpack-dev-server 这个工具，来实现自动打包功能
//1、运行 命令 npm i webpack-dev-server -D 将工具安装到本地开发依赖
//2、 安装完毕后，webpack-dev-server 的 命令和 webpack 完全一样
//3、 由于是本地安装的（不是全局安装 -g） ，无法直接当做命令运行
//4、注意：webpack-dev-server 要求在本地安装（即使已经全局安装了也不行） webpack 
//5、在webpack.json 文件的 scripts 节点中 添加配置 
//6、webpack-dev-server 打包好的js文件并没有存放在磁盘上，而是存放在内存中
//7、webpack-dev-server 把打包好的文件托管到本地项目中，与dist、src 平级

// 运行命令  npm run start 或者 npm run dev 


class person{
    static info = {name:'datong',age:22}
}

// 此处为es6 语法，需要借助 插件babel 来将其转换为 低级语法。
// 可以通过安装如下两套包来解决问题---(两套都必须装)
//1.1  npm i babel-core  babel-loader babel-plugin-transform-runtime -D
//1.2  npm i babel-preset-env babel-preset-stage-0 -D
//2 打开配置文件 webpack.config.js 在module 中添加规则
// {test:/\.js/,use:'babel-loader',exclude:/node_modules/} 
// 注意： 排除 node_modules文件中的js 
// 3 在项目更目录中创一个一个babel 的配置文件 '.babelrc' 的文件，里面的配置用json语法
// 4 在 .babelrc 中写如下配置 

console.log(person.info.name);