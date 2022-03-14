<template>
    <div class="left-index">
        <Search-bar></Search-bar>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
export default ({
    components: { SearchBar },
    methods: {
    
    }
})
</script>

<style scoped>
.left-index {width: 375px; height: 100px; background: #000; position: fixed;top: 0;left: 0;z-index: 999;}
</style>