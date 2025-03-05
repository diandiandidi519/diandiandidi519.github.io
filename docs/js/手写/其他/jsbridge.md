# 实现原理

JSBridge 的核心是建立 Web 和 Native 的双向通信机制：

JS 调用 Native：通过 URL Scheme 拦截或 WebView 注入 API

Native 调用 JS：直接执行 JavaScript 代码

异步回调管理：通过唯一 ID 匹配请求和响应

# 简单实现

```js
// 定义一个JSBridge类
class JSBridge {
  constructor() {
    this.callbacks = {}
    this.messageQueue = []
    this.initMessageListener()
  }

  // 初始化消息监听，模拟接收原生发送过来的消息
  initMessageListener() {
    // 这里假设window.nativeCallBack是原生应用调用JavaScript的方法
    window.nativeCallBack = message => {
      const { callbackId, result } = message
      if (callbackId && this.callbacks[callbackId]) {
        this.callbacks[callbackId](result)
        delete this.callbacks[callbackId]
      }
    }
  }

  // 发送消息给原生应用
  sendMessageToNative(message, callback) {
    const callbackId = `callback_${Date.now()}`
    if (callback) {
      this.callbacks[callbackId] = callback
    }
    const messageToSend = {
      ...message,
      callbackId
    }
    // 这里假设window.postMessage是向原生发送消息的方法，实际中需要根据具体情况调整
    window.postMessage(messageToSend)
  }

  // 调用原生方法
  callNativeMethod(methodName, params, callback) {
    const message = {
      method: methodName,
      params: params || []
    }
    this.sendMessageToNative(message, callback)
  }
}

// 示例使用
const jsBridge = new JSBridge()

// 调用原生方法并传入回调函数
jsBridge.callNativeMethod('showToast', ['Hello, Native!'], result => {
  console.log('原生方法执行结果:', result)
})
```

# promise实现

```js
// 定义一个JSBridge类
class JSBridge {
  constructor() {
    this.callbacks = {}
    this.messageQueue = []
    this.initMessageListener()
  }

  // 初始化消息监听，模拟接收原生发送过来的消息
  initMessageListener() {
    // 这里假设window.nativeCallBack是原生应用调用JavaScript的方法
    window.nativeCallBack = message => {
      const { callbackId, result, error } = message
      if (callbackId && this.callbacks[callbackId]) {
        if (error) {
          // 如果有错误信息，使用 reject 处理
          this.callbacks[callbackId].reject(error)
        } else {
          // 正常结果，使用 resolve 处理
          this.callbacks[callbackId].resolve(result)
        }
        delete this.callbacks[callbackId]
      }
    }
  }

  // 发送消息给原生应用
  sendMessageToNative(message) {
    return new Promise((resolve, reject) => {
      const callbackId = `callback_${Date.now()}`
      this.callbacks[callbackId] = { resolve, reject }
      const messageToSend = {
        ...message,
        callbackId
      }
      // 这里假设window.postMessage是向原生发送消息的方法，实际中需要根据具体情况调整
      window.postMessage(messageToSend)
    })
  }

  // 调用原生方法
  callNativeMethod(methodName, params) {
    const message = {
      method: methodName,
      params: params || []
    }
    return this.sendMessageToNative(message)
  }
}

// 示例使用
const jsBridge = new JSBridge()

// 调用原生方法并使用 Promise 处理结果
jsBridge
  .callNativeMethod('showToast', ['Hello, Native!'])
  .then(result => {
    console.log('原生方法执行结果:', result)
  })
  .catch(error => {
    console.error('原生方法执行出错:', error)
  })
```

代码说明：

- sendMessageToNative 方法：
  该方法返回一个 Promise 对象。

在 Promise 的构造函数中，生成一个唯一的 callbackId，并将 resolve 和 reject 函数存储在 this.callbacks 对象中，键为 callbackId。

发送包含 callbackId 的消息给原生应用。

- initMessageListener 方法：
  当接收到原生应用的消息时，检查消息中是否包含 callbackId 和 error。

如果有 error，调用 reject 方法将错误信息传递给 Promise 的 catch 块。

