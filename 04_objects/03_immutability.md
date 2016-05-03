# Immutability

## Object Constant

By combining `writable:false` and `configurable:false`, you can essentially create a constant (cannot be changed, redefined or deleted) as an object property, like:

```javascript
var myObject = {};

Object.defineProperty(myObject, "FAVORITE_NUMBER", {
    value: 22,
    writable: false,
    configurable: false
});
```

## Prevent Extensions

If you want to prevent an object from having new properties added to it, but otherwise leave the rest of the object's properties alone, call `Object.preventExtensions()`:

```javascript
var myObject = {
    a: 2
};

Object.preventExtensions( myObject );

myObject.b = 3;
myObject.b; // undefined
```
> In non-strict mode, the creation of b fails silently. In strict mode, it throws a TypeError.

## Seal

`Object.seal()` creates a "sealed" object, which means it takes an existing object and essentially calls `Object.preventExtensions()` on it, but also marks all its existing properties as `configurable:false`.

## Freeze

`Object.freeze()` creates a frozen object, which means it takes an existing object and essentially calls `Object.seal()` on it, but it also marks all "data accessor" properties as `writable:false`, so that their values cannot be changed.
