// let addTwice = function(func,value) {
//   return func(func(value));
// };
//
// let addTen = function(value){
//   return value + 10;
// };
//
// console.log(addTwice(addTen,5));

// let pets = [
//  { name: 'Sprinkles', type: 'dog' },
//  { name: 'Reece', type: 'dog' },
//  { name: 'Pukes-a-lot', type: 'cat' },
//  { name: 'Not-a-real-pet', type: 'cat' },
//  { name: 'Fluffykins', type: 'dog' },
//  { name: 'Ugly', type: 'cat' }
// ]
//
// let isDog = function(element, index, origArray) {
//   return element.type === 'dog'
// }

// //
// // let startsWithS = function() {
// //
// // };
//
// let dogs = pets.filter(isDog)
//
// console.log(dogs);
//
// function isDog(array) {
//   let newArray = [];
//   for (i = 0; i < array.length; i++) {
//     array[i].type === 'dog' ? newArray.push(array[i]) : false
//   }
//   return newArray;
// }
//
// console.log(isDog(pets));
//
// function func1(array,func) {
//   return func(array);
// }
//
// console.log(func1(pets,isDog));

// let filterPets = function(array, func){
//   let newArray = [];
//   for (i = 0; i < array.length; i++) {
//     func(array[i]) ? newArray.push(array[i]) : false;
//   }
//   return newArray;
// }
//
// let isDog = function(pet){
//   return pet.type === 'dog';
// }
//
// let isCat = function(pet){
//   pet.type === 'cat' ? pet.isPrecious = false : pet.isPrecious = true;
//   return pet;
// }
//
//
// console.log(pets.filter(isCat));

// let mappedPets = pets.map((element, index, origArray) => {
//
//   // element.type === 'cat' ? element.isPrecious = false : element.isPrecious = true;
//   return element.name;
// })

// console.log(mappedPets);

// let mappedPets2 = function(array, func) {
//   for (i = 0; i < array.length; i++) {
//     func(array[i]);
//   }
//   return array;
// }
//
// // console.log(pets.map(isCat));
// console.log(mappedPets2(pets,isCat));

// let dogCount = pets.reduce((accumulator, element, index, originalArray) => {
//   return element.type === 'dog' ? accumulator + 1 : accumulator;
// },0)
//
// console.log(dogCount);

//
// let isDog = function(accumulator, pet){
//   return pet.type === 'dog' ? accumulator + 1 : accumulator;
// }
//
// let reducedPetsDog = function(array,func) {
//   let accumulator = 0
//   for (i = 0; i < array.length; i ++) {
//     accumulator = func(accumulator, array[i]);
//   }
//   return accumulator;
// }
//
// console.log(reducedPetsDog(pets, isDog));
// console.log(pets.reduce(isDog,0));
//
// let array = [1,2,3,4,5];
//
// let sum = array.reduce((sum, element) => {
//   return sum += element;
// },0)
//
// console.log(sum);
