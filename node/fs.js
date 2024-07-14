//1.导入 fs 模块
const fs = require("fs");

//2.创建文件，写入内容
fs.writeFile("./hello.txt", "hello world", (err) => {
  // 异步写入
  if (err) {
    console.log(err);
  } else {
    console.log("写入成功");
  }
});

fs.writeFileSync("./hello.txt", "hello world"); // 同步写入

console.log("hello world");
