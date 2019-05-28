<template>
  <div class="item">
    <input v-model="completed" type="checkbox">
    <span :class="getClass">
      {{id}}
      {{name}}
      {{date}}
    </span>
    <button @click="delElement" class="button" type="button">delete</button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["id", "name", "date", "completed"],
  computed: {
    getClass() {
      if (this.completed) {
        return "completed"
      } else {
        return undefined
      }
    }
  },
  methods:{
    delElement() {
      this.$emit ('del',this.id) 

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