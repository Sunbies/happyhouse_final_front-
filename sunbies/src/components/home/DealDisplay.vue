<template>
  <div style="background-color: yellowgreen">
    <b-container class="d-flex justify-content-start">
      <h3>실거래가 정보 조회</h3>
    </b-container>
    <b-container>
      <b-card-group deck style="background-color: blanchedalmond">
        <b-card
          v-for="card in 4"
          :key="card"
          align="left"
          title="오지고지리는아파트"
          img-src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202108/17/89dbadb1-755d-480b-96f4-9a772155aafb.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
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
