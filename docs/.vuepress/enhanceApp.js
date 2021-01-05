import Tabs from '../../components/tabs/tabs.vue';
import TabsItem from '../../components/tabs/tabs-item.vue';
import SketchColor from '../../components/sketch-color/index.vue';

export default ({
  Vue
}) => {
  Vue.component('tabs', Tabs);
  Vue.component('tabs-item', TabsItem);
  Vue.component('sketch-color', SketchColor);
}