<template>
  <div
    class="tabs-wrap"
    :class="{ 'is-scrollable': isScroll }"
  >
    <div
      class="tabs-scroll"
      ref="scroll"
    >
      <div
        class="prev"
        v-show="isScroll"
      >
        <span
          class="iconfont icon-icon-test"
          @click.stop="handlePrev"
        ></span>
      </div>
      <div
        class="next"
        v-show="isScroll"
      >
        <span
          class="iconfont icon-icon-test1"
          @click.stop="handleNext"
        ></span>
      </div>
      <div
        class="tabs-list"
        :style="[navStyle]"
        ref="list"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      tabsRoot: this,
    };
  },
  model: {
    prop: 'activeName',
    event: 'change-active-name',
  },
  props: {
    activeName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      navOffset: 0,
      isScroll: false,
    };
  },
  computed: {
    navStyle() {
      return {
        transform: `translateX(-${this.navOffset}px)`,
      };
    },
  },
  mounted() {
    window.addEventListener('resize', this.update);
    setTimeout(this.update, 0);
    setTimeout(this.scrollToActiveTab, 40);
  },
  updated() {
    this.update();
  },
  watch: {
    activeName() {
      setTimeout(this.scrollToActiveTab, 40);
    },
  },
  methods: {
    handlePrev() {
      const containerSize = this.$refs.scroll.offsetWidth;
      const currentOffset = this.navOffset;
      if (currentOffset === 0) return;
      const newOffset = currentOffset > containerSize
        ? currentOffset - containerSize
        : 0;

      this.navOffset = newOffset;
    },
    handleNext() {
      const containerSize = this.$refs.scroll.offsetWidth;
      const listSize = this.$refs.list.offsetWidth;
      const currentOffset = this.navOffset;

      if (listSize - currentOffset <= containerSize) return;

      const newOffset = listSize - currentOffset > containerSize * 2
        ? currentOffset + containerSize
        : (listSize - containerSize);

      this.navOffset = newOffset;
    },
    update() {
      if (this.$refs.list === undefined) return;
      const containerSize = this.$refs.scroll.offsetWidth;
      const listSize = this.$refs.list.offsetWidth;

      this.isScroll = listSize > containerSize;

      if (this.isScroll === false) {
        this.navOffset = 0;
      } else {
        this.scrollToActiveTab();
      }
    },
    scrollToActiveTab() {
      const activeTab = this.$el.querySelector('.active-item');
      const { list, scroll } = this.$refs;
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = scroll.getBoundingClientRect();
      const maxOffset = list.offsetWidth - navScrollBounding.width;

      const currentOffset = this.navOffset;
      let newOffset = currentOffset;

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
      }
      if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
      }
      newOffset = Math.max(newOffset, 0);
      this.navOffset = Math.min(newOffset, maxOffset);
    },
  },
};
</script>

<style lang="less" scoped>
.tabs-wrap {
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 5px;
  .tabs-scroll {
    overflow: hidden;
    .tabs-list {
      box-sizing: border-box;
      white-space: nowrap;
      position: relative;
      transition: transform 0.3s;
      float: left;
      z-index: 2;
    }
    .prev {
      position: absolute;
      left: 0;
      top: 10px;
      &:hover {
        color: #23a8f2;
        cursor: pointer;
      }
    }
    .next {
      position: absolute;
      right: 0;
      top: 10px;
      &:hover {
        color: #23a8f2;
        cursor: pointer;
      }
    }
  }
}
.is-scrollable {
  padding: 5px 20px;
  box-sizing: border-box;
}
</style>
