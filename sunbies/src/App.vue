<template>
  <div id="app">
    <topside-navbar-vue></topside-navbar-vue>
    <!-- <left-side-bar-vue></left-side-bar-vue>
     -->
    <!-- <nav-sidebarvue></nav-sidebarvue> -->
    <router-view />
  </div>
</template>
<script>
import TopsideNavbarVue from "@/components/template/TopsideNavbar.vue";
// import LeftSideBarVue from "@/components/Template/LeftSideBar.vue";
// import NavSidebarvue from "@/components/template/NavSidebar.vue";
export default {
  name: "HomeView",
  components: {
    TopsideNavbarVue,
    // LeftSideBarVue,
    // NavSidebarvue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
