<template>
  <div style="background-color: red">
    <h3 class="underline-steelblue">
      <b-icon icon="house-door-fill" variant="black"></b-icon> 실거래가 정보찾기
    </h3>
    <!-- 여기에 검색란 만들어야함 -->
    <!-- <b-row class="mt-4 mb-4 text-center"> -->
    <b-row align-h="center">
      <!-- <b-col class="sm-3"> -->
      <b-col cols="3">
        <b-form-select
          v-model="sidoCode"
          :options="sidos"
          @change="gugunList"
        ></b-form-select>
      </b-col>
      <b-col cols="3">
        <!-- <b-col class="sm-3"> -->
        <b-form-select
          v-model="gugunCode"
          :options="guguns"
          @change="dongList"
        ></b-form-select>
      </b-col>
      <b-col cols="3">
        <!-- <b-col class="sm-3"> -->
        <b-form-select
          v-model="dongCode"
          :options="dongs"
          @change="searchApt"
        ></b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
    };
  },
  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_DONG_LIST();
    this.getSido();
  },
  methods: {
    ...mapActions(houseStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
    ]),
    ...mapMutations(houseStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_HOUSE_LIST",
      "CLEAR_DETAIL_HOUSE",
      "CLEAR_DETAIL_HOUSE",
    ]),
    gugunList() {
      console.log("구군리스트 실행");
      console.log("- 시도코드는 " + this.sidoCode);
      console.log("- 구군코드는 " + this.gugunCode);
      console.log("- 동코드는 " + this.dongCode);
      this.CLEAR_GUGUN_LIST();
      console.log("- 구군리스트 초기화");
      this.CLEAR_DONG_LIST();
      console.log("- 동리스트 초기화");
      this.gugunCode = null;
      console.log("- 구군코드 초기화");
      this.dongCode = null;
      console.log("- 동코드 초기화");
      if (this.sidoCode) {
        console.log("- 구군리스트 생성");
        this.getGugun(this.sidoCode);
      }
      console.log("구군리스트 완료");
    },
    dongList() {
      console.log("동리스트 실행");
      console.log("- 시도코드는 " + this.sidoCode);
      console.log("- 구군코드는 " + this.gugunCode);
      console.log("- 동코드는 " + this.dongCode);
      this.CLEAR_DONG_LIST();
      console.log("- 동리스트 초기화");
      this.dongCode = null;
      console.log("- 동코드 초기화");
      if (this.gugunCode) {
        console.log("- 동리스트 생성");
        this.getDong(this.gugunCode);
      }
      console.log("동리스트 완료");
    },
    searchApt() {
      console.log("아파트검색 실행");
      console.log("- 시도코드는 " + this.sidoCode);
      console.log("- 구군코드는 " + this.gugunCode);
      console.log("- 동코드는 " + this.dongCode);
      if (this.dongCode) this.getHouseList(this.dongCode);
    },
  },
};
</script>

<style></style>
