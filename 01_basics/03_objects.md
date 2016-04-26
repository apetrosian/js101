# Objects

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

## Properties

A JavaScript object has properties associated with it.

```javascript
var myCar = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2017
};
```

Properties can be accessed using *dot notation* or *bracket notation*.

```javascript
// dot notation
myCar.make

// bracket notation
myCar['make']
```

> Bracket notation is useful if property name is stored in other variable.
