<template>
    <div class="srchWrap">
        <div class="logo-small"></div>
        <input type="text" id="input-srch" @keyup.enter="search()" placeholder="아파트, 지역 또는 학교명으로 검색">
        <!-- <input type="text" id="input-srch" v-model="keyWord" @keyup.enter="search()"> -->
        <div id="btn_srch" @click="search()"></div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                keyWord: '아파트, 지역 또는 학교명으로 검색'
            }
    },
    methods: {
        
        search() {
            //검색했을 때 
            //1.keyWord 전달 2.정보 나와야함 3.중앙으로 이동 
            let keyWord = document.querySelector('#input-srch').value;
            //let keyWord = this.keyWord;
            console.log(keyWord);
            this.$store.commit('SETLOC',keyWord);
            this.$store.state.isShow = false;
        },
        
    },
    
}
</script>

<style>
.srchWrap {width: calc(100% - 24px); height: 51px; border-radius: 3px; font-size: 16px; background: #fff; padding: 10px 50px 10px 48px; margin: 0 12px; position: relative;}
.srchWrap #input-srch {width: 100%; height: 100%; font-size:16px;}
.srchWrap #input-srch::placeholder {color:#ccc;}
.srchWrap .logo-small {width: 21px; height: 17px; background: url('../assets/images/ic_all.png')no-repeat, #fff; background-position: -261px -291px; cursor: pointer; position: absolute;top: 15px;left: 15px;}
.srchWrap #btn_srch {width: 17px; height: 17px; background: url('../assets/images/ic_all.png')no-repeat, #fff; background-position: -239px -309px; cursor: pointer; position: absolute;top: 16px;right: 15px;} 
</style>