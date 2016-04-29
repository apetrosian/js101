# Modules

On of the code patterns which leverage the power of closure is **module**.

```javascript
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join() );
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething();  // cool
foo.doAnother();    // 1,2,3
```

Firstly, `CoolModule()` is just a function, but it has to be invoked for there to be a module instance created. Without the execution of the outer function, the creation of the inner scope and the closures would not occur.

Secondly, the `CoolModule()` function returns an object. The object we return has references on it to our inner functions, but not to our inner data variables. We keep those **hidden and private**. It's appropriate to think of this object return value as essentially a **public API for our module**.

The `doSomething()` and `doAnother()` functions have closure over the inner scope of the module "instance" (arrived at by actually invoking `CoolModule()`). When we transport those functions outside of the lexical scope, by way of property references on the object we return, we have now set up a condition by which closure can be observed and exercised.
