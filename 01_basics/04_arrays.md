# Arrays

An array is an `object` that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions.

```javascript

var things = [
  'red',
  3,
  true
]

things[0] // "red"
things[1] // 3
things[2] // true

things.length // 3

typeof things // "object"
```

Because arrays are *special objects* (as `typeof` implies), they can also have properties, including the automatically updated `length` property.
