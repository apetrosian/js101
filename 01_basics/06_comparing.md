# Comparing Values

The result of any comparison is JavaScript is boolean value, regardless of what value types are compared.

JavaScript has both strict and type–converting comparisons.

## Coercion

Coercion comes in two forms in JavaScript: *explicit* and *implicit*.

Here's an example of explicit coercion:

```javascript
var a = "22";

var b = Number(a);

a;  // "22"
b;  // 22 -- the number!
```

And here's an example of implicit coercion:

```javascript
var a = "22";

var b = a * 1;

a;  // "22"
b;  // 22 -- the number!
```

## Truthy & Falsy

The specific list of "falsy" values in JavaScript:

- "" (empty string)
- 0, -0, NaN
- null, undefined
- false

Any value that's not on this "falsy" list is "truthy", e. g.:

- "hello"
- 42
- true
- [], [ 1, "2", 3 ] (arrays)
- {}, { a: 22 } (objects)
- function foo() { .. } (functions)

## Equality Operators

There are four equality operators: `==`, `===`, `!=`, and `!==`. The `!` forms are of course the symmetric "not equal" versions of their counterparts.

The difference between `==` and `===` is usually characterized that `==` checks for value equality and `===` checks for both value and type equality. However, this is inaccurate. The proper way to characterize them is that `==` checks for value equality with coercion allowed, and `===` checks for value equality without allowing coercion; `===` is often called *"strict equality"* for this reason.

Consider the implicit coercion that's allowed by the `==` loose-equality comparison and not allowed with the `===` strict-equality:

```javascript
var a = "22";
var b = 22;

a == b;   // true
a === b;  // false
```

> For more information about the == equality comparison rules, see the ES5 specification (section 11.9.3)
http://www.ecma-international.org/ecma-262/5.1/

## Inequality Operators

The `<`, `>`, `<=`, and `>=` operators are used for inequality.

JavaScript string values can also be compared for inequality, using typical alphabetic rules `("bar" < "foo")`.

```javascript
var a = 21;
var b = "22";
var c = "23";

a < b;  // true
b < c;  // true
```

> For more information about the inequality comparison rules, see section 11.8.5 of the ES5 specification
http://www.ecma-international.org/ecma-262/5.1/
