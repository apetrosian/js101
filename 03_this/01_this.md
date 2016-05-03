# What is this?

Consider code which attempts (and fails!) to cross over the boundary and use this to implicitly refer to a function's lexical scope:

```javascript
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log( this.a );
}

foo(); //undefined
```

To understand this binding, we have to understand the **call-site**: the location in code where a function is called (not where it's declared).

We must inspect the call-site to answer the question: what's this `this` a reference to?

What's important is to think about the **call-stack** (the stack of functions that have been called to get us to the current moment in execution).

Let's demonstrate call-stack and call-site:

```javascript
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`
```
Take care when analyzing code to find the actual call-site (from the call-stack), because it's the only thing that matters for this binding.
