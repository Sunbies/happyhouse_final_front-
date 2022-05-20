<template>
  <nav
    class="navbar navbar-expand-sm navbar-light"
    style="background-color: #e0e0e0"
  >
    <!-- Brand/logo -->
    <img
      style="float: left; margin-right: 10px"
      src="@/assets/home.svg"
      alt="Happy House"
    />
    <router-link :to="{ name: '/' }" class="navbar-brand"
      ><h2>Happy House</h2></router-link
    >

    <!-- Links -->
    <div
      class="collapse navbar-collapse justify-content-end"
      id="collapsibleNavbar"
    >
      <!-- <img
        style="margin-right: 10px; widows: 40px; height: 40px"
        src="@/assets/user.svg"
        alt="Happy House"
      /> -->
      <a v-b-toggle.sidebar-1
        ><img
          style="margin-right: 10px; widows: 40px; height: 40px"
          src="@/assets/user.svg"
          alt="Happy House"
      /></a>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#">Link 2</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopsideNavbar",
};
</script>

<style></style>
