// //管道流
// var fs = require("fs");
//
// // 创建一个可读流
// var readerStream = fs.createReadStream('input.txt');
//
// // 创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');
//
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);
// console.log("程序执行完毕");


//链式流
var fs2 = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs2.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs2.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");
