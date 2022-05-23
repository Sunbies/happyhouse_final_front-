import { sidoList, gugunList, dongList, houseList } from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    // 검색과 검색결과 관련
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    dongs: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
    // 카카오맵 관련
    positions: [],

    bounds: null,
    categoryList: {
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
    categoryStatus: false,
  },

  getters: {},

  mutations: {
    SET_SIDO_LIST: (state, sidos) => {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    CLEAR_SIDO_LIST: (state) => {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },

    SET_GUGUN_LIST: (state, guguns) => {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    CLEAR_GUGUN_LIST: (state) => {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },

    SET_DONG_LIST: (state, dongs) => {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },
    CLEAR_DONG_LIST: (state) => {
      state.dongs = [{ value: null, text: "선택하세요" }];
    },

    SET_HOUSE_LIST: (state, houses) => {
      //   console.log(houses);
      state.houses = houses;
    },
    CLEAR_HOUSE_LIST: (state) => {
      //   console.log(houses);
      state.houses = null;
    },

    SET_DETAIL_HOUSE: (state, house) => {
      state.house = house;
    },
    CLEAR_DETAIL_HOUSE: (state) => {
      state.house = null;
    },

    SET_POSITIONS: (state, newpositions) => {
      state.positions = newpositions;
    },
    RESET_POSITIONS: (state) => {
      // if (state.positions.length > 0) {
      //   state.positions.forEach((marker) => marker.setMap(null));
      // }
      state.positions = [];
    },

    SET_BOUNDS: (state, newBounds) => {
      state.bounds = newBounds;
    },
    CLEAR_BOUNDS: (state) => {
      state.bounds = null;
    },

    SET_CATEGORYLIST_SPECITIC(state, newCategoryList) {
      if (newCategoryList.length > 0) {
        state.categoryList[newCategoryList[0].category_group_code] =
          newCategoryList;
      }
    },
    CLEAR_CATEGORYLIST_SPECITIC(state) {
      state.categoryList = {
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
      };
    },

    SET_CATEGORYSTATUS(state, status) {
      state.categoryStatus = status;
    },
    CLEAR_CATEGORYSTATUS(state) {
      state.categoryStatus = false;
    },
  },

  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          // console.log(data);
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      const params = {
        sido: sidoCode,
      };
      gugunList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getDong: ({ commit }, gugunCode) => {
      const params = {
        gugun: gugunCode,
      };
      dongList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          commit("SET_DONG_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getHouseList: ({ commit }, dongCode) => {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      const params = {
        dongCode: dongCode,
      };
      houseList(
        params,
        (response) => {
          console.log(response.data.infoList);
          commit("SET_HOUSE_LIST", response.data.infoList);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailHouse: ({ commit }, house) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
  },
};

export default houseStore;
