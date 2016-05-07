"use strict";

var anotherObject = {
  a: 2
};


/*
1. If a normal data accessor property anywhere higher on the [[Prototype]] chain,
and it's not marked as read-only (writable:false) then a new property
is added directly to the object, resulting in a shadowed property.
*/

// var objectOne = Object.create( anotherObject );
//
// //objectOne.a = 3;
//
// console.log(objectOne.a);
//
// console.log('objectOne:', objectOne);
// console.log('anotherObject', anotherObject);


/*
2. If property found higher on the [[Prototype]] chain,
but it's marked as read-only (writable:false),
then both the setting of that existing property
as well as the creation of the shadowed property are disallowed.
If the code is running in strict mode, an error will be thrown.
Otherwise, the setting of the property value will silently be ignored
*/


// Object.defineProperty(anotherObject, "b", {
//   value: 4,
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
//
// var objectTwo = Object.create( anotherObject );
//
// try {
//   objectTwo.b = 3;
// }
// catch (error){
//   console.log(error)
// }
//
//
// console.log('objectTwo:', objectTwo);
// console.log('anotherObject', anotherObject);


/*
3. If property is found higher on the [[Prototype]] chain
and it's a setter, then the setter will always be called.
Nothing will be added to (aka, shadowed on) the object,
nor will the property setter be redefined.
*/

// Object.defineProperty(anotherObject, "c", {
//   set: function(val) {
//     this.a = val * 2;
//   }
// });
//
// var objectThree = Object.create( anotherObject );
//
// objectThree.c = 4;
//
// console.log('objectThree:', objectThree);
// console.log('anotherObject', anotherObject);
