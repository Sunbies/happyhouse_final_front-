<template>
  <div class="py-4 text-left">
    <h1 class="my-4 py-4">즐겨찾기</h1>
    <h6>항목을 클릭하면 실거래가 조회 페이지로 이동합니다.</h6>
    <div class="p-5 bg-light">
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-1"
          v-for="(house, index) in houses"
          :key="index"
          block
          style="background-color: #bcd1e5; text-align: left"
        >
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-card-body block variant="info">
              <div class="d-flex justify-content-between">
                <div id="aptInfo">
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
                      house.sidoName +
                      " " +
                      house.gugunName +
                      " " +
                      house.roadName
                    }})
                  </div>
                </div>
                <div id="buttonGroup" class="d-flex justify-content">
                  <b-button
                    v-b-toggle="'accordion-' + index"
                    variant="transparent"
                    ><b-icon-newspaper scale="2.5"></b-icon-newspaper>
                  </b-button>
                  <b-button
                    @click.prevent="mvDealPage(house)"
                    pill
                    variant="transparent"
                    ><b-icon-arrow-right-square
                      scale="2.5"
                    ></b-icon-arrow-right-square>
                  </b-button>
                  <b-button
                    @click.stop.prevent="delFavorite(house)"
                    pill
                    variant="transparent"
                    ><b-icon-x-square scale="2.5"></b-icon-x-square>
                  </b-button>
                </div></div
            ></b-card-body>
          </b-card-header>
          <b-collapse
            :id="'accordion-' + index"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <div></div>
            <b-button
              v-for="(item, idx) in news[index]"
              :key="idx"
              :href="`${item.link}`"
              style="width: 100%"
            >
              <b-card-body>
                <b-card-text>{{ item.title }}</b-card-text>
                <b-card-text>{{ item.description }}</b-card-text>
                <b-card-text>{{ item.pubDate }}</b-card-text>
              </b-card-body>
            </b-button>
          </b-collapse>
        </b-card>
      </div>
    </div>
    <!-- <div class="p-5 bg-light"> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { listFavorite, deleteFavorite } from "@/api/favorite.js";
import http from "@/util/http-common";

export default {
  name: "FavoriteApt",
  data() {
    return {
      news: [],
      tempNews: {},
      message: "hello",
    };
  },
  async created() {
    this.CLEAR_HOUSE_LIST();
    await this.refreshListFavorite();
    // console.log("103 - " + this.houses.length);
    for (let n = 0; n < this.houses.length; n++) {
      await this.getNews(this.houses[n].apartmentName);
      // console.log("109 - ");
      // console.log(this.news);
    }
    // console.dir(this.news);
  },
  watch: {},

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
    async getNews(keyword) {
      // console.log("getNews들어옴. " + keyword);
      await http.get(`/news/${keyword}`).then((response) => {
        var result = response.data.items;
        for (let n = 0; n < 10; n++) {
          let tempString = result[n].description;
          tempString = tempString.replaceAll("<b>", "");
          tempString = tempString.replaceAll("</b>", "");
          result[n].description = tempString;
        }
        this.news.push(result);
      });
    },
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
    async refreshListFavorite() {
      await listFavorite(this.userId)
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
};
</script>
