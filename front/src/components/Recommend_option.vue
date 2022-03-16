<template>
    <div>
        <h3>연봉입력</h3>
        <input type="text" placeholder="연봉 입력(단위: 만원)">
        <h3>지역선택</h3>
        <select name="" id="">
            <option value="서울">서울</option>
            <option value="경기">경기</option>
        </select>
        <div @click="activeRecommendList()">submit</div>
    </div>
</template>

<script>
export default {
    methods: {
        activeRecommendList(){
            this.$store.state.isRecommendOption = false;
            this.$store.state.isRecommendList = true;
        }
    }
}
</script>

<style>

</style>