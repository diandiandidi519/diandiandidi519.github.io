import{_ as s,c as a,b as p,o as t}from"./app-CLd0BwWF.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="最长重复子串" tabindex="-1"><a class="header-anchor" href="#最长重复子串"><span>最长重复子串</span></a></h1><p>给定字符串 s，找出最长重复子串的长度。如果不存在重复子串就返回 0。</p><p>示例 1：</p><p>输入：&quot;abcd&quot;</p><p>输出：0</p><p>解释：没有重复子串。</p><p>示例 2：</p><p>输入：&quot;abbaba&quot;</p><p>输出：2</p><p>解释：最长的重复子串为 &quot;ab&quot; 和 &quot;ba&quot;，每个出现 2 次。</p><p>示例 3：</p><p>输入：&quot;aabcaabdaab&quot;</p><p>输出：3</p><p>解释：最长的重复子串为 &quot;aab&quot;，出现 3 次。</p><p>提示：</p><ul><li>1 &lt;= s.length &lt;= 2000</li><li>字符串 s 仅包含从 &#39;a&#39; 到 &#39;z&#39; 的小写英文字母。</li></ul><h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解"><span>题解</span></a></h1><p>dp[i][j] 代表分别以字符串i和字符串j结尾时，相同子串的最大长度</p><p>其中i永远小于j，所有状态的值均初始化为0</p><p>状态转移时，如果s[i]和s[j]不同就不必管，因为以i结尾和以j结尾不会是相同子串</p><p>如果s[i]和s[j]相同，那么dp[i][j]就等于dp[i-1][j-1]+1，这点应该是很显然的，就是给i-1和j-1结尾的重复子串两边各加了一个相同字符。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">longestRepeatingSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length</span>
<span class="line">    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> max</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22)]))}const i=s(e,[["render",o],["__file","最长重复子串.html.vue"]]),u=JSON.parse('{"path":"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E4%B8%B2.html","title":"最长重复子串","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1740658985000,"contributors":[{"name":"wangshuya.wsy","username":"wangshuya.wsy","email":"wangshuya.wsy@bytedance.com","commits":1,"url":"https://github.com/wangshuya.wsy"}]},"filePathRelative":"algorithm/动态规划/最长重复子串.md"}');export{i as comp,u as data};
