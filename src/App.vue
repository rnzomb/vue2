<template>
  <div id="app">
    <b-container>
     <AddForm v-on:addItems="addItem"/>
      <TodoList v-on:dele="onDelete" :items="items" />
    </b-container>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"
import AddForm from "@/components/AddForm"
export default {
  name: 'app',
  components: {
    AddForm,
    TodoList
    
    },
    data (){
      return {
        items: [

        ]       
      }
    },
    methods:{
      addItem(newItem){
        this.items = [...this.items, newItem]
      },
      onDelete(id){
      this.items= this.items.filter(items => items.id !==id)
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
