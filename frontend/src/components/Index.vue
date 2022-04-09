<template>
    <div class="left-index">
        <p class="logo">HAPPY<br/>HEIM</p>
        <ul class="menu">
            <li @click="activeSearch()">검색</li>
            <li @click="activeRecommend()">추천</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        activeSearch(){
            this.$store.state.isIndex = false;
            this.$store.state.isSearch = true;
        },
        activeRecommend(){
            this.$store.state.isIndex = false;
            this.$store.state.isSearch = false;
            this.$store.state.isRecommend = true;
        }
    }
}
</script>

<style scoped>
.left-index {overflow: hidden; width: 375px; background: #fff; border: 2px solid #565eb6; border-radius: 5px; transition: .3s; padding: 30px 35px; position: fixed;top: 10px;left: 10px;z-index: 2;}
.logo {text-align: center; color:#565eb6; font-size:40px; font-weight: 700; padding: 5px 0 23px;}
.menu li {background: #565eb6; border-radius: 3px; text-align: center; color:#fff; font-size:15px; font-weight: 400; cursor: pointer; padding: 15px 0 14px; margin: 0 0 5px;}
.menu li:hover {background: #757ed8;}
.menu li:active {background: #3c4391; color:#bfc5ff;}
</style>