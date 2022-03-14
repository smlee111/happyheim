<template>
    <div class="left-detail">
        <div class="left">
            <div class="top">
                <SearchBar></SearchBar>
                <div class="st">
                    <div class="navigator">
                        <div class="btn-back" v-on:click="close"></div>
                        <div class="now">{{this.$store.state.nowLocation.title}}</div>
                        <div class="btn-close" v-on:click="close"></div>
                    </div>
                    <p class="address">경기도 성남시 분당구 백현동 542</p>
                </div>
                <ul class="menu-main">
                    <li>매매<span class="ic"></span></li>
                    <li>39평<span class="ic"></span></li>
                    <li @click="update()"><span class="ic"></span><span>600</span></li>
                    <li><span class="ic"></span></li>
                </ul>
                <div class="menu-sub"></div>
            </div>
            <!-- //top end -->

            <section class="container">
                <p class="title">{{this.$store.state.nowLocation.title}}</p>
                <p class="pos">{{this.$store.state.nowLocation.x}}</p>
                <p class="pos">{{this.$store.state.nowLocation.y}}</p>
            </section>
            <!-- //container end -->
        </div>
        <!-- //left end -->
        
        <div class="right">
            <Story></Story>
        </div>
        <!-- //right end -->

    </div>
</template>

<script>
import Story from '@/components/Story.vue';
import SearchBar from '@/components/SearchBar.vue';
export default ({
    components: { Story, SearchBar },
    methods: {
        update() {
            $('.left-detail').toggleClass('active');
        },
        close(){
            this.$store.state.isShow = true;
        },
        
    }
})
</script>

<style scoped>
.left-detail {overflow: hidden; width: 375px; height: 100vh; background: #eaebed; transition: .3s; position: fixed;top: 0;left: 0;z-index: 2;}
.left-detail.active {width: 750px;}
.left-detail .left {float: left; width: 375px;}
.left-detail .right {float: left; width: 375px;}

.top {width: 100%; padding: 12px 0 0; background: #4d55b2;}

.top .st .navigator {width: 100%; height: 58px; position: relative;}
.top .st .navigator .btn-back {width: 17px; height: 16px; background: url('../assets/images/ic_all.png')no-repeat; background-position: -283px -383px; cursor: pointer; position: absolute;top: 49%;left: 19px; transform: translateY(-50%);}
.top .st .navigator .now {overflow: hidden; width: 100%; white-space: nowrap; text-overflow: ellipsis; line-height: 58px; color:#fff; font-size:18px; font-weight: 500; padding: 0 50px;}
.top .st .navigator .btn-close {width: 14px; height: 14px; background: url('../assets/images/ic_all.png')no-repeat; background-position: -170px -275px; cursor: pointer; position: absolute;top: 49%;right: 19px; transform: translateY(-50%);}
.top .st .address {line-height: 18px; text-align: center; color: #DEDEEA; font-size: 15px; font-weight: 300; padding: 0 0 10px;}

.top .menu-main {overflow: hidden;}
.top .menu-main li {float: left; border-top: 1px solid #565eb6; border-right: 1px solid #565eb6; line-height: 47px; color:#fff; font-size: 16px; font-weight: 500; cursor: pointer;}
.top .menu-main li:nth-child(1) {width: 28%; text-align: center;}
.top .menu-main li:nth-child(1) .ic {display: inline-block; width: 10px; height: 6px; background: url('../assets/images/ic_all.png')no-repeat; background-position: -241px -345px; vertical-align: middle; margin: 0 0 0 5px;}
.top .menu-main li:nth-child(2) {width: 28%; text-align: center;}
.top .menu-main li:nth-child(2) .ic {display: inline-block; width: 10px; height: 6px; background: url('../assets/images/ic_all.png')no-repeat; background-position: -241px -345px; vertical-align: middle; margin: 0 0 0 5px;}
.top .menu-main li:nth-child(3) {width: 28%; text-align: center;}
.top .menu-main li:nth-child(3) .ic {display: inline-block; width: 21px; height: 21px; background: url('../assets/images/ic_all.png')no-repeat; background-position: -147px -268px; vertical-align: middle; margin: 0 5px 0 0;}
.top .menu-main li:nth-child(4) {width: 16%; border-right: 0; text-align: center;}
.top .menu-main li:nth-child(4) .ic {display: inline-block; width: 21px; height: 20px; background: url('../assets/images/ic_all.png')no-repeat; background-position: -167px -123px; vertical-align: middle;}

.top .menu-sub {width: 100%; height: 65px; background: #fff; margin: 0 0 4px;}

.container {width: 100%; min-height: 1000px; background: #fff; padding: 18px 15px;}
.container .title {color:rgb(72, 72, 72); font-size:24px; font-weight: 600;}
.container .pos {color:rgb(72, 72, 72); font-size:18px; font-weight: 500; margin: 10px 0 0;}
</style>