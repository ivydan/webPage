var test = require("./test.js");
var module = require("./module.js");

console.log(test, module);

require("style-loader!css-loader!./main.css");
//style-loader 讲css代码以style标签格式插入到页面上从而生效，
//css-loader 检查css代码代码中的import语句找到依赖并合并

document.body.appendChild(document.createElement("div"));