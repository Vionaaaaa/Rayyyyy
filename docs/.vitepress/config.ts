import { defineConfig } from 'vitepress';
import { head, nav, sidebar } from './configs';
import { fileURLToPath, URL } from 'node:url';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  // 输出目录
  outDir: '../dist',
  cacheDir: '../../node_modules/vitepress_cache',
  // 语言
  lang: 'zh-CN',
  // 标题
  title: 'VitePress',
  // 描述
  description: 'tools',
  // 顶部栏配置
  head,
  // 将从URL中删除尾随的.html
  cleanUrls: true,
  // 最后更新时间
  lastUpdated: true,
  /* markdown 配置 */
  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详情"
    }
  },

  vite: {
    server: {
      // host: "0.0.0.0",
      port: 5175,
      strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
      hmr: false,//禁用或配置 HMR 连接
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/SwitchAppearance.vue', import.meta.url),
          ),
        },
      ],
    },
  },

  themeConfig: {
    // 导航栏
    nav,
    // 侧导航栏
    sidebar,
    // 首页logo图
    logo: '/logo.png',
    // 本地搜索
    search: {
      provider: 'local'
    },

    /*
      algolia: {
        appId: '7H67QR5P0A',
        apiKey: 'deaab78bcdfe96b599497d25acc6460e',
        indexName: '',
         searchParameters: {
           facetFilters: [],
         },
      },
    */

    // 顶部栏右侧icon
    socialLinks: [{ icon: 'github', link: 'https://github.com/josliang' }],

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录'
    },

    /*  
    //  页面底部栏
    editLink: {
        pattern: 'https://github.com/josliang/josliang.github.io/tree/main/docs/:path',
        text: '在 Github 上编辑此页'
    }, 
    */

    // 上次更新
    lastUpdated: {
      text: '上次更新',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 底部栏
    footer: {
      message: 'Early Access',
      copyright: 'Copyright © 2022-present Joseph Liang'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
  },
});
