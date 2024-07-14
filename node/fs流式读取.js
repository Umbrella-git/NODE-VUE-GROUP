//1.导入 fs 模块
const fs = require("fs");

//2.创建流式读取
const rs = fs.createReadStream("./hello.txt");
const ws = fs.createWriteStream("./hello-流式写入.txt");

//3.监听 data 事件
rs.on("data", (chunk) => {
  ws.write(chunk);
});

const process = require("process"); // 引入内存计算模块

rs.on("end", () => {
  console.log(
    "读取完成,总计使用内存：" + process.memoryUsage().rss / 1024 / 1024 + "MB;"
  );
});

//4. 管道
// rs.pipe(ws);
