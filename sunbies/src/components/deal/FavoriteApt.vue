<template>
  <div class="py-4 text-left">
    <h1 class="my-4 py-4">즐겨찾기</h1>
    <div class="p-5 bg-light">
      <b-button
        v-for="house in houses"
        :key="house"
        block
        @click="setHouse(house)"
        style="background-color: grey; text-align: left"
      >
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
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { listFavorite } from "@/api/favorite.js";

export default {
  name: "FavoriteApt",
  computed: {
    ...mapState("houseStore", ["houses"]),
    ...mapGetters("memberStore", ["userId"]),
  },
  methods: {
    ...mapMutations("houseStore", ["CLEAR_HOUSE_LIST"]),
  },
  created() {
    this.CLEAR_HOUSE_LIST();
    listFavorite(this.userId)
      .then((res) => {
        if (res.data.message === "success") {
          return res.data.favoriteList;
        }
        console.log(res);
      })
      .then((fList) => {
        console.log(fList);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
