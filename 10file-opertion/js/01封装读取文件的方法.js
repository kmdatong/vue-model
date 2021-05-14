
const fs = require("fs")
const path = require("path")

//普通的读取文件方式
// fs.readFile(path.join(__dirname,'../file/1.txt'),'utf-8',function(error,dataResult){
//     if(error)
//     throw error

//     console.log(dataResult);
// })

 // 定义回调函数 callback
 // 可以规定callback 中的两个参数， 1-失败结果，2-成功结果
 // 如果成功了 1-为null,2-为结果。
 // 如果失败  1-错误信息，2-null
function getFileByPath(pathurl,callback)
{
  
    fs.readFile(pathurl,'utf-8',function(error,dataResult){
        if(error)
        callback(error);
    
        //console.log(dataResult);
        callback(null,dataResult);
    })

}


getFileByPath(path.join(__dirname,'../file/1.txt'),function(error,data)
{
    if(error)
      console.log(error);
    else
      console.log(data);
});