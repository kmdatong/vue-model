


// 这是node 中向外暴露成员的形式
//module.exports = {} 

// 在ES6 中通过规范的形式，规定了如何 导入 和 到处 模块
// 在ES6 中使用 import 模块名 from '标识符' 和 import '路径'
// 在ES6 中使用 export default{} 和 export 向外暴露成员

// 在一个模块中只允许使用一次 export default 但是可以使用 额sport
export default{
  
    name:'datong',
    age:23
   
}

// export 可以向外暴露多个成员即：同一个模块中可以使用多次，
// export 向外暴露成员 只能使用 {} 来接收 如：import datatest,{title,content} from './testdata.js'
// export 在外接收时，必须严格按照 变量名来接收 {title,content} 中的 title 和下面的title 要一致
export var title ='这是标题'
export var content = '另外一个export数据'

// 在node 中使用 const 名称 = require('模块表示') 来暴露成员
// 使用 module.exports 和 exports 来向外暴露成员


