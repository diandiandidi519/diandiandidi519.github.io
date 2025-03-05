```js
function bind(context, ...args) {
  const self = this
  return function F(...rest) {
    if (this instanceof F) {
      return new self(...args, ...rest)
    }
    return self.call(context, ...args, ...rest)
  }
}
```
