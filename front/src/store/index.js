import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isIndex : true,
    isRecommend : false,
    isRecommendOption : true,
    isRecommendList : false,
    isSearch : false,
    isDetail : false,
    items : [
      {
        serialNum : 1,
        title : "하남감일",
        x:37.50842292582616,
        y:127.16425480921386,
        summary: {
          공고명 : '하남감일 A7BL 신혼희망타운(행복주택) 추가 입주자 모집',
          공고대상 : ['대학생','신혼부부','주거취약계층','저소득층','무주택자'],
          공급기관 : 'LH',
          주택유형 : '아파트',
          위치 : '경기도 하남시 감이동 62-1 일원 ',
          총세대수 : 0,
          모집호수 : '81세대',
          최초입주월 : '2022년 8월',
          문의처 : 'LH 콜센터 : 1600-1004 (평일 : 09:00 ~ 18:00)',
        },
        info : [
          {
            형명 : '46A',
            전용면적 : '46.92',
            모집호수 : {
              계 : 21,
              우선공급 : 0,
              일반공급 : 21
            },
            임대보증금 : {
              계 : 109600000,
              계약금 : 5480000,
              중도금 : 0,
              잔금 : 104120000,
              월임대료 : 451180
            }
          },
          {
            형명 : '46B',
            전용면적 : '46.68',
            모집호수 : {
              계 : 4,
              우선공급 : 0,
              일반공급 : 4
            },
            임대보증금 : {
              계 : 109200000,
              계약금 : 5460000,
              중도금 : 0,
              잔금 : 103740000,
              월임대료 : 449540
            }
          },
        ],
        schedule : {
          모집공고일 : '2022년 03월 04일',
          일반공급 : '2022년 03월 16일 ~ 2022년 03월 18일 10:00~17:00',
          당첨자발표일 : '2022년 06월 17일'
        }
      }
    ],
    nowLocation : {
      
    },
    nowStorys :{

    },
    storys : [
      {
        serialNum : 1,
        items:{
          cNum : 1,
          id : 'lsh',
          cont : '별로에요ㅜㅠ',
          reg : '2022-03-11',
          liked : 2
        }
      },
      {
        serialNum : 1,
        items:{
          cNum : 2,
          id : 'lsm',
          cont : '좋은데?',
          reg : '2022-03-11',
          liked : 3
        }
      },
      {
        serialNum : 1,
        items:{
          cNum : 1,
          id : 'lsh',
          cont : '별로에요ㅜㅠ',
          reg : '2022-03-11',
          liked : 2
        }
      },
      {
        serialNum : 1,
        items:{
          cNum : 1,
          id : 'lsh',
          cont : '별로에요ㅜㅠ',
          reg : '2022-03-11',
          liked : 2
        }
      },
      {
        serialNum : 1,
        items:{
          cNum : 1,
          id : 'lsh',
          cont : '별로에요ㅜㅠ',
          reg : '2022-03-11',
          liked : 2
        }
      },
      {
        serialNum : 1,
        items:{
          cNum : 1,
          id : 'lsh',
          cont : '별로에요ㅜㅠ',
          reg : '2022-03-11',
          liked : 2
        }
      },
      {
        serialNum : 2,
        items:{
          cNum : 3,
          id : 'jyh',
          cont : '시끄러워요',
          reg : '2022-03-12',
          liked : 4
        }
      },
      {
        serialNum : 2,
        items:{
          cNum : 4,
          id : 'jyj',
          cont : '조용해요',
          reg : '2022-03-12',
          liked : 5
        }
      },
      {
        serialNum : 2,
        items:{
          cNum : 3,
          id : 'jyh',
          cont : '시끄러워요',
          reg : '2022-03-12',
          liked : 4
        }
      },
      {
        serialNum : 2,
        items:{
          cNum : 4,
          id : 'jyj',
          cont : '조용해요',
          reg : '2022-03-12',
          liked : 5
        }
      },
      {
        serialNum : 2,
        items:{
          cNum : 3,
          id : 'jyh',
          cont : '시끄러워요',
          reg : '2022-03-12',
          liked : 4
        }
      },
      {
        serialNum : 2,
        items:{
          cNum : 4,
          id : 'jyj',
          cont : '조용해요',
          reg : '2022-03-12',
          liked : 5
        }
      },
    ],

  },
  mutations: {
    SETLOC(state,title){
      state.items.forEach(i =>{
          if(title == i.title){
            console.log(i);
            state.nowLocation = i;
            //시리얼 넘버에 맞게 필터링
            let nowStory = state.storys.filter(item => item.serialNum === i.serialNum);
            state.nowStorys = nowStory;
          }
        })
    },
    //SET_INFO(state,keyWord){
    //   console.log(keyWord);
    // }
  },
  actions: {
    
  },
  modules: {
  }
})
