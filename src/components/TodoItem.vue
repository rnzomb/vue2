<template>
  <div class="item">
    <input v-model="isCompleted" type="checkbox"/>
    <span :class="getClass">
      {{id}}
      {{name}}
      {{date}}
    </span>
   
    <b-button @click="delElement" pill variant="danger" type="button">delete</b-button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["id", "name", "date", "completed"],
  
  data(){
    return {
      isCompleted:false
    }
  },
  computed: {
    getClass() {
      if (this.isCompleted) {
        return "completedClass"
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
.completedClass {
  text-decoration-line: line-through;
}
.item
{
  border: 1px solid black;
  background-color: #ECF6CE;
  margin: 20px 10px 5px 20px;
  padding: 2px

}
.item:hover {
  background-color: red;
}
</style>