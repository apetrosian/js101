"use strict";

var protoObject = {
    a: 1,
    b: 2,
    c: 3
};

// Create new object with prototype protoObject
var myObject = Object.create(protoObject);

myObject.d = 4;

for (var prop in myObject) {
  console.log(prop);
}
