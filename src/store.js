import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store= new Vuex.Store ({
  state: {                                        // otvechaet za dannye, kot budut hranitsja v storage
    todos: []
  },

  getters: {
    getTodos:state=>{
      return state.todos
    }
  },

  mutations: {                                    //otvechaet za izmenenie state         sinhronno
     addTodo(state, item){
       state.todos.push(item)
     },
     removeTodo(state, id) {
       state.todos= state.todos.filter(state => state.id !== id)
     },     
     setStatus(state, payload) {
       const id = payload.id
       const status = payload.status
       state.todos = state.todos.map(item => {
         if(item.id===id) {
           const newitem = item
           newitem.done = status
           return newitem 
         } else {
           return item   
         }
       })
     }    
  },
  
  actions: {                                      //sobytija       asinhronno
    todoAdded({commit}, item) {
      commit('addTodo', item)
    },
    todoRemoved ({commit}, id){
      commit('removeTodo', id)
    },
    statusUpdated ({commit}, payload) {
      commit('setStatus', payload)
    },
    todoUpdated  ({commit}, item) {
      commit('removeTodo', item.id)
      commit('addTodo', item)
    }

  },

  plugins: [
    createPersistedState({ })
  ]

})


export default store