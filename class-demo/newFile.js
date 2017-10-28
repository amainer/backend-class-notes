//
// let myArray = ['World',2,3,4,5, 'Hello']
//
// function loop (array) {
//   for (item in array) {
//     console.log(array[item]);
//   }
// }
//
// loop (myArray);

// function isNumber(x) {
//   console.log(typeof(x) ==='number');
// }
//
//
// isNumber(4);
// isNumber('Hello');
//
// myArray = [1,2,3,4,5]
//
// function arr (myArray) {
//
//   let multiFiveArray = [];
//
//   for (num in myArray) {
//     multiFiveArray.push(myArray[num] * 5);
//   }
//
//   return multiFiveArray;
// }
//
// console.log(arr (myArray));

// function multiply( x = 4, y = 10) {
//   console.log(arguments[0]);
//   arguments[0] = 10;
//   console.log(arguments[0]);
//   return x * y;
// }
//
// console.log(multiply(4,10));

// function newArray (x,y) {
//   let numbers =[];
//   for (let i = x; i <= y; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
//
// console.log(newArray(2,5));
//
// function addTwo (number) {
//   return number + 2;
// }
//
// function addThree (number) {
//   return number + 3;
// }
//
// function multiFunction (number, fn, fnTwo) {
//   return fnTwo(fn(number));
// }
//
// console.log(multiFunction(2, addTwo, addThree));
// console.log(multiFunction(2, addThree, addThree));



// function tempFunc () {
//   return 5;
// }
//
// function multiTen (fn) {
//   return fn() * 10;
// }
//
// console.log(multiTen(tempFunc));
