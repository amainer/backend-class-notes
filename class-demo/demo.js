//NOTE: Begginning of File
// var myName = "Andrew";
// var myArray = [1,2,3,4,5];
// var dataArray = ['Hello', 5, true];
// var myMultiArray = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
//
// var waterBottle = {
//   'color' : 'blue',
//   'lidColor' : 'white',
//   'logo' : 'BlockParty'
// };
//
// var customer = {
//   'firstName' : myName,
//   'lastName' : 'Mainer',
//   'address' : {
//     'streetNbr' : 803,
//     'streetName' : 'Main'
//   }
// };
//
// var customer2 = {
//   'firstName' : myName,
//   'lastName' : 'Mainer',
//   'Bottle' : waterBottle
// };
//
// var customer3 = {
//   'Greeting' : 'Hello World'
//   'Mood' : {
//
//   }
// };
//
//
// console.log(customer);

// var exampleString = 'This is \n\\a string';
// var exampleString = 'This is a string';
//
//
// console.log(exampleString);
// console.log(exampleString.length);
// console.log(exampleString.toUpperCase());
// console.log(exampleString.toLowerCase());
// console.log(exampleString.trim());

// var fruit = ['apple','orange','banana'];
// var number = 3
// var lastFruit = fruit.pop

// console.log(fruit.length);
// console.log(fruit.indexOf('orange'));
// console.log(fruit[0].length);
// console.log(fruit.indexOf('papaya'));
// console.log(Array.isArray(fruit));
// console.log(Array.isArray(number));
// console.log(lastFruit);
//
// fruit.push('mango');
// console.log(fruit);
//
// var firstFruit = fruit.shift()
// console.log(firstFruit);
// var removeFruit = firstFruit.unshift()

// fruit.splice(2,0,'papaya');
// console.log(fruit);
//
// fruit.splice(4,1);
// console.log(fruit);
//
// fruit.push('mango');
// fruit.push('pear');
// fruit.push('papaya');
// fruit.push('kiwi');
//
// console.log(fruit);
// fruit.sort();
// console.log(fruit);
// fruit.reverse();
// console.log(fruit);

// console.log(fruit.join());
// console.log(fruit.join('-'));
// console.log(fruit.join(' '));


// var customer = {
//   'firstName' : 'Andrew',
//   'lastName' : 'Mainer',
//   'address' : {
//     'streetNbr' : 803,
//     'streetName' : 'Main'
//   }
// };
//
// console.log(customer.hasOwnProperty('firstName'));
// console.log(customer.hasOwnProperty('listOfFruits'));
// console.log(customer.propertyIsEnumerable('firstName'));
//
// try {
//   throw new Error('Oh Noes!');
// } catch (err) {
//   console.log(err.stack);
// }


// var a;
// let b;
// const c = 6;
//
// b = 5;
//
// console.log('b: ', b);

// (function () {
//   const o = {
//     animal: 'dog',
//     integer: 7,
//     fruits: [
//       'apple',
//       'orange',
//       'banana'
//     ]
//   };
//
//   function convertJSON (object) {
//     JSON.parse(object);
//   }
//
//   convertJSON(o);
// })();

// const a = 3;
// const b = 5;
//
// if (a > 0 && b > 0) {
//   console.log('1st statement passed as true');
// } else {
//     console.log('Here I am');
// }

// const a = 5;

// if (a < 5) {
//   console.log('a less than five');
// } else if (a > 5) {
//   console.log('a greater than five');
// } else if (a === 5) {
//   console.log('a equals five');
// } else {
//   console.log('unreachable code');
// }

// switch (a) {
//   case 1:
//     console.log('a is 1');
//     break;
//   case 2:
//     console.log('a is 2');
//     break;
//   default:
//     console.log('None of these')
//     break;
// }


