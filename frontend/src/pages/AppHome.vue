<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import MainView from '../views/MainView.vue';
export default{
  components: {
    MainView,
  },
}
</script>


<style>
@import '../assets/css/reset.css';
body {font-family: 'Montserrat', 'Noto Sans KR', sans-serif;}
</style>
