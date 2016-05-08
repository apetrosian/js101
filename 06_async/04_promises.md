# Promises

**Promises** are objects that allow you to add callback functions to *success* or *failure* queues.

Instead of calling a callback function in response to the completion of an asynchronous (or synchronous) operation, you return a promise, which allows you to register any number of callbacks.

A Promise is in one of these states:

- pending: initial state, not fulfilled or rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.
