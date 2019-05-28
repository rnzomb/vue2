<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="name" type="text">
      <input v-model="age"  type="text">

       <button type="submit">Add</button>
    </form>
    <TodoItem v-for="(item, index) in items" :key="`list.${index}`" :name="item.name" :age="item.age" :completed="item.completed"/>
    <div>
      Count: {{items.length}}
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components:{
    TodoItem
  },
  data(){
    return {
      name: undefined,
      age: undefined,
      completed: false,
      items: [
        {
          name: 'Vasja',
          age: "34",
          completed: true
        },
        {
          name: 'Petja',
          age: "35",
          completed:false
        },
        {
          name: 'Task 3',
          age: "45",
          completed:true
        }
      ]
    }
  },
    
  methods: {
    onSubmit() {
      this.items.push({name:this.name, age:this.age, completed:true})
    }
   
  
  }
}
</script>


  
