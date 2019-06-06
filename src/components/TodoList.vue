<template>
  
    <div>
      <transition-group name="animation" tag="div">
        <div v-for="item in items" :key="`todo-${item.id}`">
          <TodoItem
          class="animation-item"
            v-on:del="del"                      
            :id="item.id"
            :name="item.name"
            :date="item.date"
            :done="item.done"
          />
        </div>
      </transition-group>
      <div>{{$t('field_count')}}: {{items.length}}</div>  
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
    items() {
      const items = this.$store.getters.getTodos
      items.sort(function(a, b) {
        const x = a.name.toLowerCase()
        const y = b.name.toLowerCase()
        if (x < y) return -1
        if (x > y) return 1
        return 0
      })      
      return items
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
  },
}
</script>
<style scoped>
.animation-item {
  display: inline-block;
  margin-right: 10px;
}
.animation-enter-active, .animation-leave-active {
  transition: all 1s;
}
.animation-enter, .animation-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
}
</style>
