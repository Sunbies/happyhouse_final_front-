<template>
  <div class="home">
    <home-jumbotron-vue></home-jumbotron-vue>
    <div
      class="d-flex justify-content-center"
      style="background-color: goldenrod"
    >
      <div style="width: 70%">
        <deal-display-vue></deal-display-vue>
        <comunity-display-vue></comunity-display-vue>
      </div>
    </div>
  </div>
</template>

<script>
import HomeJumbotronVue from "@/components/home/HomeJumbotron.vue";
import DealDisplayVue from "@/components/home/DealDisplay.vue";
import ComunityDisplayVue from "@/components/home/ComunityDisplay.vue";
export default {
  name: "HomeView",
  components: {
    HomeJumbotronVue,
    DealDisplayVue,
    ComunityDisplayVue,
  },
};
</script>
