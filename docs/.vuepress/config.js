const DemoContainer = require('./plugin/demo-container/index.js');

module.exports = {
  base: '/vue-components/',
  plugins: [DemoContainer, '@vuepress/medium-zoom'],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '没什么用的 vue 组件',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Useless Vue Vomponents',
    }
  },
  themeConfig: {
    locales: {
      '/': {
        lang: 'zh-CN',
        selectText: '选择语言',
        label: '简体中文',
        description: 'Vue 组件',
        nav: [
          { text: '指南', link: '/guide/', ariaLabel: '指南' },
          { text: '组件', link: '/component/', ariaLabel: '组件' },
        ],
        sidebar: {
          '/component/': [
            {
              title: '开发指南',
              collapsable: false,
              sidebarDepth: 1,
              children: [
                'quickstart',
              ]
            },
            {
              title: '组件',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                'icon',
                'tabs',
                'calendar',
                'scroll',
                'time',
              ]
            },
          ]
        },
        "demo-block": {
          "hide-text": "隐藏代码",
          "show-text": "显示代码",
          "copy-text": "复制代码",
          "copy-success": "复制成功"
        },
      },
      '/en/': {
        lang: 'en-US',
        selectText: 'Languages',
        label: 'English',
        description: 'vue componets',
        nav: [
          { text: 'Guide', link: '/en/guide/', ariaLabel: 'Guide' },
          { text: 'Component', link: '/en/component/icon', ariaLabel: 'Component' },
        ],
        sidebar: {
          '/en/component/': [
            {
              title: 'Guid',
              collapsable: false,
              sidebarDepth: 1,
              children: [
                'quickstart',
              ]
            },
            {
              title: 'Components',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                'icon',
                'tabs',
                'calendar',
                'scroll',
                'time',
              ]
            },
          ],
        },
        "demo-block": {
          "hide-text": "Hide",
          "show-text": "Expand",
          "copy-text": "Copy",
          "copy-success": "Successful"
        },
      }
    }
  },
}