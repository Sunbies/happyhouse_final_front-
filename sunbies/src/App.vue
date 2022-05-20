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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
