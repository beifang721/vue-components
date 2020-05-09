<template>
  <ul class="sf-pager">
    <li
      class="number"
      :class="{ active: current == 1 }"
      @click="setPage(1)"
    >1</li>
    <li
      class="more left"
      v-if="totalPage > centerSize + 2 && current >= 5"
      @click="setPage(current - jumpSize)"
    >···</li>
    <li
      class="number"
      v-for="(page, index) in centerPages"
      :class="{ active: current === page }"
      :key="index"
      @click="setPage(page)"
    >{{ page }}</li>
    <li
      class="more right"
      v-if="totalPage > centerSize + 2 && current <= totalPage - centerSize + 1"
      @click="setPage(current + jumpSize)"
    >···</li>
    <li
      class="number"
      :class="{ active: current == totalPage }"
      v-if="totalPage !== 1"
      @click="setPage(totalPage)"
    >{{ totalPage }}</li>
  </ul>
</template>

<script>
export default {
  name: 'SfPager',
  props: {
    totalPage: Number, // 总页数
    defaultCurrent: Number, // 默认当前页码
  },
  data() {
    return {
      current: this.defaultCurrent, // 当前页码
      centerSize: 5,
      jumpSize: 5,
    };
  },
  watch: {
    defaultCurrent: {
      handler(newValue) {
        this.current = newValue;
      },
    },
  },
  computed: {
    centerPages() {
    // 中间页码计算
      let centerPage = this.current;
      if (this.current > this.totalPage - 3) {
        centerPage = this.totalPage - 3;
      }
      if (this.current < 4) {
        centerPage = 4;
      }
      if (this.totalPage <= this.centerSize + 2) {
      // 总页码较小时，全部显示出来
        const centerArr = [];
        for (let i = 2; i < this.totalPage; i += 1) {
          centerArr.push(i);
        }
        return centerArr;
      }
      // 总页码较大时，只显示中间centerSize个页码
      const centerArr = [];
      for (let i = centerPage - 2; i <= centerPage + 2; i += 1) {
        centerArr.push(i);
      }
      return centerArr;
    },
  },
  methods: {
    setPage(page) {
      // 对页码进行限制，不能超出[1, totalPage]的范围
      let newPage = page;
      if (page < 1) newPage = 1;
      if (page > this.totalPage) newPage = this.totalPage;
      this.current = newPage; // 设置当前页码
      this.$emit('change', this.current); // 向外发射页码改变事件
    },
  },
};
</script>

<style scoped>
.sf-pager {
  display: flex;
  padding-left: 0;
  margin: 0;
  list-style: none;
}
.sf-pager li {
  font-size: 13px;
  min-width: 30px;
  border-radius: 2px;
  padding: 0 4px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  margin-left: 5px;
}
.sf-pager li:last-child {
  margin-right: 5px;
}
.sf-pager .number {
  background: #eeeeee;
}
.sf-pager .number.active {
  background: #3d8cfe;
}
</style>
