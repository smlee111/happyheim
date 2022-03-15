<template>
  <div>
    <div id="map"></div>
      <!-- title : {{this.title}}
      id : {{this.id}}
      x : {{this.x}}
      y : {{this.y}} -->
  </div>
</template>

<script>
export default {
  name: "KakaoMap",
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=bb92102a4356042a0bcd2448f9f9a27b&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.50842292582616, 127.16425480921386),
        level: 1,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);

      // 장소 검색 객체를 생성합니다
      var ps = new kakao.maps.services.Places(); 

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

      //마커 생성 및 클릭이벤트 생성
      this.$store.state.items.forEach(i => {
         // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35); 
          
          // 마커 이미지를 생성합니다    
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
          
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
              map: this.map, // 마커를 표시할 지도
              // new kakao.maps.varLng(33.450879, 126.569940)
              position: new kakao.maps.LatLng(i.x, i.y), // 마커를 표시할 위치
              title : i.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image : markerImage, // 마커 이미지 
              clickable: true
          });

          //mutations로 title 전달 
          let sendLoc = (title) =>{
            this.$store.commit('SETLOC',title)
          }

          //중앙으로 이동
          const move = () =>{
            var moveLatLng = new kakao.maps.LatLng(this.$store.state.nowLocation.x, this.$store.state.nowLocation.y);   
            this.map.panTo(moveLatLng);
          }
          
          let sendEvent = () => {
           this.sendshow();
          }
          
          //마커에 클릭이벤트 부여
          kakao.maps.event.addListener(marker, 'click', function() {
            let title = marker.getTitle();
            sendLoc(title);
            //move();
            //움직이는거 데이터 Watch로 변경
            sendEvent();
          });
          
      });
      //마커 생성 End
      
      
    },
    //initmap
    sendshow(){
      this.$store.state.isShow = false;
    }
  },
  computed: {
    LOC() {
      return this.$store.state.nowLocation; 
    }
  },
  watch: {
    LOC(newValue, oldValue) {
      //중앙으로 이동
      var moveLatLng = new kakao.maps.LatLng(this.$store.state.nowLocation.x, this.$store.state.nowLocation.y);   
      this.map.panTo(moveLatLng);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 100vh;
  background: #ccc;
  position: fixed;top: 0;left: 0;z-index: 1;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
