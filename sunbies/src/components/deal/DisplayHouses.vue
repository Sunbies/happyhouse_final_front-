<template>
  <b-container>
    <b-row id="deal-sel">
      <b-col class="dealCont-header">
        <h3>거래정보</h3>
        <div id="dealCont-list" style="height: 550px; overflow: scroll">
          <!-- 여기에 아파트 정보 뿌리기 -->
          <!-- 이거를 클릭 가능한 이쁜애들로 만들어보자 -->
          <!-- 버튼으로 만들어볼까? -->
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
              <div>
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
              </div>
            </div>
          </b-button>
        </div>

        <!-- 페이징 컴포넌트 -->
        <div v-if="currentPageNo" class="d-flex justify-content-center">
          <deal-page-nav />
        </div>
      </b-col>
      <!-- 여기에 디테일 뷰 보여야함 -->
      <b-col cols="7">
        <h3>거래 상세 정보</h3>
        <div>
          <!-- <b-container v-if="houseInfo" class="bv-example-row">
            <b-row>
              <b-col
                ><h3>{{ houseInfo.아파트 }}</h3></b-col
              >
            </b-row>
            <b-row class="mb-2 mt-1">
              <b-col
                ><b-img
                  :src="require('@/assets/apt.jpg')"
                  fluid-grow
                  style="height: 20em"
                ></b-img
              ></b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-alert show variant="secondary"
                  >일련번호 : {{ houseInfo.no }}</b-alert
                >
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-alert show variant="primary"
                  >아파트 이름 : {{ houseInfo.apartmentName }}
                </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-alert show variant="info"
                  >법정동 : {{ houseInfo.dongCode }}
                </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-alert show variant="warning"
                  >층수 : {{ houseInfo.floor }}층</b-alert
                >
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-alert show variant="danger"
                  >거래금액 : {{ houseInfo.dealAmount }}원</b-alert
                >
              </b-col>
            </b-row>
          </b-container> -->
          <!-- 카드로 해야한다. -->
          <b-card
            v-if="houseInfo"
            img-src="https://littledeep.com/wp-content/uploads/2020/09/apartments-illustration-png-1024x853.png"
            img-alt="Image"
            img-top
            tag="article"
            style="height: 100%"
            class="mb-2"
          >
            <b-card-text>
              <h4>아파트 상세정보</h4>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >아파트 이름 : {{ houseInfo.apartmentName }}
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >준공년도 : {{ houseInfo.buildYear }}년
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >주소 :
                    {{
                      "주소: " +
                      houseInfo.sidoName +
                      " " +
                      houseInfo.gugunName +
                      " " +
                      houseInfo.dong +
                      " " +
                      houseInfo.jibun
                    }}<br />
                    ({{
                      houseInfo.sidoName +
                      " " +
                      houseInfo.gugunName +
                      " " +
                      houseInfo.roadName
                    }})
                  </b-alert>
                </b-col>
              </b-row>
              <h4>거래정보</h4>

              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >거래번호 : {{ houseInfo.no }}
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >층수 : {{ houseInfo.floor }}층</b-alert
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >면적 : {{ houseInfo.area }}㎡</b-alert
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >거래일시 :
                    {{
                      houseInfo.dealYear +
                      "년 " +
                      houseInfo.dealMonth +
                      "월 " +
                      houseInfo.dealDay +
                      "일"
                    }}</b-alert
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >거래금액 : {{ houseInfo.dealAmount }}원</b-alert
                  >
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <div style="background-color: grey; width: 100%">
        <b-card style="max-width: 7em; max-height: 15em">
          <b-card-text> 12곳 </b-card-text>
        </b-card>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import DealPageNav from "@/components/deal/DealPageNav.vue";

const houseStore = "houseStore";

export default {
  data() {
    return {
      houseInfo: null,
      categoryMarkers: {
        // 대형마트
        MT1: [],
        // 어린이집, 유치원
        PS3: [],
        // 학원
        AC5: [],
        // 은행
        BK9: [],
        // 관광명소
        AT4: [],
        // 음식점
        FD6: [],
        // 병원
        HP8: [],
        // 약국
        PM9: [],
        // 편의점
        CS2: [],
        // 학교
        SC4: [],
        // 자히철역
        SW8: [],
        // 문화시설
        CT1: [],
        // 공공기관
        PO3: [],
        // 카페
        CE7: [],
      },
    };
  },
  components: {
    DealPageNav,
  },
  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses", "house"]),
    ...mapGetters(houseStore, ["currentPageNo"]),
  },
  watch: {
    houses() {
      console.log("watch가 houses의 변경을 감지~~");
      console.log(this.houses);
    },
  },
  methods: {
    ...mapMutations(houseStore, [
      "CLEAR_HOUSE_LIST",
      "SET_DETAIL_HOUSE",
      "CLEAR_DETAIL_HOUSE",
      "CLEAR_PAGE_NAV",
    ]),
    setHouse(house) {
      this.houseInfo = house;
      //   alert(JSON.stringify(this.houseInfo));
      //   alert(JSON.stringify(house));
      // console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      //   this.detailHouse(this.house);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
  destroyed() {
    this.CLEAR_DETAIL_HOUSE();
    this.CLEAR_PAGE_NAV();
  },
};
</script>

<style scoped>
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
