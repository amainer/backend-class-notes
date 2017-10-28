let fsModule = {
  multiply
};


function multiply(a,b) {
  return new Promise(function(resolve,reject) {
    return resolve(a*b);
  })
}

module.exports = fsModule;
