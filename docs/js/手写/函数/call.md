```js
function call(context, ...args) {
  if (typeof this !== "function") {
    throw new Error("");
  }
  context = context ? Object(context) : window;
  const fn = Symbol("fn");
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}
```
