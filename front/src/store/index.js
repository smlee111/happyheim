import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items : [
      {
         id : 1,
         title : "신림 할리스", 
         x: 37.48445337260817,
         y: 126.9282442770891,
      },
      {
        id : 2,
        title : "부뚜막", 
        x: 37.484810395764505, 
        y: 126.92777209000958,
      }
    ],
    nowLocation : {
      
    }

  },
  mutations: {
    SETLOC(state,title){
      state.items.forEach(i =>{
          if(title == i.title){
            console.log(i);
            state.nowLocation = i;
          }
        })
    }
  },
  actions: {
    
  },
  modules: {
  }
})
