# Object.prototype

Objects in JavaScript have an internal property, denoted in the specification as [[Prototype]], which is simply a reference to another object.

```javascript
var anotherObject = {
    a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

myObject.a; // 2
```

But where exactly does the `[[Prototype]]` chain "end"?

The top-end of every normal `[[Prototype]]` chain is the built-in `Object.prototype`.

This object includes a variety of common utilities used all over JS, because all normal objects in JavaScript have at the top of their `[[Prototype]]` chain the `Object.prototype` object.
