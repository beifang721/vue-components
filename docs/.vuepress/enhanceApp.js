import '../../components/v-icon/iconfont.css';
import VIcon from '../../components/v-icon/icon.vue';

import VTabs from '../../components/v-tabs/tabs.vue';
import VTabPane from '../../components/v-tabs/tab-pane.vue';

import VScroll from '../../components/v-scroll/main';

export default ({
  Vue,
}) => {
  Vue.component('v-icon', VIcon);
  Vue.component('v-tabs', VTabs);
  Vue.component('v-tab-pane', VTabPane);
  Vue.component('v-scroll', VScroll);

  // 解决打包时不能使用浏览器内置对象问题
  import('../../components/v-calendar/calendar.vue').then(function (m) {
    Vue.component('v-calendar', m.default);
  })
}