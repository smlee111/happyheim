import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items : [
      {
         serialNum : 1,
         title : "신림 할리스", 
         x: 37.48445337260817,
         y: 126.9282442770891,
      },
      {
        serialNum : 2,
        title : "부뚜막", 
        x: 37.484810395764505, 
        y: 126.92777209000958,
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
            let nowStory = state.storys.filter(item => item.serialNum === i.serialNum);
            state.nowStorys = nowStory;
          }
        })
    }
  },
  actions: {
    
  },
  modules: {
  }
})
