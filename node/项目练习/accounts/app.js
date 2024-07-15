// 引入http-errors模块，用于创建HTTP错误
var createError = require("http-errors");
// 引入express模块，用于创建web应用
var express = require("express");
// 引入path模块，用于处理文件路径
var path = require("path");
// 引入cookie-parser模块，用于解析cookie
var cookieParser = require("cookie-parser");
// 引入morgan模块，用于记录HTTP请求日志
var logger = require("morgan");

// 引入index路由模块
var indexRouter = require("./routes/index");
// 引入users路由模块
var usersRouter = require("./routes/users");

// 创建express应用
var app = express();

// 设置视图文件夹和视图引擎
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 使用morgan中间件记录HTTP请求日志
app.use(logger("dev"));
// 使用express.json中间件解析JSON格式的请求体
app.use(express.json());
// 使用express.urlencoded中间件解析URL编码格式的请求体
app.use(express.urlencoded({ extended: false }));
// 使用cookie-parser中间件解析cookie
app.use(cookieParser());
// 使用express.static中间件提供静态文件服务
app.use(express.static(path.join(__dirname, "public")));

// 使用index路由模块处理根路径的请求
app.use("/", indexRouter);
// 使用users路由模块处理/users路径的请求
app.use("/users", usersRouter);

// 捕获404错误，并转发给错误处理程序
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误处理程序
app.use(function (err, req, res, next) {
  // 设置本地变量，只在开发环境中提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render("error");
});

// 导出应用
module.exports = app;
