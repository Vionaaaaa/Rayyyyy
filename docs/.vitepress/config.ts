import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的随笔博客",
  description: "记录生活与思考的个人博客",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '随笔', link: '/posts/' },
    ],
    footer: {
      message: '记录生活，慢慢生长',
      copyright: 'Copyright © 2026 Ray',
    },
  },
})
