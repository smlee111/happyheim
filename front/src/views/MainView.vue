<template>
  <div>
      <KakaoMap></KakaoMap>
      <LeftIndex></LeftIndex>
      <LeftDetail></LeftDetail>
  </div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue'
import LeftDetail from '@/components/LeftDetail.vue'
import LeftIndex from '@/components/LeftIndex.vue'
export default {
  components: { KakaoMap, LeftDetail, LeftIndex },
}
</script>

<style>

</style>