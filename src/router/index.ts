import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Editor from "../views/Editor.vue";
import Sync from "../views/Sync.vue";
import CnHome from "../views/CnHome.vue";
import Register from "../views/Register.vue";
import ForgotPassword from '../views/ForgotPassword.vue';



// 扩展 Vue Router 的 RouteMeta 接口
declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home - cnote" }
  },
  {
    path: "/editor",
    name: "Editor",
    component: Editor,
    meta: { title: "Editor - Cnote" }
  },
  {
    path: "/sync",
    name: "Sync",
    component: Sync,
    meta: { title: "Sync - Cnote" }
  },
  {
    path: "/zh-CN",
    name: "CnHome",
    component: CnHome,
    meta: { title: "CNHome - Cnote" }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login - Cnote" }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: "Register - Cnote" }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: { title: "ForgotPassword - Cnote" }
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 设置路由守卫动态更新网页标题
router.afterEach((to) => {
  document.title = to.meta.title || 'Cnote';
});

export default router;
