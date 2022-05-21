<template>
  <div id="app">
    <!-- <topside-navbar-vue></topside-navbar-vue> -->
    <topside-navbar-vue></topside-navbar-vue>
    <right-sidebar></right-sidebar>
    <router-view />
  </div>
</template>
<script>
import TopsideNavbarVue from "@/components/template/TopsideNavbar.vue";
import RightSidebar from "@/components/template/RightSidebar.vue";
export default {
  name: "HomeView",
  components: {
    TopsideNavbarVue,
    RightSidebar,
    // LeftSideBarVue,
    // NavSidebarvue,
  },
};
</script>

<style>
@font-face {
  font-family: "SunbiesSans";
  src: url("@/assets/fonts/noto-sans-kr-v27-latin_korean-500.woff")
    format("woff");
  font-weight: normal;
}
@font-face {
  font-family: "SunbiesSans";
  src: url("@/assets/fonts/noto-sans-kr-v27-latin_korean-900.woff")
    format("woff");
  font-weight: bold;
}
@font-face {
  font-family: "SunbiesSans";
  src: url("@/assets/fonts/roboto-v30-latin-500.woff") format("woff");
  unicode-range: U+0020-007E;
  font-weight: normal;
}
@font-face {
  font-family: "SunbiesSans";
  src: url("@/assets/fonts/roboto-v30-latin-900.woff") format("woff");
  unicode-range: U+0020-007E;
  font-weight: bold;
}

#app {
  font-family: "SunbiesSans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
