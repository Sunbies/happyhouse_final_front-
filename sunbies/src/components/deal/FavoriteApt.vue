<template>
  <div class="py-4 text-left">
    <h1 class="my-4 py-4">즐겨찾기</h1>
    <h6>항목을 클릭하면 실거래가 조회 페이지로 이동합니다.</h6>
    <div class="p-5 bg-light">
      <b-button
        v-for="(house, index) in houses"
        :key="index"
        block
        @click.prevent="mvDealPage(house)"
        style="background-color: grey; text-align: left"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5>{{ house.apartmentName }}</h5>
            <div>
              {{
                "주소: " +
                house.sidoName +
                " " +
                house.gugunName +
                " " +
                house.dong +
                " " +
                house.jibun
              }}
            </div>
            <div>
              ({{
                house.sidoName + " " + house.gugunName + " " + house.roadName
              }})
            </div>
            <!-- <div>
            {{
              "거래일: " +
              house.dealYear +
              "년 " +
              house.dealMonth +
              "월 " +
              house.dealDay +
              "일"
            }}
          </div>
          <div>
            {{ "거래금액: " + house.dealAmount + "만원" }}
          </div> -->
          </div>

          <!-- 즐겨찾기 해제 버튼 -->
          <div>
            <b-button
              @click.stop.prevent="delFavorite(house)"
              pill
              variant="transparent"
              >×</b-button
            >
          </div>
        </div>
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { listFavorite, deleteFavorite } from "@/api/favorite.js";

export default {
  name: "FavoriteApt",
  computed: {
    ...mapState("houseStore", ["houses"]),
    ...mapGetters("memberStore", ["userId"]),
  },
  methods: {
    ...mapMutations("houseStore", [
      "CLEAR_HOUSE_LIST",
      "SET_HOUSE_LIST",
      "SET_DETAIL_HOUSE",
      "SET_FAVORITE_HOUSE",
      "SET_FROM_FAVORITE",
    ]),
    mvDealPage(house) {
      this.SET_FAVORITE_HOUSE(house);
      this.SET_FROM_FAVORITE(true);
      this.$router.push({
        name: "searchDeal",
      });
    },
    delFavorite(house) {
      deleteFavorite({
        id: this.userId,
        aptCode: house.aptCode,
      })
        .then((res) => {
          if (res.data.message === "success") {
            this.refreshListFavorite();
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshListFavorite() {
      listFavorite(this.userId)
        .then((res) => {
          if (res.data.message === "success") {
            return res.data.favoriteList;
          }
          console.log(res);
        })
        .then((fList) => {
          this.SET_HOUSE_LIST(fList);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.CLEAR_HOUSE_LIST();
    this.refreshListFavorite();
  },
};
</script>
