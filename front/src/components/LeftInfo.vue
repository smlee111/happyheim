<template>
    <div class="left-info">

        <div class="top">
            <div class="srchWrap" @keyup="keyUp">
                <div></div>
                <input type="text" id="srch" placeholder="아파트, 지역 또는 학교명으로 검색">

            </div>
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
    .left-info {width: 375px; height: 100vh; background: #fff; position: fixed;top: 0;left: 0;z-index: 999;}
    .left-info .top {width: 375px; padding: 12px 0; background: #ccc;}
    .left-info .top .srchWrap {width: calc(100% - 24px); height: 51px; font-size: 16px; background-color: #000; padding: 10px 70px 10px 48px; margin: 0 12px;}
    .left-info .top .srchWrap #srch {width: 100%; height: 100%;}
</style>