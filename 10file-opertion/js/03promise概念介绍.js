import { promises } from "fs";
import { request } from "http";


// 1 Promise 是一个构造函数 ， 可以 new Promise() 得到一个 Promise 对象
// 2 在Promise 中有两个函数 reject/失败时候的回调函数， resolve/成功时候的回调函数
//


const fs = request('fs')
const path = require('path')

var Promise = new promises(function(){
   
getFileByPath(
    path.join(__dirname,'../file/21.txt'),
    function(data){
    console.log('成功了'+ data)
    },
    function(errormsg){
        console.log('---------失败了-----------'+ errormsg)
    }
);
});

function getFileByPath(pathurl,successCallback,errorCallback)
{
  
    fs.readFile(pathurl,'utf-8',function(error,dataResult){
        if(error)
        errorCallback(error);
       else
        successCallback(dataResult);
    })

}


