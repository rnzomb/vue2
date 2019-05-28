<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="name" type="text">
      <input v-model="date"  type="date">

       <button type="submit">Add</button>
    </form>
    <TodoItem v-on:del="onDelete" v-for="(item, index) in items" :key="`list.${index}`" :id="item.id" :name="item.name" :date="item.date" :completed="item.completed"/>
    <div>
      Count: {{items.length}}
    </div>
  </div>
</template>

<script>
import uuid from 'uuid';
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components:{
    TodoItem
  },
  data(){
    return {
      name: undefined,
      date: undefined,
      completed: false,
      items: [ ]
    }
  },
    
  methods: {
    onSubmit() {
      this.items.push({id:uuid.v4(), name:this.name, date:this.date, completed:true})
    },
    onDelete(id){
      this.items= this.items.filter(items => items.id !==id)
    }
    
  }
}
</script>


  
