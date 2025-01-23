<template>
  <div class="container">
    <div class="card">
      <h1>{{ $t("login_view.title") }}</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>{{ $t("login_view.email") }}</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label>{{ $t("login_view.password") }}</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">{{ $t("login_view.login") }}</button>
      </form>
      <p class="register-prompt">
        {{ $t("login_view.register1") }}
        <router-link to="/register">{{ $t("login_view.register2") }}</router-link>
      </p>
      <p class="forgot-password">
        <router-link to="/forgot-password">{{ $t("login_view.forgot_password") }}</router-link>
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

.register-prompt {
  margin-top: 10px;
}

.register-prompt a {
  color: #007bff;
  text-decoration: none;
}

.register-prompt a:hover {
  text-decoration: underline;
}

.forgot-password {
  margin-top: 5px;
}

.forgot-password a {
  color: #007bff;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>
