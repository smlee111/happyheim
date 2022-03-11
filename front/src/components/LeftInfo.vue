<template>
    <div class="left-info">

        <div class="top">
            <div class="srchWrap" @keyup="keyUp">
                <div class="logo-small"></div>
                <input type="text" id="input-srch" placeholder="아파트, 지역 또는 학교명으로 검색">
                <div id="btn_srch"></div>
            </div>
            <div class="st">
                <div class="navigator"></div>
                <p class="address">경기도 성남시 분당구 백현동 542</p>
            </div>
            <ul class="menu-main">
                <li>매매<span class="ic"></span></li>
                <li>39평<span class="ic"></span></li>
                <li><span class="ic"></span><span>600</span></li>
                <li><span class="ic"></span></li>
            </ul>
            <div class="menu-sub"></div>
        </div>
        <!-- //top end -->

        <section class="container">
            <!-- title : {{this.title}}
            id : {{this.id}}
            x : {{this.x}}
            y : {{this.y}} -->
        </section>
        <!-- //container end -->

    </div>
</template>

<script>
export default ({
    methods: {
        keyUp() {
        }
    }
})
</script>


<style scoped>
    .left-info {width: 375px; height: 100vh; background: #eaebed; position: fixed;top: 0;left: 0;z-index: 999;}
    .top {width: 375px; padding: 12px 0 0; background: #4d55b2;}

    .top .srchWrap {width: calc(100% - 24px); height: 51px; border-radius: 3px; font-size: 16px; background: #fff; padding: 10px 50px 10px 48px; margin: 0 12px; position: relative;}
    .top .srchWrap #input-srch {width: 100%; height: 100%; font-size:16px;}
    .top .srchWrap #input-srch::placeholder {color:#ccc;}
    .top .srchWrap .logo-small {width: 21px; height: 17px; background: url('../assets/images/ic_all.png')no-repeat, #fff; background-position: -261px -291px; cursor: pointer; position: absolute;top: 15px;left: 15px;}
    .top .srchWrap #btn_srch {width: 17px; height: 17px; background: url('../assets/images/ic_all.png')no-repeat, #fff; background-position: -239px -309px; cursor: pointer; position: absolute;top: 16px;right: 15px;}    

    .top .st .navigator {width: 100%; height: 58px;}
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
    .container {width: 100%; min-height: 1000px; background: #fff;}
</style>