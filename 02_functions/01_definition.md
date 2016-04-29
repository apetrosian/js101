# Function Definition

A function definition (also called a function declaration, or function statement) consists of the `function` keyword, followed by:

- The name of the function.

- A list of arguments to the function, enclosed in parentheses and separated by commas.

- The JavaScript statements that define the function, enclosed in curly brackets, `{ }`.

```javascript
function square(n) {
  return n * n;
}

square(2); // 4
```

**Primitive parameters** (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function.

## Function expressions

functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name.

For example, the function square could have been defined as:

```javascript
var square = function(n) {
  return n * n;
}
```

#Immediately Invoked Function Expressions (IIFEs)

There's another way to execute a function expression, which is typically referred to as an immediately invoked function expression (IIFE):

```javascript
(function square(n) {
  return n * n;
})(2)
```

This technique is often used to create a new scope to encapsulate modules.
