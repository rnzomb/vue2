<template>
  <div  class="font-weight-bold" id="app">
    <b-container class="text-info">
      <TodoList/>
    </b-container>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"
export default {
  name: "app",
  components: {
    TodoList
  },
  
  methods: {

  },
  created() {
    /*
    this.$store.dispatch('todoAdded',{
      id:'001',
      name: 'test',
      done: "false",
      date: "sosjlisj"
    })
    */

    //const items = this.$store.getters.getTodos
    //console.log(items)
  }
}
</script>
