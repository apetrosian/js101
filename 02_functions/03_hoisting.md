# Hoisting

JavaScript builds its execution environment in two passes:

- The declaration pass sets up the runtime environment, where it scans for all variable and function declarations and creates the identifiers.

- The second pass is the execution pass.

Try following code:

```javascript
var x = 1;

(function () {
  console.log(x);
  var x = 2;
}());
```

If you are surprised with output of `console.log()`, you are not alone. This is a common source of bugs in JavaScript.

When it gets to the `console.log()` statement in the execution pass, the inner scoped `x` has been declared, but is still `undefined`, because it hasn't hit the initialization.

In effect, this is how JavaScript interprets the code:

```javascript
var x = 1;

(function () {
  var x; // Declaration is hoisted and x is undefined.
  console.log(x);
  x = 2;
}());
```

**Functions declarations** behave a little differently. Both the identifier and the function body are hoisted.

**Function expressions** do not share this behavior, because they do not declare a function. Instead, they declare a variable and are subject to the same variable-hoisting behavior.
