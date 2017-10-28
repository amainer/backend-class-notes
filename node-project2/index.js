// const arrayM = require('./module')


// array1 = [62,89,56,45,12,91,81];
//
// console.log(arrayM.arrayWork(array1,45));
// console.log(arrayM.arrayWork(array1,62));
// console.log(arrayM.arrayWork(array1,81));

// const path = require('path')
// outpath = path.basename('~/documents/github/script.js', '.js')
// outpath = path.dirname('~/documents/github/')
// outpath = path.resolve('sub-dir','scipt.js')
//
// console.log(outpath);

//Start Example 3
const path = require('path')
const fs = require('fs');

// fs.writeFileSync('new-file.txt', 'Mmm, I love pancakes!');
// let fileContents = fs.readFileSync('new-file.txt', 'utf-8');
// console.log(fileContents);
// fs.appendFileSync('new-file.txt', '\nMmm, I love pancakes!');

let filePath = path.resolve('new-file.txt')
console.log(filePath);
fs.unlinkSync(filePath);
