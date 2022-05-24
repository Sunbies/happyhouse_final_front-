<template>
  <div>
    <b-container class="d-flex justify-content-start">
      <h3>실거래가 정보 조회</h3>
    </b-container>
    <b-container>
      <b-card-group deck>
        <b-card
          v-for="(deal, index) in latestDeals"
          :key="index"
          align="left"
          :title="deal.apartmentName"
          img-src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202108/17/89dbadb1-755d-480b-96f4-9a772155aafb.jpg"
          img-alt="Image"
          img-top
        >
          <div>{{ deal | address }}</div>
          <div>{{ deal.dealAmount }}만원</div>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "DealDisplay",
  computed: {
    ...mapState("homeStore", ["latestDeals"]),
  },
  methods: {
    ...mapActions("homeStore", ["actGetLatestDeals"]),
    ...mapMutations("homeStore", ["CLEAR_LATEST_DEALS"]),
  },
  filters: {
    address(deal) {
      return deal.sidoName + deal.gugunName + deal.dong + deal.jibun;
    },
  },
  created() {
    this.actGetLatestDeals();
  },
  destroyed() {
    this.CLEAR_LATEST_DEALS();
  },
};
</script>

<style scoped>
.card-text {
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
h4 {
  font-size: 10;
}
</style>
