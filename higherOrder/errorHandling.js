let fs = require('fs');

// let filepath = __dirname + '/somefile.txt';

// let stats = fs.stat(filepath, (error, stats) => {
//   if (error) {
//     console.log('Error');
//     console.log(error);
//   } else {
//     console.log('Stats');
//     console.log(stats);
//   }
// });


// let filepath = __dirname + '/baddata.json';
// let jsonData = fs.readFileSync(filepath,'utf8');
//
// try {
//   console.log(JSON.parse(jsonData));
// } catch(e){
//   console.log('Error');
//   console.log(e);
// }



// let stats = fs.stats(filepath, (error, stats) => {
//   if (error) {
//     console.log('Error');
//     console.log(error);
//   } else {
//     console.log('Stats');
//     console.log(stats);
//   }
// });
//
//
// console.log('more code');

// function divideSync(x,y) {
//   if (y === 0) {
//     throw new Error('can not divide by zero');
//   } else {
//     return x/y;
//   }
// }

// try {
//   let result = divideSync(4,0);
//   console.log(result);
// } catch(e) {
//   console.log(e);
// }

// function divideAsync(x,y, callback) {
//   if (y === 0) {
//     callback(new Error('cannot divide by zero'))
//   } else {
//     return callback(null, x/y)
//   }
// }
//
// divideAsync(4,0, (err, result) => {
//   if (err) {
//     console.log('4/2 = error', err);
//   }else {
//     console.log(result);
//   }
// })
//
// console.log('more code');


// const EventEmitter = require('events');
//
// class DividerEvent extends EventEmitter {
//   divide(x,y) {
//     if (y === 0) {
//       let error = new Error('Cannot divide by zero');
//       this.emit('error', error);
//     } else {
//       this.emit('division', x/y);
//     }
//     return this
//   }
// }
//
// let dividerEvent = new DividerEvent();
//
// dividerEvent.on('error', (error) => {
//   console.log('error');
//   console.log(error);
// })
//
// dividerEvent.on('division', (result) => {
//   console.log('result');
//   console.log(result);
// })
//
//
// dividerEvent.divide(4,2)
// dividerEvent.divide(4,0)


// console.log('more code');
//
// function singleWord(word) {
//   if (word.split(" ").length > 1) {
//     throw new Error('String has  more than 1 word');
//   }
//   console.log('result');
//   return 1;
// }

// try {
//   let result = singleWord("hello!");
//   console.log(result);
// } catch(e) {
//   console.log(e);
// }
//
// try {
//   let result = singleWord("hello World!");
//   console.log(result);
// } catch(e) {
//   console.log(e);
// }

function singleWord(word, callback) {
  if (word.split(" ").length > 1) {
    callback(new Error('String is longer than 1 word'))
  } else {
    return callback(null, word)
  }
}

singleWord("Hello", (err, result) => {
  err ? console.log(err) : console.log('result:', result)
})

singleWord("Hello World", (err, result) => {
  err ? console.log(err) : console.log(result)
})

console.log('more code');
