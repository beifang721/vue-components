# Tabs 标签页

## tab
:::demo tabs 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```vue
<template>
  <tabs v-model="activeName">
    <tabs-item name="first">用户管理</tabs-item>
    <tabs-item
      name="second"
      :haveClose="true"
    >配置管理</tabs-item>
  </tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
    };
  },
};
</script>
```
:::

## sketch-color

:::demo tabs 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```vue
<template>
  <sketch-color v-model="color"></sketch-color>
</template>

<script>
export default {
  data() {
    return {
      color: '#fff',
    };
  },
};
</script>
```
:::

:::demo tabs 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```vue
<template>
  <div>
    <pagination
      :default-current="defaultCurrent"
      :default-page-size="defaultPageSize"
      :total="total"
      @change="onChange"
    ></pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultCurrent: 1,
      defaultPageSize: 3,
      total: 30,
    };
  },
  methods: {
    onChange(current) {
      console.log(current);
    },
  },
};
</script>
```
:::