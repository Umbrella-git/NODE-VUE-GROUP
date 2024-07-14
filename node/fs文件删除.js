//1.导入 fs 模块
const fs = require("fs");

//2.删除文件 unlink
fs.unlink("文件路径", (err) => {});

//3.删除文件 rm
fs.rm("文件路径", (err) => {});

//4.删除文件夹
fs.rmdir("文件夹路径", (err) => {});
