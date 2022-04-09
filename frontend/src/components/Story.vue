<template>
  <div class="story">
    <div class="top">
      <div class="btn-write">
        <span class="ic_write black"><svg viewBox="0 0 40 40" class="css-nd8p61"><path d="M28.6 4.5c.4 0 .8.2 1 .4l5.5 5.4a1.5 1.5 0 010 2.1L13 34.5H5.5V27l22-22c.3-.3.7-.5 1.1-.5zm-6.1 6l7 7"></path></svg><span class="blind"></span></span>
      </div>
      <p class="title">이야기 (<span>600</span>)</p>
      <div class="btn-close" @click="update()">
        <span class="ic_close"><svg viewBox="0 0 40 40" class="css-14vv9id"><path d="M7 7l26 26m0-26L7 33"></path></svg><span class="blind"></span></span>
      </div>
    </div>
    <ul class="board">
        <li v-for="(content, index) in this.$store.state.nowStorys" v-bind:key="index">
          <p class="name">
            <span class="ic_user"><svg viewBox="0 0 40 40" class="css-1vm8c1m"><path d="M36 35v-3c0-5-3.7-8-8.3-8H12.3C7.7 24 4 27 4 32v3h32zM20 5a8 8 0 100 16 8 8 0 100-16z"></path></svg></span>
            {{content.items.id}}
          </p>
          <p class="content">
            {{content.items.cont}}
          </p>
          <p class="date">{{content.items.reg}} <span>00:00:00</span></p>
          <div class="replyWrap">
            <textarea id="reply"></textarea>
            <div class="btn-write">
              <span class="ic_write gray"><svg viewBox="0 0 40 40" class="css-nd8p61"><path d="M28.6 4.5c.4 0 .8.2 1 .4l5.5 5.4a1.5 1.5 0 010 2.1L13 34.5H5.5V27l22-22c.3-.3.7-.5 1.1-.5zm-6.1 6l7 7"></path></svg><span class="blind"></span></span>
            </div>
          </div>          
        </li>
    </ul>
    <!-- //board end -->
  </div>
  
</template>

<script>
export default {
    methods: {
        update() {
            $('.left-detail').toggleClass('active');
        }
    },
    computed: {
      filterStory: function() {
        return this.$store.state.storys.filter(item => item.serialNum === '2') 
      }
    },
}
</script>

<style scoped>
.story {width: 100%; height: 100vh; background: #eaebed;}

.top {width: 100%; background: #fff; position: relative;}
.top .title {line-height: 56px; text-align: center; color:rgb(72, 72, 72); font-size:16px; font-weight: 500;}
.top .btn-write {width: 22px; height: 22px; cursor: pointer; position: absolute;top: 50%;left: 23px; transform: translateY(-50%);}
.top .btn-close {width: 22px; height: 22px; cursor: pointer; position: absolute;top: 50%;right: 23px; transform: translateY(-50%);}

.board {padding: 4px 4px;}
.board li {background: #fff; border-radius: 3px; padding: 15px 24px 18px;}
.board li .name {color:rgb(127, 126, 146); font-size:13px; font-weight: 500; margin: 15px 0 8px;}
.board li .name .ic_user {display: inline-block; width: 15px; height: 15px; vertical-align: middle;}
.board li .name .ic_user svg {fill:rgb(218, 218, 218);}
.board li .content {font-size: 15px; color: rgb(34, 34, 34); line-height: 1.5; white-space: pre-wrap; word-break: break-all;}
.board li .date {color:rgb(163, 163, 163); font-size:13px; font-weight: 400; margin: 20px 0 17px;}
.board li .date span {display: inline-block; margin: 0 0 0 5px;}
.board li .replyWrap {position: relative;}
.board li .replyWrap #reply {width: calc(100% - 32px); height: 43px; border-radius: 6px; border: 1px solid rgb(206, 207, 220); line-height: 42px; letter-spacing: -1px; font-size:15px; padding: 0 16px;}
.board li .replyWrap #reply:focus {border: 1px solid rgb(88, 77, 228);}
.board li .replyWrap .btn-write {display: block; width: 20px; height: 20px; cursor: pointer; position: absolute;bottom: 16px;right: 16px;}


.ic_write {display: block; fill: none; stroke-width: 3px;}
.ic_write.black {stroke: rgb(72, 72, 72);}
.ic_write.gray {stroke: rgb(127, 126, 146);}
.ic_close {display: block; fill: none; stroke: rgb(127, 126, 146); stroke-width: 3px;}
</style>