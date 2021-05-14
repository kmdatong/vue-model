
const fs = require("fs")
const path = require("path")


// 把成功和失败的回调函数分开
// 成功 successCallback, 出错 errorCallback
function getFileByPath(pathurl,successCallback,errorCallback)
{
  
    fs.readFile(pathurl,'utf-8',function(error,dataResult){
        if(error)
        errorCallback(error);
       else
        successCallback(dataResult);
    })

}


getFileByPath(
        path.join(__dirname,'../file/21.txt'),
        function(data){
        console.log('成功了'+ data)
        },
        function(errormsg){
            console.log('---------失败了-----------'+ errormsg)
        }
);

// 存在问题，如果多层嵌套调用，会产生回调地狱
// 可以使用 ES6 中的的 promise 来解决回调地狱的问题