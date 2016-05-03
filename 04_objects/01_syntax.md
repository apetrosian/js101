# Syntax

Objects come in two forms: the declarative (literal) form, and the constructed form.

Literal syntax:

```javascript
var myObj = {};
```

The constructed form:

```javascript
var myObj = new Object();
```

The constructed form and the literal form result in exactly the same sort of object. The only difference really is that you can add one or more key/value pairs to the literal declaration, whereas with constructed-form objects, you must add the properties one-by-one.

> It's extremely uncommon to use the "constructed form" for creating objects as just shown. You would pretty much always want to use the literal syntax form.
