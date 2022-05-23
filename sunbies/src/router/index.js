import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  // user관련
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
  // 실거래가 조회 관련
  {
    path: "/deal",
    name: "deal",
    redirect: "/deal/searchDeal",
    component: () => import("@/views/DealView.vue"),
    children: [
      // 실거래가 조회
      {
        path: "searchDeal",
        name: "searchDeal",
        component: () => import("@/components/deal/DealPage.vue"),
      },
      // 즐겨찾기
      {
        path: "FavoriteApt",
        name: "FavoriteApt",
        component: () => import("@/components/deal/FavoriteApt.vue"),
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
