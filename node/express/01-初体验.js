// 引入express模块
const express = require("express");

// 创建一个express应用
const app = express();

// 当访问"/home"路径时，返回"你好，我是express"
app.get("/home", (req, res) => {
  res.send("你好，我是express");
});

// 启动应用，监听3000端口
app.listen(3000, () => {
  console.log("应用启动成功");
});
