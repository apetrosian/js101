"use strict";

var myObject = {};

Object.defineProperty(myObject, "FAVORITE_NUMBER", {
    value: 22,
    writable: true,
    configurable: false,
    //enumerable: true
});

console.log(myObject['FAVORITE_NUMBER']);

myObject['FAVORITE_NUMBER'] = 23;
