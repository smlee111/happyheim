<template>
  <div>
      <kakao-map></kakao-map>
      <left-info></left-info>
  </div>
</template>

<script>
import KakaoMap from '../components/KakaoMap.vue'
import LeftInfo from '../components/LeftInfo.vue'
export default {
  components: { KakaoMap, LeftInfo },

}
</script>

<style>

</style>