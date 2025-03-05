import{_ as s,c as a,b as p,o as t}from"./app-x7oXx1JU.js";const e={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p><p>子数组是数组中的一个连续部分。</p><p>示例 1：</p><p>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]</p><p>输出：6</p><p>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。</p><p>示例 2：</p><p>输入：nums = [1]</p><p>输出：1</p><p>示例 3：</p><p>输入：nums = [5,4,-1,7,8]</p><p>输出：23</p><p>提示：</p><ul><li>1 &lt;= nums.length &lt;= 105</li><li>-104 &lt;= nums[i] &lt;= 104</li></ul><p>进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> max <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    sum<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>sum<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>sum<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> max</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const i=s(e,[["render",c],["__file","最大子数组和.html.vue"]]),u=JSON.parse('{"path":"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[]}],"git":{"updatedTime":1741163975000,"contributors":[{"name":"wangshuya.wsy","username":"wangshuya.wsy","email":"wangshuya.wsy@bytedance.com","commits":2,"url":"https://github.com/wangshuya.wsy"}],"changelog":[{"hash":"47f3c366de1ee4cd419369819e9d621fe969f933","date":1741163975000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 动态规划调整"},{"hash":"b4219636a3d7d5ecebd65f7ca8d2ca95b3687ab2","date":1740396280000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 每日练习一题"}]},"filePathRelative":"algorithm/动态规划/最大子数组和.md"}');export{i as comp,u as data};
