// 阻塞
// var fs = require("fs");
//
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("block程序执行结束!");


// 异步
var fs2 = require("fs");
fs2.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("async程序执行结束!");
