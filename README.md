# vue-components

> C&amp;V TO USE🕹

## Tabs

![tabs](https://i.loli.net/2020/04/29/vxWE8pLOKGJg3Af.png)

```javascript
<template>
  <Tabs v-model="activeName">
    <TabsItem name="first">用户管理</TabsItem>
    <TabsItem
      name="second"
      :haveClose="true"
    >配置管理</TabsItem>
  </Tabs>
</template>

<script>
import Tabs from 'tabs/tabs.vue';
import TabsItem from 'tabs/tabs-item.vue';

export default {
  data() {
    return {
      activeName: 'first',
    };
  },
  components: {
    Tabs,
    TabsItem,
  },
};
</script>
```