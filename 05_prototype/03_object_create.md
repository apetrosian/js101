# Object.create


```javascript
var foo = {
    something: function() {
        console.log( "Tell me something good..." );
    }
};

var bar = Object.create( foo );

bar.something(); // Tell me something good...
```

`Object.create()` creates a new object *(bar)* linked to the object we specified *(foo)*, which gives us all the power *(delegation)* of the `[[Prototype]]` mechanism, but without any of the unnecessary complication of new functions acting as classes and constructor calls, confusing `.prototype` and `.constructor` references, or any of that extra stuff.

We don't need classes to create meaningful relationships between two objects. The only thing we should really care about is objects linked together for delegation, and `Object.create()` gives us that linkage without all the class cruft.

## Links As Fallbacks?

It may be tempting to think that these links between objects primarily provide a sort of fallback for "missing" properties or methods. While that may be an observed outcome, I don't think it represents the right way of thinking about `[[Prototype]]`.

```javascript
var anotherObject = {
    cool: function() {
        console.log( "cool!" );
    }
};

var myObject = Object.create( anotherObject );

myObject.cool(); // "cool!"
```

You can however design your API with less "magic" to it, but still take advantage of the power of `[[Prototype]]` linkage.

```javascript
var anotherObject = {
    cool: function() {
        console.log( "cool!" );
    }
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
    this.cool(); // internal delegation!
};

myObject.doCool(); // "cool!"
```
