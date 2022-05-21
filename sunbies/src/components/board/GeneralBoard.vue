<template>
  <div>
    <h1 class="mt-5 pt-5">{{ boardTitle }}</h1>
    <h3 class=""></h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "GeneralBoard",
  computed: {
    ...mapState(boardStore, ["BOARD_TITLE_MAP"]),
    boardName() {
      return this.$route.params.boardname;
    },
    boardTitle() {
      return this.BOARD_TITLE_MAP[this.boardName];
    },
  },
};
</script>
