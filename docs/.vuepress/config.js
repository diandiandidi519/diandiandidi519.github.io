// import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  // base: "blog",
  lang: "en-US",

  title: "前端知识图谱",
  description: "构建属于自己的知识库",

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      "/",
      {
        text: "JS",
        link: "/js/",
      },
      // {
      //   text: "浏览器工作原理",
      //   link: "/browser/",
      // },
      // {
      //   text: "React18",
      //   link: "/react18/",
      // },
      // {
      //   text: "Vue",
      //   link: "/vue3/",
      // },
      // {
      //   text: "TypeScript",
      //   link: "/typescript/",
      // },
      // {
      //   text: "微前端",
      //   link: "/microfrontend/",
      // },
      // {
      //   text: "设计模式",
      //   link: "/design/",
      // },
      {
        text: "数据结构和算法",
        link: "/algorithm/",
      },
    ],
    sidebar: {
      "/algorithm": [
        {
          collapsible: false,
          text: "数据结构和算法",
          children: [
            {
              text: "哈希",
              link: "/algorithm/哈希/README.md",
              children: [
                {
                  text: "两数之和",
                  link: "/algorithm/哈希/两数之和.md",
                },
                {
                  text: "字母异位词分组",
                  link: "/algorithm/哈希/字母异位词分组.md",
                },
                {
                  text: "最长连续序列",
                  link: "/algorithm/哈希/最长连续序列.md",
                },
              ],
            },

            {
              text: "双指针",
              link: "/algorithm/双指针/README.md",
              children: [
                {
                  text: "三数之和",
                  link: "/algorithm/双指针/三数之和.md",
                },
                {
                  text: "移动零",
                  link: "/algorithm/双指针/移动零.md",
                },
                {
                  text: "盛最多水的容器",
                  link: "/algorithm/双指针/盛最多水的容器.md",
                },
              ],
            },
            {
              text: "滑动窗口",
              link: "/algorithm/滑动窗口/README.md",
              children: [
                {
                  text: "无重复字符的最长子串",
                  link: "/algorithm/滑动窗口/无重复字符的最长子串.md",
                },
                {
                  text: "和为K的子数组",
                  link: "/algorithm/滑动窗口/和为K的子数组.md",
                },
              ],
            },
            {
              text: "栈",
              children: [
                {
                  text: "括号内的字符串",
                  link: "/algorithm/栈/括号内的字符串.md",
                },
                {
                  text: "字符串解码",
                  link: "/algorithm/栈/字符串解码.md",
                },
                {
                  text: "最小栈",
                  link: "/algorithm/栈/最小栈.md",
                },
              ],
            },
            {
              text: "二叉树",
              link: "/algorithm/二叉树/README.md",
              children: [
                {
                  text: "中序遍历",
                  link: "/algorithm/二叉树/中序遍历.md",
                },
                {
                  text: "层次遍历",
                  link: "/algorithm/二叉树/层次遍历.md",
                },
              ],
            },

            {
              text: "动态规划",
              children: [
                {
                  text: "爬楼梯",
                  link: "/algorithm/动态规划/爬楼梯.md",
                },
                {
                  text: "使用最小花费爬楼梯",
                  link: "/algorithm/动态规划/使用最小花费爬楼梯.md",
                },
                {
                  text: "杨辉三角",
                  link: "/algorithm/动态规划/杨辉三角.md",
                },
                {
                  text: "完全平方数",
                  link: "/algorithm/动态规划/完全平方数.md",
                },
                {
                  text: "打家劫舍",
                  link: "/algorithm/动态规划/打家劫舍.md",
                },
                {
                  text: "打家劫舍2",
                  link: "/algorithm/动态规划/打家劫舍2.md",
                },
                {
                  text: "最大子数组和",
                  link: "/algorithm/动态规划/最大子数组和.md",
                },
                {
                  text: "乘积最大数组",
                  link: "/algorithm/动态规划/乘积最大数组.md",
                },
                {
                  text: "最小路径和",
                  link: "/algorithm/动态规划/最小路径和.md",
                },
                {
                  text: "不同路径",
                  link: "/algorithm/动态规划/不同路径.md",
                },
                {
                  text: "不同路径2",
                  link: "/algorithm/动态规划/不同路径2.md",
                },
                {
                  text: "最长递增子序列",
                  link: "/algorithm/动态规划/最长递增子序列.md",
                },
                {
                  text: "最长回文子串",
                  link: "/algorithm/动态规划/最长回文子串.md",
                },
                {
                  text: "最长重复子串",
                  link: "/algorithm/动态规划/最长重复子串.md",
                },
                {
                  text: "最长公共子序列",
                  link: "/algorithm/动态规划/最长公共子序列.md",
                },
                {
                  text: "最长回文子序列",
                  link: "/algorithm/动态规划/最长回文子序列.md",
                },
                {
                  text: "零钱兑换",
                  link: "/algorithm/动态规划/零钱兑换.md",
                },
                {
                  text: "零钱兑换2",
                  link: "/algorithm/动态规划/零钱兑换2.md",
                },
                {
                  text: "买卖股票",
                  link: "/algorithm/动态规划/买卖股票.md",
                },
                {
                  text: "买卖股票2",
                  link: "/algorithm/动态规划/买卖股票2.md",
                },
                {
                  text: "分割等和子集",
                  link: "/algorithm/动态规划/分割等和子集.md",
                },
                {
                  text: "单词拆分",
                  link: "/algorithm/动态规划/单词拆分.md",
                },
              ],
            },
          ],
          link: "/algorithm/README.md",
        },
      ],
      "/js": [
        {
          text: "js常见的手写",
          children: [
            {
              text: "其他",
              link: "/js/手写/其他/README.md",
              children: [
                {
                  text: "发布订阅",
                  link: "/js/手写/其他/发布订阅.md",
                },
                {
                  text: "JsBridge",
                  link: "/js/手写/其他/jsbridge.md",
                },
                {
                  text: "LRU缓存",
                  link: "/js/手写/其他/lru.md",
                },
                {
                  text: "axios拦截器",
                  link: "/js/手写/其他/axios.md",
                },
                {
                  text: "list2tree",
                  link: "/js/手写/其他/list2tree.md",
                },
              ],
            },
            {
              text: "数组",
              children: [
                {
                  text: "数组拍平",
                  link: "/js/手写/数组/拍平.md",
                },
              ],
            },
            {
              text: "函数",
              children: [
                {
                  text: "防抖",
                  link: "/js/手写/函数/防抖.md",
                },
                {
                  text: "节流",
                  link: "/js/手写/函数/节流.md",
                },
                {
                  text: "apply",
                  link: "/js/手写/函数/apply.md",
                },
                {
                  text: "call",
                  link: "/js/手写/函数/call.md",
                },
                {
                  text: "bind",
                  link: "/js/手写/函数/bind.md",
                },
                {
                  text: "new",
                  link: "/js/手写/函数/new.md",
                },
              ],
            },
          ],
        },
      ],
    },
  }),

  // plugins: [
  //   blogPlugin({
  //     // Only files under posts are articles
  //     filter: ({ filePathRelative }) =>
  //       filePathRelative ? filePathRelative.startsWith("posts/") : false,

  //     // Getting article info
  //     getInfo: ({ frontmatter, title, data }) => ({
  //       title,
  //       author: frontmatter.author || "",
  //       date: frontmatter.date || null,
  //       category: frontmatter.category || [],
  //       tag: frontmatter.tag || [],
  //       excerpt:
  //         // Support manually set excerpt through frontmatter
  //         typeof frontmatter.excerpt === "string"
  //           ? frontmatter.excerpt
  //           : data?.excerpt || "",
  //     }),

  //     // Generate excerpt for all pages excerpt those users choose to disable
  //     excerptFilter: ({ frontmatter }) =>
  //       !frontmatter.home &&
  //       frontmatter.excerpt !== false &&
  //       typeof frontmatter.excerpt !== "string",

  //     category: [
  //       {
  //         key: "category",
  //         getter: (page) => page.frontmatter.category || [],
  //         layout: "Category",
  //         itemLayout: "Category",
  //         frontmatter: () => ({
  //           title: "Categories",
  //           sidebar: false,
  //         }),
  //         itemFrontmatter: (name) => ({
  //           title: `Category ${name}`,
  //           sidebar: false,
  //         }),
  //       },
  //       {
  //         key: "tag",
  //         getter: (page) => page.frontmatter.tag || [],
  //         layout: "Tag",
  //         itemLayout: "Tag",
  //         frontmatter: () => ({
  //           title: "Tags",
  //           sidebar: false,
  //         }),
  //         itemFrontmatter: (name) => ({
  //           title: `Tag ${name}`,
  //           sidebar: false,
  //         }),
  //       },
  //     ],

  //     type: [
  //       {
  //         key: "article",
  //         // Remove archive articles
  //         filter: (page) => !page.frontmatter.archive,
  //         layout: "Article",
  //         frontmatter: () => ({
  //           title: "Articles",
  //           sidebar: false,
  //         }),
  //         // Sort pages with time and sticky
  //         sorter: (pageA, pageB) => {
  //           if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
  //             return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

  //           if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
  //             return -1;

  //           if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

  //           if (!pageB.frontmatter.date) return 1;
  //           if (!pageA.frontmatter.date) return -1;

  //           return (
  //             new Date(pageB.frontmatter.date).getTime() -
  //             new Date(pageA.frontmatter.date).getTime()
  //           );
  //         },
  //       },
  //       {
  //         key: "timeline",
  //         // Only article with date should be added to timeline
  //         filter: (page) => page.frontmatter.date instanceof Date,
  //         // Sort pages with time
  //         sorter: (pageA, pageB) =>
  //           new Date(pageB.frontmatter.date).getTime() -
  //           new Date(pageA.frontmatter.date).getTime(),
  //         layout: "Timeline",
  //         frontmatter: () => ({
  //           title: "Timeline",
  //           sidebar: false,
  //         }),
  //       },
  //     ],
  //     hotReload: true,
  //   }),
  // ],

  bundler: viteBundler(),
});
