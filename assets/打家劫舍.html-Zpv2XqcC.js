import{_ as s,c as a,b as p,o as e}from"./app-x7oXx1JU.js";const t={};function c(o,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。</p><p>给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。</p><p>示例 1：</p><p>输入：[1,2,3,1]</p><p>输出：4</p><p>解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。</p><pre><code> 偷窃到的最高金额 = 1 + 3 = 4 。
</code></pre><p>示例 2：</p><p>输入：[2,7,9,3,1]</p><p>输出：12</p><p>解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。</p><pre><code> 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
</code></pre><p>提示：</p><ul><li>1 &lt;= nums.length &lt;= 100</li><li>0 &lt;= nums[i] &lt;= 400</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token comment">//dp[i]代表第i间房间能够打劫的最大金额</span></span>
<span class="line">  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">  dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//第i间房间要么打劫，要么不打劫，</span></span>
<span class="line">    <span class="token comment">//打劫的话，前一间房间不能打劫</span></span>
<span class="line">    <span class="token comment">//不打劫的话，可以打劫前一间</span></span>
<span class="line">    <span class="token comment">//两者求最大值</span></span>
<span class="line">    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const i=s(t,[["render",c],["__file","打家劫舍.html.vue"]]),u=JSON.parse('{"path":"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[]}],"git":{"updatedTime":1741163975000,"contributors":[{"name":"wangshuya.wsy","username":"wangshuya.wsy","email":"wangshuya.wsy@bytedance.com","commits":2,"url":"https://github.com/wangshuya.wsy"}],"changelog":[{"hash":"47f3c366de1ee4cd419369819e9d621fe969f933","date":1741163975000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 动态规划调整"},{"hash":"c1a0781fd44af05a22c23800bc667083372a371f","date":1740658985000,"email":"wangshuya.wsy@bytedance.com","author":"wangshuya.wsy","message":"feat: 动态规划题解"}]},"filePathRelative":"algorithm/动态规划/打家劫舍.md"}');export{i as comp,u as data};
