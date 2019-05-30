<template>
  <div  class="font-weight-bold" id="app">
    <b-container class="text-info">
      <AddForm/>
      <hr>
      <TodoList/>
    </b-container>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"
import AddForm from "@/components/AddForm"
export default {
  name: "app",
  components: {
    AddForm,
    TodoList
  },
  
  methods: {

  },
  created() {
    /*
    this.$store.dispatch('todoAdded',{
      id:'001',
      name: 'test',
      completed: "false",
      date: "sosjlisj"
    })
    */

    //const items = this.$store.getters.getTodos
    //console.log(items)
  }
}
</script>

