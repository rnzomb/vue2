<template>
  <div id="app">
   <TodoList/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"

export default {
  name: 'app',
  components: {
    TodoList
    
    },
    data (){
      return {
        todos: [
          {
            name: "Aleksei",
            date: "1985"
          },
          {
            name: "Roman",
            date: "1984"
          },
          {
            name: "Peter",
            date: "1964"
          }

        ]
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
