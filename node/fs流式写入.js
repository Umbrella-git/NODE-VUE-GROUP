//1.导入 fs 模块
const fs = require("fs");

//2.创建文件，写入内容
const ws = fs.createWriteStream("./hello.txt", {
  flags: "w",
  encoding: "utf-8",
  mode: 0o666,
});

ws.write("hello nodejs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("写入成功");
  }
});

ws.end("hello world");
