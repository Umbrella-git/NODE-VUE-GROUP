//1.导入模块
const fs = require("fs");
const path = require("path");

//2.使用模块
console.log(path.resolve(__dirname, "./index.js")); //输出当前文件所在目录的绝对路径
