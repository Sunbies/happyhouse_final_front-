<template>
  <b-container>
    <b-row id="deal-sel">
      <!-- 왼쪽 -->
      <b-col class="dealCont-header">
        <h3>거래정보</h3>
        <div id="dealCont-list" style="height: 550px; overflow: scroll">
          <!-- 여기에 아파트 정보 뿌리기 -->
          <!-- 이거를 클릭 가능한 이쁜애들로 만들어보자 -->
          <!-- 버튼으로 만들어볼까? -->
          <b-button
            v-for="(house, idx) in houses"
            :key="idx"
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
        <!-- 상권정보 뿌리기 -->
        <div v-if="categoryStatus == true" id="상권정보">
          <b-button
            id="cafeDisplay"
            @click.prevent="firstCategoryMarker(category)"
            v-for="(category, idx) in categoryList"
            :key="idx"
            style="maxwid"
          >
            <b-card
              style="
                background-color: #7f7f7f;
                outline-style: solid;
                outline-color: white;
                outline-width: 1px;
                width: 7em;
              "
            >
              <b-card-img
                v-bind:id="idx"
                :src="require(`@/assets/${idx}.png`)"
                alt="cafe"
                top
                style="
                  max-width: 5em;
                  background-color: #ffffff;
                  border-radius: 15px;
                "
              ></b-card-img>
              <b-card-text style="color: white; padding-top: 20px">
                {{ category.length }}
              </b-card-text>
            </b-card>
          </b-button>
        </div>
      </b-col>
      <!-- 여기에 디테일 뷰 보여야함 -->
      <b-col cols="7">
        <h3>거래 상세 정보</h3>
        <div>
          <!-- 카드로 해야한다. -->
          <b-card v-if="house" tag="article" style="height: 100%" class="mb-2">
            <b-aspect
              aspect="16:9"
              class="house-img"
              :style="`background-image: url(http://localhost/image/kakao/${makeSearchWord(
                house
              )});`"
            ></b-aspect>
            <b-card-text>
              <h4>아파트 상세정보</h4>

              <div class="text-right">
                <b-button
                  @click.prevent="handleUserFavorite(house)"
                  size="lg"
                  variant="transparent"
                >
                  <b-icon v-if="userHousePosition" icon="star-fill" />
                  <b-icon v-else icon="star" />
                  {{ houseFavoriteCount }}
                </b-button>
              </div>

              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >아파트 이름 : {{ house.apartmentName }}
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >준공년도 : {{ house.buildYear }}년
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >주소 :
                    {{
                      "주소: " +
                      house.sidoName +
                      " " +
                      house.gugunName +
                      " " +
                      house.dong +
                      " " +
                      house.jibun
                    }}<br />
                    ({{
                      house.sidoName +
                      " " +
                      house.gugunName +
                      " " +
                      house.roadName
                    }})
                  </b-alert>
                </b-col>
              </b-row>
              <h4>거래정보</h4>

              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >거래번호 : {{ house.no }}
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >층수 : {{ house.floor }}층</b-alert
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >면적 : {{ house.area }}㎡</b-alert
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="dark"
                    >거래일시 :
                    {{
                      house.dealYear +
                      "년 " +
                      house.dealMonth +
                      "월 " +
                      house.dealDay +
                      "일"
                    }}</b-alert
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert show variant="secondary"
                    >거래금액 : {{ house.dealAmount }}원</b-alert
                  >
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import DealPageNav from "@/components/deal/DealPageNav.vue";
import { insertFavorite, deleteFavorite } from "@/api/favorite.js";
import makeSearchWord from "@/util/makeSearchWord.js";

const houseStore = "houseStore";

export default {
  data() {
    return {
      currCategoy: "",
      houseInfo: null,
    };
  },
  created() {
    if (this.fromFavorite) {
      this.SET_FROM_FAVORITE(false);
      // this.CLEAR_DETAIL_HOUSE();
      // this.CLEAR_HOUSE_LIST();
      this.CLEAR_CATEGORYLIST_SPECITIC();
      this.CLEAR_CATEGORYSTATUS();
      this.detailHouse(this.favoriteHouse);
      if (!this.userId) return;
      this.getHouseFavorite({
        house: this.favoriteHouse,
        id: this.userId,
      });
      return;
    }

    this.CLEAR_DETAIL_HOUSE();
    this.CLEAR_HOUSE_LIST();
    this.CLEAR_CATEGORYLIST_SPECITIC();
    this.CLEAR_CATEGORYSTATUS();
  },
  components: {
    DealPageNav,
  },
  computed: {
    ...mapState(houseStore, [
      "sidos",
      "guguns",
      "dongs",
      "houses",
      "house",
      "categoryList",
      "categoryStatus",
      "favoriteHouse",
      "fromFavorite",
      "userHousePosition",
      "houseFavoriteCount",
    ]),
    ...mapGetters(houseStore, ["currentPageNo"]),
    ...mapGetters("memberStore", ["userId"]),
  },
  watch: {
    houses() {
      console.log("watch가 houses의 변경을 감지~~");
      console.log(this.houses);
    },
    houseInfo() {
      console.log("houseInfo 변경됨");
      // 하우스 인포가 보이는 변수니까
      // 이때 근처 정보들을 다 저장해야한다.
      this.searchPlaces();
      // this.getNearbyPlaceInfo();
    },
    categoryStatus() {
      // alert("categoryStatus = " + this.categoryStatus);
      if (this.categoryStatus == true) {
        this.curentCategoryList = this.categoryList;
      }
    },
  },
  methods: {
    makeSearchWord,
    ...mapActions("houseStore", ["detailHouse", "getHouseFavorite"]),
    ...mapMutations(houseStore, [
      "CLEAR_HOUSE_LIST",
      "SET_DETAIL_HOUSE",
      "CLEAR_DETAIL_HOUSE",
      "CLEAR_CATEGORYLIST_SPECITIC",
      "CLEAR_CATEGORYSTATUS",
      "CLEAR_PAGE_NAV",
      "SET_CATEGORYCODE",
      "SET_FROM_FAVORITE",
    ]),
    firstCategoryMarker(selectedCategory) {
      if (selectedCategory.length == 0) {
        alert("반경 500m안에 해당 상권은 없습니다.");
      } else {
        // 상권이 있는걸 확인했으니
        // 마커를 넣어줘야한다.
        this.SET_CATEGORYCODE(selectedCategory[0].category_group_code);
        // alert(selectedCategory);
      }
    },

    setHouse(house) {
      this.SET_DETAIL_HOUSE(house);
      this.getHouseFavorite({
        house: house,
        id: this.userId,
      });
    },
    colorChange(flag) {
      this.isColor = flag;
    },

    handleUserFavorite(house) {
      if (this.userId === "") {
        alert("먼저 로그인하세요.");
        return;
      }
      if (this.userHousePosition) {
        deleteFavorite({
          id: this.userId,
          aptCode: house.aptCode,
        })
          .then((res) => {
            if (res.data.message === "success") {
              this.getHouseFavorite({
                house: house,
                id: this.userId,
              });
            } else {
              console.log(res);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        insertFavorite({
          id: this.userId,
          aptCode: house.aptCode,
        })
          .then((res) => {
            if (res.data.message === "success") {
              this.getHouseFavorite({
                house: house,
                id: this.userId,
              });
            } else {
              console.log(res);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
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

.house-img {
  width: 100%;
  background-size: cover;
  background-position: center;
}
</style>
