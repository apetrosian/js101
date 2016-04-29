# Scope

You use the `var` keyword to declare a variable that will belong to the current function scope, or the global scope if at the top level outside of any function.

## Nested Scopes

When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes.

```javascript
function foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;

            console.log( a, b, c ); // 1 2 3
        }

        baz();
        console.log( a, b ); // 1 2
    }

    bar();
    console.log( a ); // 1
}

foo();
```

## Block scope

In **ES6**, the `let` keyword is introduced to allow declarations of variables in any arbitrary block of code.

```javascript
var foo = true;

if (foo) {
    let bar = false;
    console.log( bar ); // false
}

console.log( bar ); // ReferenceError
```
