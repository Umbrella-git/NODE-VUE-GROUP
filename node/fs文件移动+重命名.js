//1.导入 fs 模块
const fs = require("fs");

//2.重命名
fs.renameSync("./a.txt", "./b.txt"); //将 a.txt 重命名为 b.txt

//3.移动
fs.renameSync("./b.txt", "./test/b.txt"); //将 b.txt 移动到 test 文件夹下并重命名为 b.txt
