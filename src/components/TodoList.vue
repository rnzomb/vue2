<template>
  <div>
    
    <TodoItem v-on:del="del" v-for="(item, index) in items" :key="`list.${index}`" :id="item.id" :name="item.name" :date="item.date" :completed="item.completed"/>
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
  props: ["items"],
    
  methods: {
    onSubmit() {
      this.items.push({id:uuid.v4(), name:this.name, date:this.date, completed:true})
    },
    
    del(id){
       this.$emit ('dele', id) 
    }
  }
}
</script>


  
