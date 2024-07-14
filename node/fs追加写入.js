//1. appendFile 方法
const fs = require("fs");
fs.appendFile("test.txt", "，异步追加的内容", "utf8", (err) => {
  if (err) throw err;
  console.log("追加内容成功");
});

fs.appendFileSync("test.txt", "\r,同步追加的内容", "utf8");
