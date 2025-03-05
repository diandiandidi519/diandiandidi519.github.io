```js
 let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
  =>
  [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
  ]
```

# map

```js
function list2tree(arr, root) {
  const map = {}

  const result = []

  for (const cur of arr) {
    const { id, parentId } = cur
    // 不存在的节点都先把children置为空
    if (!map[id]) {
      map[id] = {
        children: []
      }
    }
    // 存储当前节点
    map[id] = {
      ...cur,
      children: map[id].children
    }
    // 当前是根节点
    if (parentId === root) {
      result.push(map[id])
    } else {
      // 如果能够查找到父节点，要把当前节点存入父节点的children里面
      // 可能父节点还没有存入hash表里面
      if (!map[parentId]) {
        map[parentId] = {
          children: []
        }
      }
      // 非根节点的话，找到父节点，把自己塞到父节点的children中即可
      map[parentId].children.push(map[id])
    }
  }
  return result
}
```

# 双次遍历

# 递归形式

```js
function list2tree(arr, root) {}
```
