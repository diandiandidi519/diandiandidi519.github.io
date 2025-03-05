import{_ as s,c as a,b as p,o as e}from"./app-x7oXx1JU.js";const t={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。</p><p>子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。</p><p>例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。</p><p>示例 1：</p><p>输入：nums = [10,9,2,5,3,7,101,18]</p><p>输出：4</p><p>解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。</p><p>示例 2：</p><p>输入：nums = [0,1,0,3,2,3]</p><p>输出：4</p><p>示例 3：</p><p>输入：nums = [7,7,7,7,7,7,7]</p><p>输出：1</p><p>提示：</p><ul><li>1 &lt;= nums.length &lt;= 2500</li><li>-104 &lt;= nums[i] &lt;= 104</li></ul><p>进阶：</p><p>你能将算法的时间复杂度降低到 O(n log(n)) 吗?</p><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h2><ol><li>定义状态</li></ol><p>定义 dp[i] 为 以 nums[i] 结尾的最长递增子序列的长度。</p><p>例如，若 nums = [0,1,0,3,2,3]，则：</p><p>dp[3] 表示以 nums[3]=3 结尾的最长递增子序列的长度（即子序列 [0,1,3]，长度为 3）。</p><ol start="2"><li>初始条件</li></ol><p>每个元素本身可以视为长度为 1 的子序列，因此初始化：</p><p>dp[i] = 1（所有位置初始值为 1）。</p><ol start="3"><li>状态转移的逻辑</li></ol><p>我们需要找到所有在 nums[i] 之前且比它小的元素 nums[j]（j &lt; i），然后将 nums[i] 接在这些子序列的末尾，形成新的递增子序列。</p><p>例如，假设 nums[i] = 3，前面有 nums[j] = 0,1,0 都比它小，则 dp[i] 可以取这些 dp[j] 中的最大值加 1。</p><p>状态转移方程可以表示为：</p><p>dp[i] = max(dp[j] + 1) 对所有的 j &lt; i 且 nums[j] &lt; nums[i]</p><p>执行过程：</p><p>1.初始化：</p><p>dp 数组的每个元素初始化为 1，因为每个元素本身可以视为一个长度为 1 的子序列。</p><p>maxLen 初始化为 1，记录全局最长子序列长度。</p><p>2.双重循环：</p><p>外层循环：遍历数组中的每个元素 nums[i]（从第二个元素开始）。</p><p>内层循环：遍历 nums[i] 之前的所有元素 nums[j]。</p><p>如果 nums[j] &lt; nums[i]，说明 nums[i] 可以接在 nums[j] 后面形成一个更长的递增子序列。</p><p>更新 dp[i] 为 dp[j] + 1 和当前 dp[i] 的较大值。</p><p>3.更新全局最大值：</p><p>每次计算完 dp[i] 后，用 maxLen 记录当前最长子序列的长度。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 使用动态规划找到最长严格递增子序列的长度</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span> 输入的整数数组</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 最长递增子序列的长度</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">lengthOfLIS</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度</span></span>
<span class="line">  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 初始每个元素自身长度为1</span></span>
<span class="line">  <span class="token keyword">let</span> maxLen <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 记录全局最大值</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 遍历 i 之前的所有元素，寻找可以接在 nums[i] 前面的更小元素</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 如果 nums[j] &lt; nums[i]，则可以接在 j 后面形成更长的子序列</span></span>
<span class="line">        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 更新全局最大值</span></span>
<span class="line">    maxLen <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> maxLen</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43)]))}const i=s(t,[["render",l],["__file","最长递增子序列.html.vue"]]),u=JSON.parse('{"path":"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"动态规划","slug":"动态规划","link":"#动态规划","children":[]}],"git":{"updatedTime":1741163975000,"contributors":[{"name":"wangshuya.wsy","username":"wangshuya.wsy","email":"wangshuya.wsy@bytedance.com","commits":3,"url":"https://github.com/wangshuya.wsy"}],"changelog":[{"hash":"47f3c366de1ee4cd419369819e9d621fe969f933","date":1741163975000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 动态规划调整"},{"hash":"b725ec79a7123006ce87c9280e97eb0dd1db2542","date":1740834724000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 动态规划题解"},{"hash":"c1a0781fd44af05a22c23800bc667083372a371f","date":1740658985000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 动态规划题解"}]},"filePathRelative":"algorithm/动态规划/最长递增子序列.md"}');export{i as comp,u as data};
