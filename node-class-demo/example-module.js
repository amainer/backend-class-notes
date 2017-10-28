// function exampleModule () {
//   this.example = function() {
//     console.log("This is from an example module");
//   }
// }
//
// module.exports = new exampleModule();

// module.exports = function() {
//   return 'This is an example';
// }

// module.exports.anotherFunctionExample = function () {
//   return 'This is a string from another function example';
// }

// function revealPatternExample () {
//   return 'this is a revealing module pattern example';
// }
//
// function aDifferentExample() {
//   return 'this is a different example';
// }
//
// var exampleModule = {
//   revealPatternExample: revealPatternExample,
//   aDifferentExample: aDifferentExample
// }
//
// module.exports = exampleModule;

const greetingModule = {
  greet
}

function greet (name) {
  console.log('Hello', name);
}

module.exports = greetingModule;
