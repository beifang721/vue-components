<template>
  <div class="sf-pagination">
    <sf-button
      class="btn-prev"
      @click="setPage(current - 1)"
    >&lt;</sf-button>
    <sf-pager
      :total-page="totalPage"
      :default-current="current"
      @change="onChange"
    ></sf-pager>
    <sf-button
      class="btn-next"
      @click="setPage(current + 1)"
    >></sf-button>
  </div>
</template>

<script>
export default {
  name: 'SfPagination',
  components: {
    SfButton: () => import('./button.vue'),
    SfPager: () => import('./pager.vue'),
  },
  props: {
    defaultCurrent: Number,
    defaultPageSize: Number,
    total: Number,
  },
  data() {
    return {
      current: this.defaultCurrent,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.defaultPageSize);
    },
  },
  methods: {
    setPage(page) {
      if (page < 1) return;
      if (page > this.totalPage) return;
      this.current = page;
      this.$emit('change', this.current);
    },
    onChange(current) {
      this.current = current; // 设置当前页码
      this.$emit('change', this.current); // 向Pagination组件外发射页码改变事件
    },
  },
};
</script>

<style scoped>
.sf-pagination {
  display: flex;
}
.btn-prev,
.btn-next {
  background: #eeeeee;
  border: 0;
  outline: 0;
  font-size: 13px;
  min-width: 30px;
  border-radius: 2px;
  padding: 0 4px;
  height: 28px;
  line-height: 28px;
  text-align: center;
}
</style>
