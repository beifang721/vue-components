# AnimatedNumber 数字过渡动画

给数字添加过渡动画。

## 基本用法

:::demo
```vue
<template>
  <div>
    <input v-model.number="number" type="number" />
    <br />
    <v-animated-number :value="number"></v-animated-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 999,
    }
  }
}
</script>
```
:::

## 保留小数位

`to-fixed` 属性可以设置保留几位小数，`Number` 类型。

:::demo
```vue
<template>
  <div>
    <input v-model.number="number" type="number" />
    <br />
    <v-animated-number :value="number" :to-fixed="2"></v-animated-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 888.88,
    }
  }
}
</script>
```
:::