<template>
  <div class="pb-5">
    <b-container class="pb-3">
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
          @click.prevent="mvDealPage(deal)"
          style="cursor: pointer"
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
    ...mapMutations("houseStore", ["SET_FAVORITE_HOUSE", "SET_FROM_FAVORITE"]),
    ...mapActions("homeStore", ["actGetLatestDeals"]),
    mvDealPage(house) {
      this.SET_FAVORITE_HOUSE(house);
      this.SET_FROM_FAVORITE(true);
      this.$router.push({
        name: "searchDeal",
      });
    },
  },
  filters: {
    address(deal) {
      return deal.sidoName + deal.gugunName + deal.dong + deal.jibun;
    },
  },
  created() {
    this.actGetLatestDeals();
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