//
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <=5; j++) {
//     console.log(i,j);
//   }
// }
//


// const twoDArray = [
//   [1,2,3,4],
//   [5,6,7,8,9],
//   [9,10,11,12]
// ];
//
// for (let i = 0; i < twoDArray.length; i++) {
//   const oneDArray = twoDArray[i];
//   console.log(oneDArray);
//   for (let j = 0; j < twoDArray[i].length; j++) {
//     console.log(twoDArray[i][j]);
//   }
// }
//
// console.log(twoDArray.length);
// console.log(twoDArray[1].length);
//
// const fruits = ['apple','orange','banana'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
//
// console.log(fruits.join(","));


// var apple = {
//   'color' : 'red',
//   'type' : 'pink lady',
//   'size' : 'medium'
// };
//
// //prefered way to reference
// console.log(apple.type);
//
// //valid but not prefered
// console.log(apple['type']);
//
// //if property name is stored in variable, bracket notation is only option
// for (property in apple) {
//   console.log(property + ' : ' + apple[property]);
// }

// let i = 0
//
// while (i < 5) {
//   console.log(i);
//   i++
// }
//
// let isSomethingTrue = false;
//
// while (false) {
//   //logic Here
//   true;
// }

// let i = 0;
//
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
//
// console.log('after loop');

// let isSomethingTrue = false;
//
// do {
//     console.log('In the beginning');
//     //isSomethingTrue = false;
// } while (isSomethingTrue);
//
// console.log('after while loop');

// const numberArray = [];
// const doubledArray = []
//
// for (let i = 1; i <= 10; i++) {
//   numberArray.push(i);
// }
// //
// const doubles = numberArray.map(function(x) {
//   return x*2;
// })
//
// const cubed = numberArray.map(function(x) {
//   return x*x*x;
// })
//
// const filteredEven = cubed.filter(function(x){
//   return x%2 === 0;
// })
//
// const filteredOdd = cubed.filter(function(x){
//   return x%2 !== 0;
// })
//

// console.log("I can double it:", doubles);
// console.log("I can triple it:", cubed);
// console.log("I can take even only:", filteredEven);
// console.log("I can take odds only:", filteredOdd);

// const aboutMe = {
//   'firstName':'Andrew',
//   'middleName':'Royce',
//   'lastName': 'Mainer',
//   'myFather': 'Ron',
//   'myMother': 'Beverly'
// }
//
// for (let property in aboutMe) {
//   console.log(property + ": " + aboutMe[property]);
// }

// console.log(Math.max(1,2,3,4));
// console.log(Math.max.apply(null, numberArray));
// console.log(Math.max.apply(null, filteredOdd));
//
// const numberArray = [];
// const doubledArray = []
//
// for (let i = 1; i <= 10; i++) {
//   numberArray.push(i);
// }
// //
// for (i = 0; i < numberArray.length; i++) {
//   doubledArray.push(numberArray[i] * 2)
// }
//
// console.log("I can count to 10:", numberArray);
// console.log("I can double my array:", doubledArray);

// let i = 1
// while (i <= 5) {
//   console.log("This is the while loop solution. String number:", i);
//   i++;
// }
//
// i = 1
// do {
//   console.log("This is the do while loop solution. String number:", i);
//   i++
// } while (i <= 5);


//IDEA: How to map multiple functions to an array
// const numArr = []
// for (i = 0; i < 10; i++) {
//     numArr.push(Math.floor(Math.random() * 100));
// }
//
// const doubled = numArr.map(function(x) {
//   return x * 2
// }).filter(function(x){
//   return x%2 === 0;
// });
//
// console.log("This is a random array:", numArr);
// console.log("This is a random array doubled and filtered to evens", doubled);



// const squared = numArr.map(function(x){
//   return x * x;
// })
//
// const even = squared.filter(function(x){
//   return x%2 === 0;
// })
//
// console.log("This is a random array squared", squared);
// console.log("This is a random array squared and filtered to even only", even);
//
// const combined = numArr.concat(doubled, squared, even)
// console.log("This is everything combined:", combined)
// console.log("The max of all of these numbers is:", Math.max.apply(null,combined),"And the min is", Math.min.apply(null,combined));

// (function () {
//     const translations = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     };
//
//     function welcome (translations, language) {
//
//         // your code goes here
//         console.log(translations[language])
//     };
//
//     welcome(translations, 'french');
//     welcome(translations, 'polish');
//     welcome(translations, 'english');
//     welcome(translations, 'estonian');
// })();

// //TODO: This is the first to do
// (function () {
//
//     function calculateBonus (salary, bonus) {
//         // your code goes here
//         if (bonus) {
//           return console.log(salary * 10);
//         } else {
//           return console.log(salary);
//         };
//     };
//
//     calculateBonus(10000, false);
//     calculateBonus(45000, true);
//
// })();

// (function () {
//     const groceryList = [
//         {
//             item: 'bread',
//             walmartPrice: 3.50,
//             costCoPrice: 3.75
//         },
//         {
//             item: 'milk',
//             walmartPrice: 1.75,
//             costCoPrice: 2.15
//         },
//         {
//
//             item: 'cookies',
//             walmartPrice: 4.35,
//             costCoPrice: 3.10
//
//         },
//         {
//             item: 'apples',
//             walmartPrice: 5.00,
//             costCoPrice: 4.75
//         }
//     ];
//     console.log(groceryList.length);
//     // console.log(groceryList[groceryList.length].walmartPrice);
//
//     let cheapestBasket = 0;
//     let expensiveBasket = 0;
//
//     function goShopping (groceryList) {
//         //your code goes here
//         for (items in groceryList) {
//           if (groceryList[items].walmartPrice < groceryList[items].costCoPrice) {
//             console.log(groceryList[items].item + " is cheaper at Walmart");
//             cheapestBasket += groceryList[items].walmartPrice;
//           }
//           else if (groceryList[items].walmartPrice > groceryList[items].costCoPrice) {
//             console.log(groceryList[items].item + " is cheaper at Costco");
//             cheapestBasket += groceryList[items].costCoPrice;
//           }
//           else {
//             console.log("The items cost the same");
//           }
//           // console.log(groceryList[items].walmartPrice)
//           // for (contents in groceryList[items]) {
//           //   console.log(groceryList[items][contents]);
//           // }
//         }
//
//         console.log("The cheapest basket between the two is",cheapestBasket);
//     };
//
//     goShopping(groceryList);
// })();


//
// (function () {
//     const students = [
//         {
//             name: 'Jim',
//             homeworkScores: [90, 75, 82, 94],
//             testScores: [98, 87]
//         },
//         {
//             name: 'Maria',
//             homeworkScores: [66, 83, 91, 93],
//             testScores: [85, 88]
//         },
//         {
//             name: 'Pam',
//             homeworkScores: [92, 87, 85, 91],
//             testScores: [89, 78]
//         },
//         {
//             name: 'Fernando',
//             homeworkScores: [83, 71, 92, 100],
//             testScores: [95, 91]
//         }
//     ];
//
//     function gradeStudents (students) {
//         //let totals = []
//         //your code goes here
//         for (student in students) {
//             //console.log(students[student].name);
//             //console.log(students[student].homeworkScores);
//             let homeworkScore = 0;
//             let testScore = 0;
//             let homeworkNBR = 0;
//             let testNBR = 0;
//
//             for (innerItem in students[student].homeworkScores) {
//               // console.log(students[student].homeworkScores[homework]);
//               homeworkScore += students[student].homeworkScores[innerItem];
//               homeworkNBR += 1;
//             }
//             for (innerItem in students[student].testScores) {
//               // console.log(students[student].homeworkScores[homework]);
//               testScore += students[student].testScores[innerItem];
//               testNBR += 1;
//
//             }
//             console.log(students[student].name + " made a " + finalGrade((homeworkScore + testScore)/(homeworkNBR+testNBR)));
//             // totals[student] =
//         }
//         // console.log(totals);
//         //console.log(score);
//     };
//     // function finalGrade (grade) {
//     //   switch(true){
//     //     case (grade > 89):
//     //       return "A";
//     //       break;
//     //     case (grade > 79):
//     //       return "B";
//     //       break;
//     //     default:
//     //       return "Failed";
//     //       break;
//     //     }
//     // }
//     function finalGrade (grade) {
//       if (grade >= 90) {
//         return "A";
//       } else if (grade >= 80) {
//         return "B";
//       } else if (grade >= 70) {
//         return "C";
//       } else {
//         "Failed"
//       }
//     }
//     gradeStudents(students);
// })();

// function greeting (message) {
//   console.log(message);
// }
//
// greeting ("Hello World")

//
// greeting("Hello world")
//
// let greeting = function greetingfunction(message) {
//   console.log(message);
// }
//
// let greeting = new Function('message', 'console.log(message);')
//
// let greeting = (message) => {console.log(message)};
//
// let greeting = message => console.log(message);

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


//
// function tempFunc () {
//   return 5;
// }
//
// function multiTen (fn) {
//   return fn() * 10;
// }
//
// console.log(multiTen(tempFunc));
//
// const a = 5;
// console.log('a in the global scope:',a);
//
// function myFunction() {
//   const b = 6;
//   console.log('a inside myFunction:', a);
//
//   function myInnerFunction() {
//     const sum = a + b
//     console.log('addition in the inner function scope:',sum);
//   }
//
//   myInnerFunction();
//
// }
//
// myFunction();
//
// console.log('a in the global scope after function:',a);
//
// const arrayOfNumbers = [1,8,5,12,4,7,1,34,5];
//
// let sum = 0;
// for (let i =0; i < arrayOfNumbers.length; i++){
//   sum += arrayOfNumbers[i];
//   console.log('current number in loop', sum);
// }

// const sentArray = ['This','is','an','example','sentence'];
//
// function makeASentence(array) {
//   let fullSentence = '';
//   for (word = 0; word < array.length; word++) {
//     fullSentence += array[word];
//     if (word < array.length - 1) {
//       fullSentence = fullSentence + " ";
//     }
//   }
//   fullSentence += '.';
//   return fullSentence;
// }
// console.log(makeASentence(sentArray));
//
//

//
// const sentArray = 'Hello world. I will probably contain the largest character somewhere';
// //console.log(sentArray.split(" "));
//
// function longestWord(sent) {
//   let largestWord = '';
//   const newArray = sent.split(' ');
//   for (i = 0; i < newArray.length; i++) {
//     if (largestWord.length < newArray[i].length) {
//       largestWord = newArray[i];
//     }
//   }
//   return largestWord;
// }
// //
// console.log(longestWord(sentArray));
//
//
// function validatePhoneNumber(number) {
//   let newArray = ''
//   let newArray2 = ''
//   let digitCounter = 0
//   for (let i = 0; i < number.length; i++ ) {
//     //console.log(number[i] + " has type " + parseInt(number[i]));
//     if (parseInt(number[i]) >= 0) {
//       //console.log(number[i]);
//       newArray += number[i]
//       digitCounter += 1
//     };
//   }
//   // console.log(newArray);
//   // console.log(digitCounter);
//   if (digitCounter === 10) {
//     return newArray;
//   } else if (digitCounter === 11) {
//     if (parseInt(newArray[0]) === 1) {
//       for (let j = 1; j <newArray.length; j++) {
//         newArray2 += newArray[j]
//       }
//       return newArray2;
//     } else {
//       return '0000000000';
//     }
//   } else {
//     return '0000000000';
//   }
// }
//
// console.log(validatePhoneNumber('(123) 456-7890'));
// console.log(validatePhoneNumber('123.456.7890'));
// console.log(validatePhoneNumber('11234567890'));
// console.log(validatePhoneNumber('21234567890'));
// console.log(validatePhoneNumber('123456789'));
// console.log(validatePhoneNumber('212345678901234'));
// console.log(validatePhoneNumber('123'));
//


// function repeatString (num, string) {
//   let stringFinal = ''
//   for (let i = 0; i < num; i++) {
//     stringFinal += string;
//   }
//   return stringFinal;
// }
//
// console.log(repeatString(4,'World'));
//
//
// function repeatStringTwo (num, string) {
//   return string.repeat(num);
// }
//
// console.log(repeatStringTwo(5,'Hello'));


//
// function generateRange(min,max,step) {
//   let arr = [];
//   for (let i = min; i <= max; i+= step) {
//     arr.push(i);
//   }
//   return arr;
// }
//
// console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
// console.log(generateRange(1, 10, 3)); // [1, 4, 7, 10]
// console.log(generateRange(19, 49, 2)); // [19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
// console.log(generateRange(10, 82, 9)); // [10, 19, 28, 37, 46, 55, 64, 73, 82]

// function maxRedigit(takeNumber){
//
//   let numArray = takeNumber.toString();
//
//   if (numArray.length !== 3) {
//     return null;
//   }
//
//   let maxNbrIndex = 0;
//   for (num in numArray) {
//     if (Number(numArray[num]) > Number(numArray[maxNbrIndex])) {
//       maxNbrIndex = num;
//     }
//   }
//
//   let minNbrIndex = 0;
//   for (num in numArray) {
//     if (Number(numArray[num] < Number(numArray[minNbrIndex]))) {
//       minNbrIndex = num
//     }
//   }
//
//   let midNbrIndex = 0;
//   if ((maxNbrIndex == 0 && minNbrIndex == 1) || (minNbrIndex == 0 && maxNbrIndex == 1)) {
//     midNbrIndex = 2;
//   } else if ((maxNbrIndex == 0 && minNbrIndex == 2) || (minNbrIndex == 0 && maxNbrIndex == 2)) {
//     midNbrIndex = 1;
//   } else {
//     midNbrIndex = 0;
//   }
//
//
//   return Number(numArray[maxNbrIndex] + numArray[midNbrIndex] + numArray[minNbrIndex]);
//
// }

// function maxRedigit(takeNumber) {
//   if (takeNumber.toString().length === 3) {
//     let maxNBR = takeNumber.toString().split('').sort().reverse().join('');
//     return (Number(maxNBR));
//   } else {
//     return null;
//   }
// }

// console.log(maxRedigit(123));
// console.log(maxRedigit(297));
// console.log(maxRedigit(368));
// console.log(maxRedigit(531));
// console.log(maxRedigit(636));
// console.log(maxRedigit(555));
// console.log(maxRedigit(32));


// function removeTargetSum(array,target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] + array[i+1] === target) {
//       array.splice(i + 1,1);
//       i -= 1;
//     }
//   }
//   return array;
// }
//
// console.log(removeTargetSum([1, 3, 5, 6, 7, 4, 3], 7));
// console.log(removeTargetSum([4, 1, 1, 1, 4], 2));
// console.log(removeTargetSum([2, 2, 2, 2, 2, 2], 4));
// console.log(removeTargetSum([1, 5, 3, 7], 8));

//
// function findNeedle (arr) {
//   for (word in arr) {
//     if (arr[word].toLowerCase() === 'needle') {
//       return "Found the needle at position " + word + ".";
//     }
//   }
// }
//
// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// spruce [6:17 PM]
// The best way to have a productive day is to plan out your work schedule. Given the following three inputs, create an an array of time allotted to work,
// broken up with time allotted with breaks:
//
// - Input 1: Hours - Number of hours available to you to get your work done!
// - Input 2: Tasks - How many tasks you have to do throughout the day
// - Input 3: Duration (minutes)- How long each of your tasks will take to complete
//
// Criteria to bear in mind:
//
// - Your schedule should start with work and end with work.
// - It should also be in minutes, rounded to the nearest whole minute.
// - If your work is going to take more time than you have, return “You’re not sleeping tonight!”
//
// ```console.log(dayPlan(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
// console.log(dayPlan(3, 5, 60));   // 'You're not sleeping tonight!'
// console.log(dayPlan(2, 2, 60));   // [60, 0, 60]```

// function dayPlan(hours, tasks, duration) {
//   // overall goals:
//   // create an array that stores my plan
//   // alternate between work time and break time
//   // start and end with work
//   numBreaks = tasks - 1;
//   numItems = tasks + numBreaks;
//   totalMinutes = hours * 60;
//   totalWorkTime = tasks * duration
//   totalBreakTime = totalMinutes - totalWorkTime
//   breakInc = totalBreakTime/numBreaks
//
//   if (totalWorkTime > totalMinutes) {
//     return "You're not sleeping tonight!";
//   }
//
//   let planArray = [];
//   for (i = 1; i < Math.ceil(numItems/2); i++) {
//     planArray = planArray.concat(Math.round(duration));
//     planArray = planArray.concat(Math.round(breakInc));
//   }
//
//   planArray = planArray.concat(Math.round(duration));
//
//   return planArray;
//
// }
//
// console.log(dayPlan(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
// console.log(dayPlan(3, 5, 60));   // 'You're not sleeping tonight!'
// console.log(dayPlan(2, 2, 60));   // [60, 0, 60]


// split string by space to get an array
// iterate through each number, if one is max, store max
// iterate through each number, if one is min, store min

// function highAndLow (string) {
//   arr = string.split(' ');
//
//   let maxNum = 0;
//   let minNum = 10;
//
//   for (number in arr) {
//     if (arr[number] > maxNum) {
//       maxNum = arr[number]
//     }
//     if (arr[number] < minNum) {
//       minNum = arr[number];
//     }
//   }
//
//   return maxNum + " " + minNum;
//
// }
//
// console.log(highAndLow("1 2 3 2 5")); // return "5 1"
// console.log(highAndLow("1 2 7 4 5")); // return "7 1"
// console.log(highAndLow("1 9 3 4 8")); // return "9 1"


// function howManyYears (currPop, growthPerc, incomingRes, popGoal) {
//   let numYears = 0
//   let actPerc = growthPerc/100
//
//   while (currPop < popGoal) {
//     let growthRate = currPop * (actPerc);
//     currPop = currPop + growthRate + incomingRes
//     numYears += 1
//   }
//   return numYears;
// }
//
// console.log(howManyYears(1500, 5, 100, 5000)); // 15
// console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
// console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94


//'use strict';
//makes it to where we have to declare all variables
//prevents 'failing silently'.
//prevents

//Declare all variables
// let person;
//
// persom = {
//   name: 'Joe'
// }
//
// let emailMessage = 'Welcome to CatBook the Social Network for Cats, ' + person.name
//
// console.log(emailMessage);

//Failing silently
// let demoObject = {};
// Object.defineProperty(demoObject, 'x', {value:42, writable: false});
// console.log(demoObject.x);
//
// demoObject.x = 9;
// console.log(demoObject.x);

//Failing silently part 2
// delete Object.prototype

//Requires uniqueness
// function sum(a,a,c) {
//   return a + a + c;
// }
//
// console.log(sum(1,2,3));

// 'use strict';
//
// demoFunction();
//
// function demoFunction() {
//   console.log('Hi I\'m a demo function!');
// }

// function globalFunction() {
//   const a = 7;
//
//   function innerFunction() {
//     console.log(a);
//   }
//
//   return innerFunction;
// }
//
// const assignedFunction = globalFunction();
//
// assignedFunction();


// let variableFunction;
//
// function firstGlobalFunction () {
//   const a = 7;
//
//   function innerFunction() {
//     console.log(a);
//   }
//
//   variableFunction = innerFunction;
// }
//
// function secondGlobalFunction() {
//   variableFunction();
// }
//
// firstGlobalFunction();
// secondGlobalFunction();
//
// (function() {
//
//
// })();

//IIFE
// 'use strict';
//
// (function() {
//
//     console.log(7);
//
// }());

//Concepts Covered
//hoisting
//IIFE
//Clojure
//'Use strict'
//Context -- Execution Context is the environment in which a function executes in

// 'use strict';

// const a = 3;
//
// function demoFunction (){
//   const b = 6;
// }
//
// console.log(this);

// function simpleCall() {
//   console.log('simple call this:');
//   console.log(this);
// }
//
// function strictCall() {
//   'use strict';
//   console.log('strict call this:');
//   console.log(this);
// }
//
// simpleCall();
// strictCall();

// 'use strict';
//
// let myObj = {
//   a: 5,
//   b: 6
// }
//
// function add(c,d) {
//   return this.a + this.b + c + d;
// }
//
// console.log(add.call(myObj,3,4));
// console.log(add.apply(myObj, [3,4]));

// let a = [5,6,7];
// let b = 6;
//
// a.push(b);
//
// console.log(a);

// var listOne = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
//
// var listTwo = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 54, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
// ];
//
//
// var listThree = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 25, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
// ];
// function getOldest(array) {
//   let arr = [];
//   let maxAge = 0;
//   for (let item = 0; item < array.length; item++) {
//     // console.log(obj[item].age);
//     if (array[item].age > maxAge) {
//       maxAge = array[item].age;
//     }
//   }
//   for (let item = 0; item < array.length; item++) {
//     if (array[item].age === maxAge) {
//       arr.push(array[item]);
//     }
//   }
//   return arr;
// }



//
// // console.log(getOldest(listOne));
// // console.log(getOldest(listTwo));
// console.log(getOldest(listThree));
//
// function wantedWords(wordList, numVowels, numConst,cannotContain) {
//   let vowels = 'aeoiu';
//
//   let returnArr = [];
//
//   vowelArr = vowels.toLowerCase().split('');
//
//   for (let i = 0; i < wordList.length; i++){
//     let vowelCount = 0;
//     let constCount = 0;
//     let cannotCounter = 0;
//     letters = wordList[i].split('')
//     for (let letter = 0; letter < letters.length; letter++){
//       for (let j = 0; j < vowelArr.length; j++) {
//         if (letters[letter] === vowelArr[j]) {
//           vowelCount ++;
//         }
//       }
//       for (let k = 0; k < cannotContain.length; k++) {
//         if (letters[letter] === cannotContain[k]) {
//           cannotCounter ++;
//         }
//       }
//     }
//     constCount = wordList[i].length - vowelCount;
//
//     if (vowelCount === numVowels && constCount === numConst && cannotCounter === 0) {
//       returnArr.push(wordList[i]);
//     }
//   }
//
//   return returnArr;
//
// }
//
// console.log(wantedWords(['strength'], 1, 7, ['m', 'y']));     // ['strength']
// console.log(wantedWords(['afterwards', 'background', 'photograph', 'successful', 'understand'], 3, 7, ['m', 'y']));     // ['afterwards', 'background', 'photograph', 'successful', 'understand']
// console.log(wantedWords(['afterwards', 'background', 'photograph', 'successful', 'understand'], 3, 7, ['a', 's' , 'm', 'y']));    // []


// function myFunc(a) {
//   console.log(this.string1 +' ' + this.string2 + a);
// }
//
// let myObj = {
//   string1: 'Hello',
//   string2: 'World',
//   myFunc: myFunc
// }
//
//
// myFunc.call(myObj,'!')
// myObj.myFunc('!')

// var num = 8;
//
// function addTwo() {
//   console.log(this.num + 2);
// }
//
// addTwo();

// let myProtoObj = {
//   b:3,
//   c:4
// };
//
// let myObj = Object.create(myProtoObj);
// myObj.a = 1;
// myObj.b = 2;
//
// //protoype chain
// //myObj -> myProtObj -> Object -> null
//
// console.log('myObj.a:', myObj.a);
// console.log('myObj.b:', myObj.b);
// console.log('myObj proto b:', myObj.__proto__.b);
// console.log('myObj.c:', myObj.c);

// let person = {
//   firstName: 'Default',
//   lastName: 'Default',
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };
//
// let john = Object.create(person);
// john.firstName = 'John';
// john.lastName = 'Doe';
// john.getFullName() = {
//   return john.firstName;
// }
//
// console.log(john.getFullName());
//
// let jane = Object.create(person);
// jane.firstName = 'Jane';
// console.log(jane.getFullName());

