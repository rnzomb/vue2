<template>
  <div  class="font-weight-bold" id="app">
    <b-container class="text-info">
      <AddForm v-on:addItems="addItem"/>
      <hr>
      <TodoList v-on:dele="onDelete" :items="items"/>
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
  data() {
    return {
      items: []
    }
  },
  methods: {
    addItem(newItem) {
      this.items = [...this.items, newItem]
    },
    onDelete(id) {
      this.items = this.items.filter(items => items.id !== id)
    }
  }
}
</script>

