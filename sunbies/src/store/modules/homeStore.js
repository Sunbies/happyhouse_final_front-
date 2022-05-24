import { getLatestDeals } from "@/api/home.js";

const homeStore = {
  namespaced: true,
  state: {
    latestDeals: [],
  },
  getters: {},
  mutations: {
    SET_LATEST_DEALS: (state, infoList) => {
      state.latestDeals = infoList;
    },
    CLEAR_LATEST_DEALS: (state) => {
      state.latestDeals = [];
    },
  },
  actions: {
    actGetLatestDeals: ({ commit }) => {
      getLatestDeals()
        .then((res) => {
          if (res.data.message === "success") {
            console.log(res.data.infoList[0]);
            commit("SET_LATEST_DEALS", res.data.infoList);
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};

export default homeStore;