// let myProtoObj = {
//   b: 3,
//   c: 4
// }
//
// let myObj = Object.create(myProtoObj);
// myObj.a = 1;
// myObj.b = 2;
// myObj.sum = function(){
//   console.log(this.a + this.b);
// };
//
// console.log(myObj.a);
// console.log(myObj.hasOwnProperty('a')); // true
// console.log(myObj.c);
// console.log(myObj.hasOwnProperty('c')); // false
// console.log(myObj.valueOf());
// console.log(myObj.hasOwnProperty('valueOf')); // false, had to traverse the chain to find the function
// console.log(myObj.hasOwnProperty('sum')); //true, function is a part of myObj

// if (typeof String.protoype.trim === 'undefined') {
//   String.protoype.trim = function(){
//     return this.replace(/^\s+|\s+$/g,'');0
//   }
// }

// Number.prototype.isPositive = function(){
//   return (this > 0);
// }
//
// let myNum = 4;
// console.log(myNum.isPositive());;
//
// let myOtherNum = -5;
// console.log(myOtherNum.isPositive());








// function printArray (array) {
//   for (let i = 0; i < array.length; i ++){
//     console.log(array[i]);
//   }
// }
//
// printArray(array);
// let myArray = [1,2,3,4,5,6,7];
//
// Array.prototype.printArray = function() {
//   for (let i = 0; i < this.length; i++) {
//     console.log(this[i]);
//   }
//   return;
// }
//
// myArray.printArray();