如果没有 error，调用 resolve 方法将结果传递给 Promise 的 then 块。

- callNativeMethod 方法：
  构造要发送的消息对象，包含方法名和参数。

调用 sendMessageToNative 方法并返回其返回的 Promise 对象。

示例使用：

创建 JSBridge 实例。

调用 callNativeMethod 方法，并使用 then 方法处理成功结果，使用 catch 方法处理错误结果。

# 复杂实现

```js
class JSBridge {
  constructor() {
    this.callbacks = {}
    this.messageHandlers = {}
    this.callbackId = 0
    this.init()
  }

  // 初始化通信环境
  init() {
    window.JSBridge = {
      _handleMessageFromNative: message => {
        this._handleMessage(message)
      }
    }
  }

  // 调用 Native 功能
  callHandler(handlerName, data, callback) {
    const callbackId = `cb_${this.callbackId++}_${new Date().getTime()}`

    if (typeof callback === 'function') {
      this.callbacks[callbackId] = callback
    }

    const message = {
      handlerName,
      data: data || {},
      callbackId
    }

    // Android 兼容
    if (window.WebViewJavascriptBridge) {
      window.WebViewJavascriptBridge.callHandler(handlerName, data, responseData => {
        callback && callback(responseData)
      })
      return
    }

    // iOS 兼容
    if (window.webkit && window.webkit.messageHandlers) {
      window.webkit.messageHandlers[handlerName].postMessage(message)
      return
    }

    // 通用 URL Scheme 方式
    const url = `jsbridge://${handlerName}?${encodeURIComponent(
      JSON.stringify({
        data,
        callbackId
      })
    )}`

    this._createIframe(url)
  }

  // 注册 JS 处理程序供 Native 调用
  registerHandler(handlerName, handler) {
    this.messageHandlers[handlerName] = handler
  }

  // 处理 Native 消息
  _handleMessage(message) {
    try {
      const msg = typeof message === 'string' ? JSON.parse(message) : message
      const { handlerName, data, responseId, responseData } = msg

      if (responseId) {
        // 处理 Native 回调
        const callback = this.callbacks[responseId]
        if (callback) {
          callback(responseData)
          delete this.callbacks[responseId]
        }
      } else if (handlerName) {
        // 处理 Native 调用 JS
        const handler = this.messageHandlers[handlerName]
        if (handler) {
          const responseCallback = responseData => {
            this._sendResponse(msg.callbackId, responseData)
          }
          handler(data, responseCallback)
        }
      }
    } catch (error) {
      console.error('JSBridge message handling failed:', error)
    }
  }

  // 发送响应给 Native
  _sendResponse(callbackId, responseData) {
    const message = {
      responseId: callbackId,
      responseData: responseData || {}
    }

    if (window.JSBridgeNativeProxy) {
      // Android 方式
      window.JSBridgeNativeProxy.postMessage(JSON.stringify(message))
    } else if (window.webkit) {
      // iOS 方式
      window.webkit.messageHandlers.JSBridge.postMessage(message)
    } else {
      console.warn('No native communication method found')
    }
  }

  // 创建隐藏 iframe 触发 URL Scheme
  _createIframe(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    document.body.appendChild(iframe)
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 0)
  }
}

// 初始化单例
const jsBridge = new JSBridge()

// 使用示例 -------------------------------------------------
// 注册 JS 方法供 Native 调用
jsBridge.registerHandler('showAlert', (data, callback) => {
  alert('Native says: ' + data.message)
  callback({ status: 'OK' })
})

// 调用 Native 方法
jsBridge.callHandler('getLocation', { type: 'GPS' }, response => {
  console.log('Got location:', response)
})

// 带 Promise 的调用方式
jsBridge.callHandlerPromise = (handlerName, data) => {
  return new Promise((resolve, reject) => {
    jsBridge.callHandler(handlerName, data, response => {
      if (response.error) {
        reject(response.error)
      } else {
        resolve(response)
      }
    })
  })
}

// 使用 Promise 示例
jsBridge
  .callHandlerPromise('getDeviceInfo')
  .then(info => console.log(info))
  .catch(err => console.error(err))
```
