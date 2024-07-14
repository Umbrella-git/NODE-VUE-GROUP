//引入ejs
const ejs = require("ejs");
const fs = require("fs");
//渲染模板
let china = "中国";
// let result = ejs.render("我爱你 <%= china %>", { china });

let html = fs.readFileSync("./index.html").toString();
console.log(html);

let result = ejs.render(html, { china });
//输出结果
console.log(result); //我爱你 中国