// function multiply( x = 4, y = 10) {
//   console.log(arguments[0]);
//   arguments[0] = 10;
//   console.log(arguments[0]);
//   return x * y;
// }
//
// console.log(multiply(4,10));

// let myNums = [4,10,100,400,50];
//
// Array.prototype.multiplyAll = function() {
//   let finalValue = 1;
//   for (let i = 0; i < this.length; i++) {
//     finalValue *= this[i];
//   }
//   return finalValue;
// }
//
// console.log(myNums.multiplyAll());
//
// String.prototype.validatePhoneNumber = function() {
//   let newArray = ''
//   let newArray2 = ''
//   let digitCounter = 0
//   for (let i = 0; i < this.length; i++ ) {
//     //console.log(number[i] + " has type " + parseInt(number[i]));
//     if (parseInt(this[i]) >= 0) {
//       //console.log(number[i]);
//       newArray += this[i]
//       digitCounter += 1
//     };
//   }
//   // console.log(newArray);
//   // console.log(digitCounter);
//   if (digitCounter === 10) {
//     return newArray;
//   } else if (digitCounter === 11) {
//     if (parseInt(newArray[0]) === 1) {
//       for (let j = 1; j <newArray.length; j++) {
//         newArray2 += newArray[j]
//       }
//       return newArray2;
//     } else {
//       return '0000000000';
//     }
//   } else {
//     return '0000000000';
//   }
// }
// //
// let phoneNum = '(123) 456-7890';
// console.log(phoneNum.validatePhoneNumber());
// console.log('123.456.7890'.validatePhoneNumber());
// console.log('11234567890'.validatePhoneNumber());
// console.log('21234567890'.validatePhoneNumber());

