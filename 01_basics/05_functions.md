# Functions

In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object.

```javascript
function foo() {
    return 22;
}

foo.bar = "hello world";

typeof foo;         // "function"
typeof foo();       // "number"
typeof foo.bar;     // "string"
```
