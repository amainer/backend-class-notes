module.exports = {
  getName: function () {
    return new Promise((resolve,reject) => {
      try {
        resolve('Jim');
      }
      catch(e) {
        reject(e)
      }
    })
  }
}
