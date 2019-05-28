<template>
  <div class="item">
    <input v-model="completed" type="checkbox">
    <span :class="getClass">
      {{name}}
      {{age}}
    </span>
    <button class="button">delete</button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["name", "age", "completed"],
  computed: {
    getClass() {
      if (this.completed) {
        return "completed"
      } else {
        return undefined
      }
    }
  }
}
</script>
    
<style scoped>
.completed {
  text-decoration-line: line-through;
}
.item
{
  border: 1px solid black;
  background-color: grey;
  margin: 2px;
  padding: 2px

}
.item:hover {
  background-color: red;
}
.button{
  margin: 5px;
  border-radius: 70%;
}
</style>