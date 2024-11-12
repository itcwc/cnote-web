<template>
  <div class="container">
    <div class="card">
      <h1>Login Page</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p class="register-prompt">
        Don't have an account?
        <router-link to="/register">Register here</router-link>
      </p>
      <p class="forgot-password">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log(`Logging in with ${this.email} and ${this.password}`);
      // 这里可以调用登录 API
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* 背景颜色 */
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
}

.card {
  background-color: white; /* 卡片背景颜色 */
  padding: 20px; /* 内边距 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  text-align: center; /* 文本居中 */
  width: 500px; /* 设置卡片宽度 */
}

.input-group {
  display: flex; /* 使用 Flexbox */
  align-items: center; /* 垂直居中 */
  margin: 20px 0; /* 输入框上下间距 */
  width: 100%; /* 确保输入框占满宽度 */
}

label {
  width: 120px; /* 标签宽度 */
  text-align: left; /* 标签左对齐 */
}

input {
  padding: 10px; /* 内边距 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 4px; /* 圆角 */
  width: 100%; /* 宽度占满 */
  box-sizing: border-box; /* 包含边框和内边距 */
}

button {
  background-color: #007bff; /* 按钮背景颜色 */
  color: white; /* 按钮文字颜色 */
  border: none; /* 去掉边框 */
  padding: 10px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  width: 100%; /* 宽度占满 */
}

button:hover {
  background-color: #0056b3; /* 悬停时背景颜色 */
}

.register-prompt {
  margin-top: 10px; /* 上间距 */
}

.register-prompt a {
  color: #007bff; /* 链接颜色 */
  text-decoration: none; /* 去掉下划线 */
}

.register-prompt a:hover {
  text-decoration: underline; /* 悬停时显示下划线 */
}

.forgot-password {
  margin-top: 5px; /* 上间距 */
}

.forgot-password a {
  color: #007bff; /* 链接颜色 */
  text-decoration: none; /* 去掉下划线 */
}

.forgot-password a:hover {
  text-decoration: underline; /* 悬停时显示下划线 */
}
</style>
