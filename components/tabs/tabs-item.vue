<script>
export default {
  name: 'tabs-item',
  inject: ['tabsRoot'],
  props: {
    haveClose: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChangeTab(e) {
      e.stopPropagation();
      this.tabsRoot.$emit('tab-click', this);
      this.tabsRoot.$emit('change-active-name', this.name);
    },
    handleCloseTab(e) {
      e.stopPropagation();
      this.tabsRoot.$emit('tab-remove', this);
    },
  },
  render(h) {
    const isActive = this.tabsRoot.activeName === this.name;
    let closeIcon = null;
    const activeMark = h(
      'div',
      {
        class: {
          mark: true,
          active: isActive,
        },
      },
    );
    if (this.haveClose) {
      closeIcon = h(
        'div',
        {
          class: {
            'icon-wrap': true,
          },
        },
        [
          h(
            'span',
            {
              class: {
                iconfont: true,
                'icon-close': true,
                icon: true,
              },
              on: {
                click: this.handleCloseTab,
              },
            },
          ),
        ],
      );
    }
    return h(
      'div',
      {
        class: {
          'tabs-item': true,
          'active-item': isActive,
        },
        on: {
          click: this.handleChangeTab,
        },
      },
      [
        activeMark,
        this.$slots.default,
        closeIcon,
      ],
    );
  },
};
</script>

<style scoped>
@import "./icon/iconfont.css";

.tabs-item {
  margin-left: 5px;
  padding: 0 20px;
  height: 30px;
  box-sizing: border-box;
  line-height: 30px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  background: #f5f7fa;
  transition: 0.5s all;
  border: 1px solid #dddddd;
  cursor: pointer;
}
.tabs-item:hover {
  background: #ffffff;
}
.tabs-item:first-child {
  margin-left: 0;
}
.tabs-item.active-item {
  background: #ffffff;
}
.tabs-item .icon-wrap {
  position: absolute;
  top: -1px;
  right: 2px;
  width: 14px;
  height: 14px;
}
.tabs-item .icon-wrap .icon {
  z-index: 99;
  font-size: 8px;
  position: relative;
}
.tabs-item .icon-wrap .icon:hover {
  color: #23a8f2;
}
.tabs-item .mark {
  position: absolute;
  background: #eeeeee;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translateX(-120%);
  top: 9px;
  transition: 0.75s all;
}
.tabs-item .active {
  background: #23a8f2;
}
</style>
