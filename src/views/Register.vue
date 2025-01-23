<template>
  <div class="container">
    <div class="card">
      <h1>{{ $t("register_view.register") }}</h1>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label>{{ $t("register_view.email") }}</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label>{{ $t("register_view.password") }}</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="input-group">
          <label>{{ $t("register_view.confirm_password") }}</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">{{ $t("register_view.register") }}</button>
      </form>
      <p class="login-prompt">
        {{ $t("register_view.login1") }} <router-link to="/login">{{ $t("register_view.login2") }}</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log(`Registering with ${this.email} and ${this.password}`);
      this.$router.push('/login'); // 注册后跳转到登录页面
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 82vh; */
  height: 93%;
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