# Axios的拦截器来拦截重复请求和处理竞态问题


Axios 拦截器可以通过管理请求标识和取消机制来拦截重复请求并处理竞态问题。以下是实现方案及示例代码：

一、实现思路
生成唯一请求标识：通过 请求方法 + URL + 参数 生成唯一 Key，用于标识重复请求。

使用 AbortController 取消请求：利用 AbortController 取消重复的旧请求。

管理请求队列：通过 Map 存储正在进行的请求，拦截重复请求时取消旧请求。

二、完整代码实现
```js
import axios from 'axios';

// 存储正在进行中的请求
const pendingRequests = new Map();

/**
 * 生成请求的唯一标识（序列化参数，确保键的顺序不影响）
 * @param {import('axios').AxiosRequestConfig} config 
 * @returns {string}
 */
function generateRequestKey(config) {
  const { method, url, params, data } = config;
  const sortedParams = params ? JSON.stringify(params, Object.keys(params).sort()) : '';
  const sortedData = data ? JSON.stringify(data, Object.keys(data).sort()) : '';
  return [method, url, sortedParams, sortedData].join('&');
}

// 请求拦截器：处理重复请求
axios.interceptors.request.use(config => {
  const key = generateRequestKey(config);
  
  // 检查是否为重复请求
  if (pendingRequests.has(key)) {
    const abortController = pendingRequests.get(key);
    abortController.abort(); // 取消旧请求
    pendingRequests.delete(key);
  }

  // 创建新的 AbortController 并存储
  const abortController = new AbortController();
  config.signal = abortController.signal;
  pendingRequests.set(key, abortController);

  return config;
});

// 响应拦截器：请求完成后移除队列
axios.interceptors.response.use(
  response => {
    const key = generateRequestKey(response.config);
    pendingRequests.delete(key);
    return response;
  },
  error => {
    // 请求被取消的错误无需处理
    if (!axios.isCancel(error)) {
      const key = generateRequestKey(error.config);
      pendingRequests.delete(key);
    }
    return Promise.reject(error);
  }
);
```
三、关键点解析

唯一请求标识：

使用 method、url、序列化的 params 和 data 生成唯一 Key。

序列化时对对象键进行排序，避免 {a:1, b:2} 和 {b:2, a:1} 被视为不同参数。

取消重复请求：

在请求拦截器中，若检测到相同 Key 的请求，通过 abortController.abort() 取消旧请求。

更新队列为新请求的 AbortController，确保后续重复请求被正确取消。

队列管理：

请求完成后（无论成功或失败），在响应拦截器中移除对应的 Key。

被取消的请求会触发 Cancel 错误，通过 axios.isCancel() 过滤处理。

四、使用示例
```js
复制
// 示例：快速点击触发重复请求
function fetchData() {
  axios.get('/api/data', { params: { id: 1 } })
    .then(res => console.log('请求成功:', res))
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log('请求被取消:', err.message);
      } else {
        console.error('请求失败:', err);
      }
    });
}

// 多次调用 fetchData()，只有最后一次请求会成功
fetchData();
fetchData();
```
五、适用场景
表单提交防重复：防止用户多次点击提交按钮。

列表筛选防抖：频繁筛选时取消旧请求，确保结果对应最新条件。

页面切换取消请求：离开页面时取消未完成的请求。
