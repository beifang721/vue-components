const DemoContainer = require('./plugin/demo-container/index.js');

module.exports = {
  base: '/vue-components/',
  plugins: [DemoContainer],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    }
  },
  themeConfig: {
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: 'VuePress',
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        description: 'Vue 驱动的静态网站生成器',
        nav: [
          { text: '指南', link: '/', ariaLabel: '指南' },
          { text: '组件', link: '/component/', ariaLabel: '组件' },
        ],
        sidebar: {
          '/component/': [
            'quickstart',
            'tabs',
          ],
        },
        "demo-block": {
          "hide-text": "隐藏代码",
          "show-text": "显示代码",
          "copy-text": "复制代码",
          "copy-success": "复制成功"
        },
      },
      '/en/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: 'VuePress',
        selectText: 'Languages',
        label: 'English',
        description: 'Vue-powered Static Site Generator',
        nav: [
          { text: 'Guide', link: '/en/', ariaLabel: 'Guide' },
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