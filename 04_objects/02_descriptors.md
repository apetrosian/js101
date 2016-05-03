# Property Descriptors

Prior to ES5, the JavaScript language gave no direct way for your code to inspect or draw any distinction between the characteristics of properties, such as whether the property was read-only or not.

But as of ES5, all properties are described in terms of a **property descriptor**.

```javascript
var myObject = {
    a: 2
};

Object.getOwnPropertyDescriptor(myObject, "a");
// {
//    value: 2,
//    writable: true,
//    enumerable: true,
//    configurable: true
// }
```


## Writable

The ability for you to change the value of a property is controlled by writable.

```javascript
var myObject = {};

Object.defineProperty(myObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
});

myObject.a = 3;

myObject.a; // 2
```

> As you can see, our modification of the value silently failed. If we try in strict mode, we get an TypeError.


## Configurable

As long as a property is currently configurable, we can modify its descriptor definition, using the same defineProperty(..) utility.

```javascript
var myObject = {
    a: 2
};

Object.defineProperty(myObject, "a", {
    value: 4,
    writable: true,
    configurable: false, // not configurable!
    enumerable: true
});

Object.defineProperty(myObject, "a", {
    value: 6,
    writable: true,
    configurable: true,
    enumerable: true
}); // TypeError
```
Be careful: as you can see, changing configurable to false is a **one-way action**, and cannot be undone!

Another thing `configurable:false` prevents is the ability to use the `delete` operator to remove an existing property.

## Enumerable

The name probably makes it obvious, but this characteristic controls if a property will show up in certain object-property enumerations, such as the `for..in` loop. Set to false to keep it from showing up in such enumerations, even though it's still completely accessible. Set to true to keep it present.
