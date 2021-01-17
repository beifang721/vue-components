import '../../components/v-icon/iconfont.css';
import VIcon from '../../components/v-icon/icon.vue';

import VTabs from '../../components/v-tabs/tabs.vue';
import VTabPane from '../../components/v-tabs/tab-pane.vue';

import VCalendar from '../../components/v-calendar/calendar.vue';

export default ({
  Vue,
}) => {
  Vue.component('v-icon', VIcon);
  Vue.component('v-tabs', VTabs);
  Vue.component('v-tab-pane', VTabPane);
  Vue.component('v-calendar', VCalendar);
}