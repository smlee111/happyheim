<template>
  <div>
      <KakaoMap @detailshow="detailshow"></KakaoMap>
      <div v-show="isShow">
        <LeftIndex></LeftIndex>
      </div>
      <div v-show="!isShow">
       <LeftDetail @indexshow="indexshow"></LeftDetail>
      </div>
  </div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue'
import LeftDetail from '@/components/LeftDetail.vue'
import LeftIndex from '@/components/LeftIndex.vue'
export default {
  components: { KakaoMap, LeftDetail, LeftIndex },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    detailshow() {
      this.isShow = false;
    },
    indexshow(){
      this.isShow = true;
    }
  },
}
</script>

<style>

</style>