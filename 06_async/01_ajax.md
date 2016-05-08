# Ajax

**AJAX** stands for Asynchronous JavaScript and XML. In a nutshell, it is the use of the `XMLHttpRequest` object to communicate with server-side scripts.


- Make requests to the server without reloading the page
- Receive and work with data from the server


```javascript
// ajax(..) is some arbitrary Ajax function given by a library
var data = ajax("http://some.url.1");

console.log(data);
// Oops! `data` generally won't have the Ajax results
```

The simplest way of "waiting" from now until later is to use a function, commonly called a **callback** function:

```javascript
// ajax(..) is some arbitrary Ajax function given by a library
ajax("http://some.url.com", function myCallback(data){
    console.log(data); // Yay, I gots me some `data`!
});
```
