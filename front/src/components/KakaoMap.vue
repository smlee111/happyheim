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
  data() {
    return {
      title : '',
      id : '',
      x:'',
      y:''
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=bb92102a4356042a0bcd2448f9f9a27b";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.48445337260817, 126.9282442770891),
        level: 1,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
      
      let items = this.$store.state.items;
   
      //가게 정보 가져오기 
      //this 가져오려면 화살표 함수 써야함;;
      let getStore = (title) =>{
        items.forEach(i =>{
          if(title == i.title){
            console.log(`id:${i.id} / title:${i.title} / x,y:${i.x},${i.y}`);
            this.id = i.id;
            this.title = i.title;
            this.x = i.x;
            this.y = i.y;
            //중앙으로 이동
            var moveLatLng = new kakao.maps.LatLng(i.x, i.y);   
            this.map.panTo(moveLatLng);
          }
        })
      }

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
          //마커에 클릭이벤트 부여
          kakao.maps.event.addListener(marker, 'click', function() {
            let title = marker.getTitle();
            getStore(title);
          });
      });
      
    },
    //initmap
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: calc(100% - 375px);
  height: 100vh;
  position: fixed;top: 0;left: 375px;z-index: 998;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
