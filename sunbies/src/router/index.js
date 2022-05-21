import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/login",
    component: () => import("@/views/UserView.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/user/UserLogin.vue"),
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("@/components/user/UserSignup.vue"),
      },
      {
        path: "userinfo",
        name: "userinfo",
        component: () => import("@/components/user/UserInfo.vue"),
      },
      {
        path: "userPasswordCheck",
        name: "userPasswordCheck",
        component: () => import("@/components/user/UserPasswordCheck.vue"),
      },
      {
        path: "findpassword",
        name: "findpassword",
        component: () => import("@/components/user/UserFindPassword.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
