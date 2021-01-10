<template>
  <div>
    <h1 class="title">🐒没什么用的 vue 组件</h1>
    <p class="desc">一些我自己对 vue2.0 组件封装的一些理解</p>
    <div class="logo-box">
      <h1 class="logo">< <span class="blink">_</span> /></h1>
    </div>
    <div class="card-box">
      <div class="card">
        <img src="https://element.eleme.cn/2.14/static/guide.0a8462c.png" />
        <h3>指南</h3>
        <p>如何查看和获取相关组件。</p>
        <router-link tag="a" to="/guide/">查看详情</router-link>
      </div>
      <div class="card">
        <img src="https://element.eleme.cn/2.14/static/component.bd3411b.png" />
        <h3>组件</h3>
        <p>使用组件 Demo 快速体验交互细节。</p>
        <router-link tag="a" to="/component/icon">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 34px;
  margin: 0;
  line-height: 48px;
  color: #555;
}

.desc {
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  color: #888;
  margin: 10px 0 5px;
}

.logo-box {
  font-family: "Droid Sans";
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  color: #b9b9b9;
  font-size: 6em;
  line-height: 0.8;
  margin: 1rem 0;
}

.blink {
  color: #d88;
  font-size: 1.5em;
  animation: blink-anim 1s ease 0s infinite alternate;
}

@keyframes blink-anim {
  from { opacity: 1; }
  to { opacity: 0; }
}

.card-box {
  display: flex;
  margin-top: 70px;
  justify-content: center;
}

.card {
  margin: 0 10px;
  height: 430px;
  width: 100%;
  background: #fff;
  border: 1px solid #eaeefb;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  transition: all .3s ease-in-out;
  bottom: 0;
}

.card:hover {
  bottom: 6px;
  box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
}

.card img {
  margin: 66px auto 60px;
  width: 160px;
  height: 120px;
}

.card h3 {
  margin: 0;
  font-size: 18px;
  color: #1f2f3d;
  font-weight: 400;
}

.card p {
  font-size: 14px;
  color: #99a9bf;
  padding: 0 25px;
  line-height: 20px;
}

.card a {
  height: 53px;
  line-height: 52px;
  font-size: 14px;
  color: #409eff;
  text-align: center;
  border: 0;
  border-top: 1px solid #eaeefb;
  padding: 0;
  cursor: pointer;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  transition: all .3s;
  text-decoration: none;
  display: block;
}

.card a:hover {
  color: #fff;
  background: #409eff;
}

@media (max-width: 719px) {
  .card-box {
    display: block;
  }

  .card {
    margin: 10px 0;
  }
}
</style>