//
// function Rocket() {
//
// }
//
// Rocket.prototype.thrusters = 4;
// Rocket.prototype.blastOff = function() {
//   for (let i=10; i >=0; i--) {
//     console.log(i);
//     if (i===0) {
//       console.log('Blast Off!');
//     }
//   }
// }
//
// let myRocket = new Rocket();
// console.log(myRocket);
// console.log(myRocket.thrusters);
// myRocket.blastOff();
//
// function Car() {
//   this.doors = 5;
// }
//
// // Car.prototype.doors = 4;
// Car.prototype.model = 'Camry';
// Car.prototype.color = 'White';
// Car.prototype.maxSpeed = 160
// Car.prototype.accelerate = function() {
//   for (let i = 1; i <= this.maxSpeed; i++){
//     console.log('Vroom vroom! I\'m at', i, 'mph!');
//   }
// }
//
// let newCar = new Car();
// // newCar.doors = 2;
// newCar.model = 'Mustang';
// newCar.maxSpeed = 220;
// newCar.accelerate();

//
// console.log(newCar);

// function MyProto() {
//
// };
//
// function MyOtherProto () {
//
// }
//
// let myProtoObj = new MyProto();
// let myOtherProtoObj = new MyOtherProto();
//
// console.log(myProtoObj instanceof MyProto);
// console.log(myProtoObj instanceof MyOtherProto);
// console.log(myProtoObj instanceof Object);

