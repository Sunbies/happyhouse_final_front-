<template>
  <div style="background-color: yellowgreen">
    <b-container class="d-flex justify-content-start">
      <h3>커뮤니티</h3>
    </b-container>
    <b-container>
      <b-card-group deck style="background-color: blanchedalmond">
        <b-card
          v-for="card in 2"
          :key="card"
          img-src="http://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg"
          img-alt="게시물 사진"
          img-width="70"
          img-height="70"
          img-left
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-text {
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
h4 {
  font-size: 10;
}
</style>
