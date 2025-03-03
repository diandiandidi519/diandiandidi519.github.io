```js
function create(con, ...args) {
  // 创建一个对象，对象的原型指向构造函数的原型
  const obj = Object.create(con.prototype);
  //执行这个函数，并且this指向创建的对象
  const result = con.apply(obj, args);
  //返回结果，如果函数执行返回的是object对象，则返回这个对象，否则返回对象自身
  return result instanceof Object ? result : obj;
}
```
