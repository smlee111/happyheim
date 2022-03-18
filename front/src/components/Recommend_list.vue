<template>
    <ul class="list">
        <li v-for="(list,index) in this.recoLists" :key="index" @click="setloc(list.title)">
            {{index+1}}. {{list.title}}
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    methods: {
        setloc(title) {
           this.$store.commit('SETLOC',title) 
        }
    },
    computed: {
        ...mapState(['recoLists'])
    },
}
</script>

<style scoped>
    
</style>