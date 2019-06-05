import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store= new Vuex.Store ({
  state: {                                        // otvechaet za dannye, kot budut hranitsja v storage
    todos: [],
    locale: 'en'
  },

  getters: {
    getTodos:state=>{
      return state.todos
    },
    getLanguage:state=>{
      return state.locale
    }
  },

  mutations: {                                    //otvechaet za izmenenie state         sinhronno

    saveLocale(state, langValue){
      state.locale = langValue
    },
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
    },
    updateTodo(state, item){
      state.todos = state.todos.map(i => i.id === item.id ? item : i)
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
      commit ('updateTodo', item)
      //commit('removeTodo', item.id)
     // commit('addTodo', item)
    },
    saveLanguage({commit}, lang){
      commit('saveLocale', lang)
    }

  },

  plugins: [
    createPersistedState({ })
  ]

})


export default store