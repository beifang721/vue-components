import Tabs from '../../components/tabs/tabs.vue';
import TabsItem from '../../components/tabs/tabs-item.vue';
import SketchColor from '../../components/sketch-color/index.vue';
import Pagination from '../../components/pagination/index.vue';

export default ({
  Vue
}) => {
  Vue.component('tabs', Tabs);
  Vue.component('tabs-item', TabsItem);
  Vue.component('sketch-color', SketchColor);
  Vue.component('pagination', Pagination);
}