# Binding Rules

## Default Binding

In this case, the default binding for `this` applies to the function call, and so points `this` at the global object.

```javascript
function foo() {
    console.log( this.a );
}

var a = 2;

foo(); // 2
```

If `strict mode` is in effect, the global object is not eligible for the default binding, so the `this` is instead set to `undefined`.

```javascript
function foo() {
    "use strict";

    console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`
```

## Implicit Binding

```javascript
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
```

The call-site uses the `obj` context to **reference** the function, so you could say that the obj object "owns" or "contains" the **function reference** at the time the function is called.

### Implicitly Lost

```javascript
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"
```

Even though `bar` appears to be a reference to `obj.foo`, in fact, it's really just another reference to foo itself. Moreover, the call-site is what matters, and the call-site is `bar()`, which is a plain, un-decorated call and thus the default binding applies.

The more subtle, more common, and more unexpected way this occurs is when we consider passing a callback function:

```javascript
function foo() {
    console.log( this.a );
}

function doFoo(fn) {
    // `fn` is just another reference to `foo`

    fn(); // <-- call-site!
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object

obj.foo() // 2

doFoo( obj.foo ); // "oops, global"
```

## Explicit Binding

Functions have `call` and `apply` methods. They both take, as their first parameter, an object to use for the `this`, and then invoke the function with that this specified.

```javascript
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2
```

Invoking foo with explicit binding by `foo.call(..)` allows us to force its this to be `obj`.

Unfortunately, explicit binding alone still doesn't offer any solution to the issue mentioned previously, of a function "losing" its intended `this` binding, or just having it paved over by a framework, etc.

## Hard Binding

But a variation pattern around explicit binding actually does the trick.

```javascript
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

var bar = function() {
    foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2
```

The most typical way to wrap a function with a hard binding creates a pass-thru of any arguments passed and any return value received:

```javascript
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = function() {
    return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: `bind()`, and it's used like this:

```javascript
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

## `new` Binding

```javascript
function foo(a) {
    this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2
```

By calling `foo()` with `new` in front of it, we've constructed a new object and set that new object as the this for the call of `foo()`.  We'll call this *new binding*.
