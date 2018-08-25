

// 在webpack 中如何使用 vue 
// 1 安装 vue包 npm i vue -s
// 2 由于vue开发中推荐使用，.vue 格式的模板文件，所以需要导入相应的 loader 来解析
// .vue 文件  npm i vue-loader vue-templeate-compiler -D
// 3 在 main.js 中导入vue包  import  Vue from 'vue' (import Vue from '../node_modules/vue/dist/vue.js')
// 4 定义一个 .vue 结尾的模板文件，文件结构 template script style
// 5 使用 import login form './login.vue' 导入这个组件
// 6 创建 vue 实例   var vm = new Vue({el:'#app'},render:c=>{c(login)})
// 7 在页面中定义一个 id 为 app 的div 元素