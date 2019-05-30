<template>
  <b-container class="mb-1 bg-light">
    <b-row class="item" calign-h="between">
      <b-col align-self="start" col lg="1">
        <b-form-checkbox v-model="isCompleted" switch></b-form-checkbox>
      </b-col>

      <span :class="getClass">
        <template v-if="isCompleted">
          <s>
            <b-col>
              {{id}}
              {{name}}
              {{date}}
            </b-col>
          </s>
        </template>
        <template v-else>
          <b-col>
            {{id}}
            {{name}}
            {{date}}
          </b-col>
        </template>
      </span>
      <b-col align-self="end" col lg="1">
        <b-button @click="modalShow = !modalShow" pill variant="danger" type="button">delete</b-button>
      </b-col>
    </b-row>
    <b-modal @ok="delElement" v-model="modalShow">Vy uvereny, udalit?!</b-modal>
  </b-container>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["id", "name", "date", "completed"],

  data() {
    return {
      isCompleted: false,
      modalShow: false
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
  methods: {
    delElement() {
      this.$emit("del", this.id)
    }
  }
}
</script>


 <style scoped>
.item
{
  border: 1px solid black;
  background-color: #ECF6CE;
  margin: 20px 10px 5px 20px;
  padding: 2px
}
.item:hover {
  background-color:#3ADF00;
}
</style>
   