// function Person() {
//   this.name = '';
// }
//
// function Child() {
//   Person.call(this);
//   this.gradeInSchool = '';
// }
//
// Child.prototype = Object.create(Person.prototype);
//
// let jenny = new Child();
// jenny.name = 'Jenny';
// jenny.gradeInSchool = 1;
// console.log(jenny);

// function Computer() {
//   this.model = '';
// }
//
// function Specs(){
//   Computer.call(this);
//   this.ram = '';
// }
//
// Specs.prototype = Object.create(Computer.prototype);
//
// let mac = new Specs();
// mac.model = 'Macintosh'
// mac.ram = 8;
// console.log(mac);

// function Employee(name,idNumber,department) {
//   this.name = name;
//   this.idNumber = idNumber;
//   this.department = department;
// }
//
// function Manager(name, idNumber,department,reports) {
//   Employee.call(this,name,idNumber,department);
//   this.reports = reports;
// }
//
// function Sales(name,idNumber,department,quota) {
//   Employee.call(this,name,idNumber,department,quota);
//   this.quota = quota;
//   this.didMeetQuota = function(actualSales){
//     if (actualSales > quota) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
//
// function Engineer(name, idNumber, department, specialty) {
//   Employee.call(this, name, idNumber, department);
//   this.specialty = specialty;
//   this.likeJavaScript = function() {
//     if (this.specialty === 'Computer') {
//       return this.name + ' is a ' + this.specialty + ' engineer and likes JS';
//     } else {
//       return this.name + ' is a ' + this.specialty + ' engineer and doesn\'t like JS';
//     }
//   }
// }
//
// function EngineeringIntern(name,idNumber,department,specialty,mentor){
//   Engineer.call(this,name,idNumber,department,specialty);
//   this.mentor = mentor;
// }
//
// Engineer.prototype = new Employee;
// Manager.prototype = new Employee;
// Sales.prototype = new Employee;
// EngineeringIntern.prototype = new Engineer;
//
//
// let samantha = new Engineer('Samantha Jones', 123, 'Technology', 'Electrical');
// let john = new Engineer('John Doe', 124, 'Technology', 'Computer');
// let jeff = new EngineeringIntern('Jeff Dude', 125, 'Technology', 'Electrical', samantha)
// let andre = new Sales('Andre Crawford', 126, 'Technology', 5)
// console.log(andre.didMeetQuota(6));
// console.log(jeff.likeJavaScript());
// console.log(john.likeJavaScript());
//
// // console.log(samantha);
//
// let jennifer = new Manager('Jennifer Smith', 456, 'Technology', [samantha, john])
// // console.log(jennifer);

