<template>
    <div class="container">
      <div class="card">
        <h1>Forgot Password</h1>
        <p>Please enter your email address to reset your password.</p>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label>Email:</label>
            <input type="email" v-model="email" required />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
        <p class="login-prompt">
          Remembered your password? <router-link to="/login">Login here</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ForgotPassword',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log(`Reset link sent to ${this.email}`);
        // 这里可以调用发送重置链接的 API
        this.email = ''; // 清空输入框
      },
    },
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 使容器充满整个视口 */
    background-color: #f0f0f0; /* 背景颜色 */
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
  
  .login-prompt {
    margin-top: 10px; /* 上间距 */
  }
  
  .login-prompt a {
    color: #007bff; /* 链接颜色 */
    text-decoration: none; /* 去掉下划线 */
  }
  
  .login-prompt a:hover {
    text-decoration: underline; /* 悬停时显示下划线 */
  }
  </style>
  