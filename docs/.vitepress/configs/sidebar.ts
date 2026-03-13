import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Introduction',
    collapsed: false,
    items: [
      { text: 'VitePress Theme', link: '/posts/theme.md' },
    ]
  },
]