// Class Declarations
// class Rectangle {
//   constructor(height,width) {
//     this.height = height;
//     this.width = width;
//   }
//
//   get area(){
//     return this.height * this.width;
//   }
//
//   get perimeter() {
//     return this.height * 2 + this.width * 2;
//   }
//
//   calculateArea() {
//     return this.height * this.width;
//   }
//
// }
//
// let myRect = new Rectangle(10,15);
//
// console.log(myRect);
// console.log(myRect.calculateArea());
// console.log(myRect.area);
// console.log(myRect.perimeter);
// console.log(myRect.height);
//
// class Square extends Rectangle {
//   constructor(side){
//     super(side,side);
//     this.side = side
//   }
// }
//
// let mySquare = new Square(5);
// console.log(mySquare.area);
// console.log(mySquare.height);
// console.log(mySquare.side);

//Class Expressions
// var Rectangle = class {
//   constructor(height,width) {
//     this.height = height;
//     this.width = width;
//   }
//
//   get area(){
//     return this.height * this.width;
//   }
//
//   get perimeter() {
//     return this.height * 2 + this.width * 2;
//   }
//
//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const exampleArray = [1,2,3,4,5,6,7,8,9];
//
// console.log(exampleArray.join());
// console.log(Array.isArray(exampleArray));

// class Point {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   static distance(a,b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//
//     return Math.hypot(dx,dy);
//   }
//
//    distance(b) {
//     const dx = this.x - b.x;
//     const dy = this.y - b.y;
//
//     return Math.hypot(dx,dy);
//   }
//
// }
//
// const p1 = new Point(2,3);
// const p2 = new Point(5,1);
//
// console.log(Point.distance(p1,p2));
// console.log(p1.distance(p2));

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name, "makes a noise");
//   }
//
// }
//
// let socks = new Animal('socks');
// socks.speak();
//
// class Cat extends Animal{
//   speaks() {
//     console.log(this.name, "meows");
//   }
// }
//
// let thorvald = new Cat('thorvald');
// thorvald.speak()

// class Square extends Rectangle {
//   constructor(side){
//     super(side,side);
//     this.side = side
//   }
// }

