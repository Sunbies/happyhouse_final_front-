<template>
  <!-- Kakao Map start -->
  <div>
    <div id="map" ref="map" class="mb-3"></div>
    <!-- style="width: 100%; height: 600px; margin: auto" -->
  </div>
  <!-- Kakao Map end -->
</template>

<script>
import { mapState } from "vuex";
const houseStore = "houseStore";

export default {
  // props: ["options"],
  data() {
    return {
      map: null,
      markers: [],
    };
  },

  // 마운트는 건드리지않아도됨
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      /* global kakao */
      script.addEventListener("load", () => {
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      //console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },

  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.2429362, 131.8624647, 16),
        level: 5,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    displayMarker(markerPositions) {
      // 현재 화면에 뿌려진 마커가 담긴 markers의 크기가 0개이상이면
      // 화면에 뿌려졌던 마커들을 지워준다.
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      // 마커의 위치들을 포지션 배열 안에 넣어준다.
      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      // 넣었던 마커들의 개수가 하나라도 있다면
      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        // 가운데 위치 찾기
        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
  },

  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
  },
  watch: {
    houses: function () {
      // alert("아파트 리스트 생성, 개수는 " + this.houses.length + "개");
      let positions = [];
      console.log(positions);
      this.houses.forEach(function (house) {
        console.log(house.lat + " " + house.lng);
        let position = [house.lat, house.lng];
        if (
          !positions.some(function (value) {
            if (JSON.stringify(value) === JSON.stringify(position)) {
              return true;
            }
            return false;
          })
        ) {
          console.log("이 값은 positions에 없으므로 추가해준다.");
          positions.push(position);
        }
      });
      console.log("positions의 사이즈 = " + positions.length);
      if (positions.length == 0) {
        alert("해당하는 데이터가 없습니다.");
      } else {
        this.displayMarker(positions);
      }
    },
  },
};
</script>

<style scopped>
#map {
  width: 100%;
  height: 500px;
}
</style>
