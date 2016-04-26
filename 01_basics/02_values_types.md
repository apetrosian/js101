# Values and Types

In JavaScript variables are untyped, but values has type:

- string
- number
- boolean
- null
- undefined
- object
- symbol (ES6)

## Primitive types

### Boolean

Boolean represents a logical entity and can have two values: `true`, and `false`.


### Null

The Null type has exactly one value: `null`.

But why `typeof null` returns `"object"`?

> TL:DR

> It is bug and the type should be null

In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the bogus typeof return value.

[The history of “typeof null”](http://www.2ality.com/2013/10/typeof-null.html)

### Undefined

A variable that has not been assigned a value has the value `undefined`.

### Number

According to the ECMAScript standard, there is only one number type: the **double-precision floating-point format**.

There is no specific type for integers.

In addition to being able to represent floating-point numbers, the number type has three symbolic values: `+Infinity`, `-Infinity`, and `NaN` (not-a-number).


### String

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values.

Each element in the String occupies a position in the String.

The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

### Symbol

Symbols are new to JavaScript in ECMAScript Edition 6.

A Symbol is a *unique* and *immutable* primitive value and may be used as the key of an Object property.

[ES6 In Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
