<template>
  <div>
      <KakaoMap></KakaoMap>
      <div v-show="this.$store.state.isShow">
        <LeftIndex></LeftIndex>
      </div>
      <div v-show="!this.$store.state.isShow">
       <LeftDetail></LeftDetail>
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
     
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>