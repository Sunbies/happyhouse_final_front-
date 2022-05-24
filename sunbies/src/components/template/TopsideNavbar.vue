<template>
  <nav
    class="navbar navbar-expand-sm navbar-light"
    style="background-color: #e0e0e0"
  >
    <!-- Brand/logo -->
<<<<<<< HEAD
    <!-- <img
      style="float: left; margin-right: 10px"
      src="@/assets/home.svg"
      alt="Happy House"
    />
    <router-link :to="{ name: 'home' }" class="navbar-brand"
      ><h2>Happy House</h2></router-link
    > -->
    <router-link :to="{ name: 'home' }" class="navbar-brand"
      ><img
        style="float: left; margin-right: 10px; height: 3em"
        src="@/assets/sunbis.png"
        alt="Happy House"
    /></router-link>
=======
    <router-link :to="{ name: 'home' }" class="navbar-brand ml-2">
      <img
        style="height: 50px; image-rendering: crisp-edges"
        src="@/assets/logo/sunbies_small_god.png"
        alt="Sunbies"
      />
    </router-link>
>>>>>>> 095a467eb625b93a6bedfb409189af4b1ebef582

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
      <!-- <a v-b-toggle.sidebar-1
        ><img
          style="margin-right: 10px; widows: 40px; height: 40px"
          src="@/assets/user.svg"
          alt="Happy House"
      /></a> -->
      <!-- <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle> -->

      <div>
        <!-- <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          right
          text="Right align"
          no-caret
        > -->
        <a class="px-2" v-b-toggle href="#sidebar-right" @click.prevent>
          <img
            style="margin-right: 10px; height: 40px"
            src="@/assets/menu.png"
            alt="Happy House"
          />

          <!-- <b-icon-justify
            stacked="true"
            scale="2"
            variant="dark"
            shift-h="-13"
            shift-v="-11"
          ></b-icon-justify>
          <b-icon-circle
            stacked="true"
            scale="3"
            variant="dark"
            shift-h="-5"
            shift-v="11"
          ></b-icon-circle> -->
        </a>
        <!-- 
          로그인만 있는거 드롭다운
            <template #button-content>
              </div>
              <img
              style="margin-right: 10px; widows: 40px; height: 40px"
              src="@/assets/user.svg"
              alt="Happy House"
            />
            <span class="sr-only">member</span>
          </template>
          <b-dropdown-item :to="{ name: 'login' }">로그인</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'signup' }">회원가입</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'findpassword' }"
            >비밀번호 찾기</b-dropdown-item
          >
        </b-dropdown> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopsideNavbar",
};
</script>

<style></style>
