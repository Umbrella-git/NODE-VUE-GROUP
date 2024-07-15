var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 记账本列表
router.get("/list", function (req, res, next) {
  res.render("list", { title: "记账本列表" });
});

// 添加记录
router.get("/list/add", function (req, res, next) {
  res.send("添加记录");
});

// 编辑记录
module.exports = router;
