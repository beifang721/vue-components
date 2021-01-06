const DemoContainer = require('./plugin/demo-container/index.js');

module.exports = {
  base: '/vue-components/',
  plugins: [DemoContainer],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'Vue 组件整合',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Vue Components',
    }
  },
  themeConfig: {
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
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
              title: '开发指南',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                'quickstart',
              ]
            },
            {
              title: '组件',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                'tabs',
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
          { text: 'Component', link: '/en/component/quickstart', ariaLabel: 'Component' },
        ],
        sidebar: {
          '/en/component/': [
            'quickstart',
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