# "Constructors"

```javascript
function Foo() {
    // ...
}

var a = new Foo();

Object.getPrototypeOf( a ) === Foo.prototype; // true
```

When a is created by calling `new Foo()`, one of the things that happens is that a gets an internal `[[Prototype]]` link to the object that `Foo.prototype` is pointing at.


## Constructor Or Call?

```javascript
Foo.prototype.constructor === Foo; // true

var a = new Foo();

a.constructor === Foo; // true
```

In reality, `Foo` is no more a "constructor" than any other function in your program. Functions themselves are not constructors.

```javascript
function NothingSpecial() {
  console.log( "Don't mind me!" );
}

var a = new NothingSpecial();
// "Don't mind me!"

a; // {}
```

`NothingSpecial` is just a plain old normal function, but when called with `new`, it constructs an object, almost as a *side-effect*, which we happen to assign to `a`.

The call was a **constructor call**, but `NothingSpecial` is not a constructor.


For one, the `.constructor` property on `Foo.prototype` is only there by default on the object created when `Foo` the function is declared. If you create a new object, and replace a function's default `.prototype` object reference, the new object will not by default magically get a `.constructor` on it.

```javascript
function Foo() { /* .. */ }

Foo.prototype = { /* .. */ }; // create a new prototype object

var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!
```

> constructor does not mean constructed by

The result? Some arbitrary object-property reference like `a1.constructor` cannot actually be trusted to be the assumed default function reference. Moreover, just by simple omission, `a1.constructor` can even end up pointing somewhere quite surprising and insensible.

This is extremely unreliable, and an unsafe reference to rely upon in your code. Generally, **such references should be avoided where possible**.
