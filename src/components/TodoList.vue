<template>
  <div>
    <TodoItem
      v-on:del="del"
      v-for="(item, index) in items"
      :key="`list.${index}`"
      :id="item.id"
      :name="item.name"
      :date="item.date"
      :done="item.done"
    />
    <div>Count: {{items.length}}</div>
  </div>
</template>

<script>
import uuid from "uuid"
import TodoItem from "@/components/TodoItem"
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed:{
    items(){
      return this.$store.getters.getTodos
    } 
  },

  methods: {
    onSubmit() {
      this.items.push({
        id: uuid.v4(),
        name: this.name,
        date: this.date,
        done: true
      })
    },

    del(id) {
      this.$emit("dele", id)
    }
  }
}
</script>


  
