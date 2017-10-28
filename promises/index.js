// //Bad Callback example
//
// loadData(function(err,data) {
//   if (err) {
//     //handle error
//   }
//   loadData(function(err,data){
//     if (err) {
//     //handle Error
//     }
//     loadData(function(err,data){
//       if (err) {
//       //handle Error
//       }
//       loadData(function(err,data){
//         if (err) {
//         //handle Error
//         }
//         loadData(function(err,data){
//           if (err) {
//           //handle Error
//           }
//           loadData(function(err,data){
//             if (err) {
//             //handle Error
//             }
//           })
//         })
//       })
//     })
//   })
// })

// //promise example
// loadData()
//   .then(function (data) {
//
//   })
//   .then(function (data) {
//
//   })
//   .then(function (data) {
//
//   })
//   .catch(function(err){
//     //handle all the errors
//   })

// new Promise((resolve, reject) => {
//
//   try {
//       //do some operation here
//     resolve('value to be passed back');
//   } catch(e) {
//     reject('error to be passed back');
//   }
//
// })

// let mod = require('./module');
//
// mod.getName()
//   .then((name) => {
//     console.log(name);
//   })
//   .then ((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let mod = require('./module')
//
// Promise.all([
//   mod.getName(),
//   mod.getName(),
//   mod.getName(),
//   mod.getName()
// ]).then(function(data) {
//   for (i in data) {
//     console.log(data[i]);
//   }
// }).catch(function(err) {
//
// })
