// function myFunc() {
//   var myVar = 8;
//   console.log('MY FUNC: ', myVar);
//   myOtherFunc();
// }
//
// function myOtherFunc() {
//   var myVar;
//   console.log('MY OTHER FUNC: ', myVar);
// }
//
// var myVar = 3;
// console.log('GLOBAL FIRST: ', myVar);
// myFunc();
// console.log('GLOBAL SECOND: ', myVar);

// function foo () {
//   this.bar = 'baaz';
// }
//
// foo();
// console.log(window.bar);

// var num = 8;
//
// function addTwo() {
//   console.log(this.num + 2);
// }
//
// addTwo.call(this);

// 'use strict';
//
// var firstName = 'Andrew';
// var lastName = 'Mainer';
//
// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
//
// let myObj = {
//   firstName: 'Beverly',
//   lastName: 'Neve'
// }
//
// console.log(person.getFullName());
// console.log(person.getFullName.call(this));
// console.log(person.getFullName.apply(myObj));
// let newFunc = person.getFullName.bind(this);
// console.log(newFunc());
