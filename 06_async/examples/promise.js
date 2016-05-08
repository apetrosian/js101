"use strict";

var p1 = new Promise(function(resolve,reject){
  setTimeout(function someAsyncFunc(){
    resolve('Promise 1 resolved!');
    //reject('Promise 1 rejected');
  },2000);
});

var p2 = Promise.resolve('Promise 2 resolved');
//var p2 = Promise.reject('Promise 2 rejected');

p1.then(function(value){
    console.log(value);
  })
  .catch(function(reason){
    console.log(reason);
  });


p2.then(function(value){
    console.log(value);
  })
  .catch(function(reason){
    console.log(reason);
  });


// Promise.all([p1, p2])
//   .then(function(values) {
//     console.log('We are done!');
//   })
//   .catch(function(reason){
//     console.log('Somthing wrong', reason);
//   });



// Promise.race([p1, p2])
//   .then(function(value){
//     console.log('Hey!', value);
//   })
//   .catch(function(reason){
//     console.log('Somthing wrong', reason);
//   });
