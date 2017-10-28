const arrayModule = {
  arrayWork:arrayWork
}


function arrayWork (array,number) {
  let returnArray = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      i === 0 ? start = array.length - 1 : start = i - 1;
      i === array.length - 1 ? end = 0 : end = i + 1;
      returnArray.push(array[start])
      returnArray.push(array[end])
      return returnArray;
    }
  }
}

module.exports = arrayModule;
