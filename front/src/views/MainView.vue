<template>
  <div>
      <KakaoMap></KakaoMap>
      <div class="leftWrap">
        <Index v-if="this.$store.state.isIndex"></Index>
        <Recommend v-if="this.$store.state.isRecommend"></Recommend>
        <Search v-if="this.$store.state.isSearch"></Search>
        <Detail v-if="this.$store.state.isDetail"></Detail>
      </div>
  </div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue'
import Index from '@/components/Index.vue'
import Recommend from '@/components/Recommend.vue'
import Search from '@/components/Search.vue'
import Detail from '@/components/Detail.vue'
export default {
  components: { KakaoMap, Index, Recommend, Search, Detail },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>

</style>