// class Employee {
//   constructor(name,idNumber,department){
//     this.name = name;
//     this.idNumber = idNumber;
//     this.department = department;
//   }
// }
//
// class Manager extends Employee {
//   constructor(name,idNumber,department,reports){
//     super(name,idNumber,department)
//     this.reports = reports;
//   }
// }
//
// class Sales extends Employee {
//   constructor(name,idNumber,department,quota){
//     super(name,idNumber,department)
//     this.quota = quota;
//   }
//   didMeetQuota(actualSales) {
//     if (actualSales > this.quota) {
//       return this.name,'met sales quota';
//     } else {
//       return false;
//     };
//   }
// }
//
// class Engineer extends Employee {
//   constructor(name,idNumber,department,specialty) {
//     super(name,idNumber,department)
//     this.specialty = specialty
//   }
//   likeJavascript() {
//     if (this.specialty === 'Computer') {
//       return this.name + ' is a ' + this.specialty + ' engineer and likes JS';
//     } else {
//       return this.name + ' is a ' + this.specialty + ' engineer and doesn\'t like JS';
//     }
//   }
// }
//
// let jasmin = new Employee('Jasmin L', 123, 'Business');
// let andrew = new Manager('Andrew M', 456, 'Business',123)
// // console.log(andrew.name);
// let samantha = new Engineer('Samantha Jones', 123, 'Technology', 'Electrical');
// let john = new Engineer('John Doe', 124, 'Technology', 'Computer');
// // let jeff = new EngineeringIntern('Jeff Dude', 125, 'Technology', 'Electrical', samantha)
// let andre = new Sales('Andre Crawford', 126, 'Technology', 5)
// // console.log(andre.didMeetQuota(6));
// // console.log(jeff.likeJavaScript());
// console.log(john.likeJavascript());
//
// function factorial(n) {
//   if (n < 0 ) {
//     return -1;
//   }
//
//   if (n === 0) {
//     return 1;
//   }
//
//   return n * factorial(n-1);
// }
//
// console.log(factorial(5));
//
// function factorialIterative (n) {
//   let factorial = 1;
//   if (n === 0) {
//     return 1;
//   }
//   while (n > 0) {
//     factorial *= n;
//     n --;
//   }
//   return factorial;
// }
//
// console.log(factorialIterative(5));

// function recursivePrint(num) {
//   if  (num === 0) {
//     console.log(num);
//     console.log('KaBOOM!');
//   }
//   else {
//     console.log(num);
//     recursivePrint(num - 1);
//   }
// }

// recursivePrint(10);

// function fibonnaci (num) {
//   if (num <= 2) {
//     return 1;
//   } else {
//     return console.log(fibonnaci(num - 1)) , console.log(fibonnaci(num - 2));
//   }
// }
//
// console.log(fibonnaci(25));
//
// console.log(20%12);

// let re1 = new RegExp('abc','g');
// let re2 = /abc/g;
// let re3 = /ABC/gi;
//
// console.log(re1.test('abc123abc123'));
// console.log(re1.test('ab1c'));
//
// console.log(re2.test('abc123abc123'));
// console.log(re2.test('ab1c'));
//
// console.log(re3.test('abc123abc123'));
// console.log(re3.test('ab1c'));

// let re1 = new RegExp('test');
// let re2 = new RegExp('test','g');
// let re3 = new RegExp('te*st','g');
// var firstString = 'This is a test string test test';
// let secondString = 'This is a test string tester testing';
// let thirdString = 'This is a teeeeeeeeest string teeeeeeester teeeeeeeesting';
//
// console.log(firstString.match(re1));
// console.log(secondString.match(re2));
// console.log(secondString.match(re2).length);
//
// console.log(secondString.match(re1));
// console.log(secondString.match(re2));
// console.log(secondString.match(re2).length);
//
// console.log(thirdString.match(re3));
// console.log(thirdString.match(re3).length);
//
// console.log(firstString.search(re1));
// console.log(firstString.search(re2));
// // console.log(secondString.);
//
// console.log(firstString.replace(re2, 'grape'));

// function validateNumber(num) {
//   let re1 = /^[123]/;
//   return re1.test(num);
// }
//
// console.log(validateNumber(123)); // true
// console.log(validateNumber(248)); // true
// console.log(validateNumber(8)); // false
// console.log(validateNumber(321)); // true
// console.log(validateNumber(9453)); // false

// function validateNumber(num) {
//   let re1 = /[123]$/;
//   return re1.test(num);
// }
//
// console.log(validateNumber(123)); // true
// console.log(validateNumber(248)); // false
// console.log(validateNumber(8)); // false
// console.log(validateNumber(321)); // true
// console.log(validateNumber(9453)); // true

// function myIsDigit(input) {
//   return /^\d$/.test(input);
// }
//
// console.log(myIsDigit('')); // false
// console.log(myIsDigit('7')); // true
// console.log(myIsDigit(' ')); // false
// console.log(myIsDigit('a')); // false
// console.log(myIsDigit('2')); // true
// console.log(myIsDigit('a5')); // false
// console.log(myIsDigit('14')); // false

// function dateChecker(date) {
//   let re1 = /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/
//   return re1.test(date);
// }
//
// console.log(dateChecker('01-09-2016 01:20')); true
// console.log(dateChecker('01-09-2016 01;20')); false
// console.log(dateChecker('01_09_2016 01:20')); false
// console.log(dateChecker('14-10-2066 12:00')); true
// console.log(dateChecker('Tenth of January')); false

// function countVowels(string) {
//   let re1 = /[a-z]/g
//   if (re1.test(string)) {
//     return string.match(re1).length;
//   } else {
//     return 0;
//   }
// }
//
// console.log(countVowels('bbababba'));   // 3
// console.log(countVowels('hellohellohellohello'));   // 8
// console.log(countVowels('krtmndsptzxvbmnwrt'));   // 0
// console.log(countVowels('asljdflsajfieworiuewnvndsfbawofejawefjiofajdsdf'));    // 16
// console.log(countVowels('asljdflsAjfiewOriuEwnvndsfbawofejawefjIOfajdsdf'));    // 16

f
