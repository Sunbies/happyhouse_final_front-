const boardStore = {
  namespaced: true,
  state: {
    BOARD_TYPE_MAP: {
      notice: 0,
      qna: 1,
      realestate: 2,
    },
    BOARD_TITLE_MAP: {
      notice: "공지사항",
      qna: "Q&A 게시판",
      realestate: "부동산 게시판",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
};

export default boardStore;
