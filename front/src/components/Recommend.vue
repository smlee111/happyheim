<template>
    <div class="left-recommend">
        <Recommend_option v-if="this.$store.state.isRecommendOption"></Recommend_option>
        <Recommend_list v-if="this.$store.state.isRecommendList"></Recommend_list>
    </div>
</template>

<script>
import Recommend_option from '@/components/Recommend_option.vue'
import Recommend_list from '@/components/Recommend_list.vue'
export default {
    components: { Recommend_option, Recommend_list }
}
</script>

<style>
.left-recommend {overflow: hidden; width: 375px; background: #fff; border: 2px solid #565eb6; border-radius: 5px; transition: .3s; padding: 30px 35px; position: fixed;top: 10px;left: 10px;z-index: 2;}
</style>