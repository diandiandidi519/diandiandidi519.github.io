```js
function apply(context, args) {
  const symbolFn = Symbol("fn");
  context = context ? Object(context) : window;
  context[symbolFn] = this;
  const result = context[symbolFn](...args);
  delete context[symbolFn];
  return result;
}
```
