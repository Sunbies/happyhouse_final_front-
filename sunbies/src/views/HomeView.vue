<template>
  <div>
    <home-jumbotron-vue />
    <b-container fluid class="pt-5 bg-light">
      <b-container class="mt-3 pt-3">
        <deal-display-vue />
        <community-display-vue />
      </b-container>
    </b-container>
  </div>
</template>

<script>
import HomeJumbotronVue from "@/components/home/HomeJumbotron.vue";
import DealDisplayVue from "@/components/home/DealDisplay.vue";
import CommunityDisplayVue from "@/components/home/CommunityDisplay.vue";
export default {
  name: "HomeView",
  components: {
    HomeJumbotronVue,
    DealDisplayVue,
    CommunityDisplayVue,
  },
};
</script>
