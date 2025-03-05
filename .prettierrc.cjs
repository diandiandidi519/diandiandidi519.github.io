// .prettierrc.js
module.exports = {
  printWidth: 100, // 单行代码最大长度[5,7](@ref)
  tabWidth: 2, // 缩进空格数[5,6](@ref)
  useTabs: false, // 禁止用 Tab 缩进[4,6](@ref)
  semi: false, // 句尾不自动加分号[1,3](@ref)
  singleQuote: true, // 使用单引号[1,2,6](@ref)
  trailingComma: 'none', // 对象/数组末尾不加逗号[3,4](@ref)
  bracketSpacing: true, // 对象括号内加空格（如 { foo: bar }）[6](@ref)
  arrowParens: 'avoid', // 箭头函数单参数不加括号（如 x => x）[3](@ref)
  vueIndentScriptAndStyle: true, // Vue 文件中的 <script>/<style> 缩进[3,5](@ref)
  endOfLine: 'auto' // 自动识别换行符（兼容不同系统）[7](@ref)
}
