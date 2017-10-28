const request = require('request');


module.exports = {
  sendRequest,
  validateUser
}

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if(err || !res) {
        reject(`There was an issue sending request to ${url}`);
      };
      resolve({
        res: res,
        body: body || {}
      });
    });
  });
};

function validateUser(userArray, currentUser) {
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].userName === currentUser.username && userArray[i].password === currentUser.password) {
      return true;
    }
  }
  return false;
};
