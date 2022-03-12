<template>
  <div>
      <KakaoMap></KakaoMap>
      <LeftDetail></LeftDetail>
  </div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue'
import LeftDetail from '@/components/LeftDetail.vue'
export default {
  components: { KakaoMap, LeftDetail },
}
</script>

<style>

</style>