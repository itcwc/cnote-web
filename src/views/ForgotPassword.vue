<template>
  <div class="container">
    <div class="card">
      <h2>{{ $t("forgot_password_view.title") }}</h2>
      <p>{{ $t("forgot_password_view.tips") }}</p>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label>{{ $t("forgot_password_view.email") }}</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">{{ $t("forgot_password_view.submit") }}</button>
      </form>
      <p class="login-prompt">
        {{ $t("forgot_password_view.login1") }} <router-link to="/login">{{ $t("forgot_password_view.login2")
          }}</router-link>
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
  min-height: 82vh;
  background-color: #f0f3f5;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0 0 0;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 500px;
}

.input-group {
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
}

label {
  width: 120px;
  text-align: left;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}

.login-prompt {
  margin-top: 10px;
}

.login-prompt a {
  color: #007bff;
  text-decoration: none;
}

.login-prompt a:hover {
  text-decoration: underline;
}
</style>