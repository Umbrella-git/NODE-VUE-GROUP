//1.导入 http 模块
const http = require("http");

//2.创建服务器
const server = http.createServer((req, res) => {
  //设置响应头
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  //设置响应内容
  res.end("hello world");
});

//3.监听端口，启动服务器
server.listen(3000, () => {
  console.log("服务器启动成功");
});
