<template>
    <div class="srchWrap">
        <div class="logo-small"></div>
        <input type="text" id="input-srch" placeholder="아파트, 지역 또는 학교명으로 검색">
        <div id="btn_srch"></div>
    </div>
</template>

<style scoped>
.srchWrap {width: calc(100% - 24px); height: 51px; border-radius: 3px; font-size: 16px; background: #fff; padding: 10px 50px 10px 48px; margin: 0 12px; position: relative;}
.srchWrap #input-srch {width: 100%; height: 100%; font-size:16px;}
.srchWrap #input-srch::placeholder {color:#ccc;}
.srchWrap .logo-small {width: 21px; height: 17px; background: url('../assets/images/ic_all.png')no-repeat, #fff; background-position: -261px -291px; cursor: pointer; position: absolute;top: 15px;left: 15px;}
.srchWrap #btn_srch {width: 17px; height: 17px; background: url('../assets/images/ic_all.png')no-repeat, #fff; background-position: -239px -309px; cursor: pointer; position: absolute;top: 16px;right: 15px;} 
</style>