<template>
    <div class="left-index">
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default ({
    components: { SearchBar },
})
</script>


<style scoped>
.left-index {overflow: hidden; width: 375px; background: #fff; border: 2px solid #565eb6; border-radius: 5px; transition: .3s; position: fixed;top: 10px;left: 10px;z-index: 2;}
</style>