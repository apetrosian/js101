# Closure

**Closure** is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

A closure gives you access to an outer function’s scope from an inner function.

To create a closure, simply define a function inside another function and expose it.

```javascript
function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    bar(); // 2
}

foo();
```

Let us then consider code which brings closure into full light:

```javascript
var a = 4;

function foo() {
    var a = 2;

    function bar() {
        console.log( a );
    }

    return bar;
}

var baz = foo();

baz(); // 2
```

The function is being invoked well outside of its author-time lexical scope. Closure lets the function continue to access the lexical scope it was defined in at author-time.
