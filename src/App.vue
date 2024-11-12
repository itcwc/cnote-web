<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/editor" class="nav-link">Online Editor</router-link>
      <router-link to="/sync" class="nav-link">Cloud Sync</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
    </nav>
    <router-view></router-view> <!-- 渲染当前路由的组件 -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* 导航条容器样式 */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 15px;
  border-radius: 8px;
  margin: 0 0px 20px 0px;
}

/* 导航链接样式 */
.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
}

/* 鼠标悬停效果 */
.nav-link:hover {
  color: #007bff;
}

/* 当前路由的链接样式 */
.nav-link.router-link-active {
  font-weight: bold;
  color: #007bff;
}
</style>
