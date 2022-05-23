<template>
  <!-- Kakao Map start -->
  <div>
    <div id="map" ref="map" class="mb-3"></div>
    <!-- style="width: 100%; height: 600px; margin: auto" -->
  </div>
  <!-- Kakao Map end -->
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
const houseStore = "houseStore";

export default {
  // props: ["options"],
  data() {
    return {
      map: null,
      markers: [],
    };
  },
  created() {
    this.CLEAR_BOUNDS();

    this.RESET_POSITIONS();
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
  computed: {
    ...mapState(houseStore, [
      "sidos",
      "guguns",
      "dongs",
      "house",
      "houses",
      "positions",
      "bounds",
      "categoryList",
    ]),
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
        this.makeLatLng(positions);
      }
    },
    bounds: function () {
      this.displayMarker();
    },
    house: function () {
      console.log("house의 변경 감지, getCategory 시작");
      // 여기서 카테고리 검색 작업을 시작
      this.getCategory(this.house.lat, this.house.lng);
    },
  },
  methods: {
    ...mapMutations(houseStore, [
      "SET_POSITIONS",
      "RESET_POSITIONS",
      "SET_BOUNDS",
      "CLEAR_BOUNDS",
      "SET_CATEGORYLIST_SPECITIC",
      "CLEAR_CATEGORYLIST_SPECITIC",
      "SET_CATEGORYSTATUS",
      "CLEAR_CATEGORYSTATUS",
    ]),
    ...mapActions(houseStore, ["setMarkers"]),
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.2429362, 131.8624647, 16),
        level: 5,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      console.log("this.map");
      console.log(this.map);
      // this.SET_MAP(new kakao.maps.Map(container, options));
    },
    getCategory(centerLat, centerLng) {
      // 중심좌표는 37.5861486417138, 126.966930414705
      console.log("getCategory 들어옴");
      console.log("this.map");
      console.log(this.map);
      let ps = new kakao.maps.services.Places(this.map);
      console.log("ps 생성");
      console.log(ps);
      // let tempCategory = {};

      for (let currentCategory in this.categoryList) {
        console.log(currentCategory + "코드 검색 시작");
        console.log("중심좌표는 " + centerLat + ", " + centerLng);
        // ps.categorySearch(currentCategory, this.placesSearchCB,option);
        ps.categorySearch(
          currentCategory,
          (data, status) => {
            console.log("콜백함수 placeSearchCB 들어옴");
            if (status === kakao.maps.services.Status.OK) {
              console.log(status);
              console.log(data);
              console.log(currentCategory);
              console.log(this.categoryList[currentCategory]);
              this.SET_CATEGORYLIST_SPECITIC(data);
              if (data[0].category_group_code == "CE7") {
                this.SET_CATEGORYSTATUS(true);
              }
              // tempCategory[currentCategory] =
              //   this.categoryList[currentCategory];
              // this.categoryList.{{data[0].category_croup_code}}
              // displayPlaces(data);
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
              // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
            } else if (status === kakao.maps.services.Status.ERROR) {
              // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
            }
          },
          {
            location: new kakao.maps.LatLng(centerLat, centerLng),
            // x: centerLat,
            // y: centerLng,
            radius: 500,
            sort: kakao.maps.services.SortBy.distance,
          }
        );
      }
      console.log("모든 카테고리값 다 넣음");
      console.log(this.categoryList);
    },
    // placesSearchCB(data, status) {
    //   console.log("콜백함수 placeSearchCB 들어옴");
    //   if (status === kakao.maps.services.Status.OK) {
    //     console.log(status);
    //     console.log(data);
    //     this.categoryList.{{data[0].category_croup_code}}
    //     // displayPlaces(data);
    //   } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    //     // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
    //   } else if (status === kakao.maps.services.Status.ERROR) {
    //     // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
    //   }
    // },

    makeLatLng(markerPositions) {
      // 마커의 위치들을 포지션 배열 안에 넣어준다.
      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );
      // [qa, qa, qa]
      // qa {La: 126.989525786594, Ma: 37.5951865180577}
      console.log("makeLatLng에서 만들어진 positions");
      console.log(positions);
      // 마커의 위치들을 포지션 배열 안에 넣어준다.
      this.SET_POSITIONS(positions);
      console.log("SET_MARKERS결과  positions");
      console.log(positions);

      // console.log("this.markers");
      // console.log(this.markers);
      // this.markers = positions.map(
      //   (position) =>
      //     new kakao.maps.Marker({
      //       map: this.map,
      //       position,
      //     })
      // );
      // 가운데 위치 찾기
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );
      this.SET_BOUNDS(bounds);
      // this.map.setBounds(bounds);
    },
    displayMarker() {
      // 일단 맵에 있는 마커들을 다 지워준다.
      this.removeMarkers();
      // 넣었던 마커들의 개수가 하나라도 있다면
      // 액션에 넣어준다?
      if (this.positions.length > 0) {
        // this.setMarkers(positions);
        console.log("스토어의 마커스 안에 positions를 넣어준다.");
        this.markers = this.positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );
        this.map.setBounds(this.bounds);
      }
    },
    removeMarkers() {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
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
