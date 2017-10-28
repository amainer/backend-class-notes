const usersData = require('./users');

function validateInput(object) {

  propertyArray = ["userName", "firstName", "lastName", "password"];

  if (object.id) {
    return false;
  } else {
    for (let property in propertyArray) {
      if (object[propertyArray[property]] === "" || object.hasOwnProperty(propertyArray[property]) === false) {
        return false;
      };
    };
  };
  return true;
}




module.exports = {
  validateInput: validateInput
}
