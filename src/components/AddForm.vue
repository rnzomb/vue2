<template>
  <form @submit.prevent="onSubmit">
    <input v-model="name" type="text">
    <input v-model="date" type="date">
    <button type="submit">Add</button>
  </form>
</template>

<script>
import uuid from "uuid";

export default {
  name: 'AddForm',
  data() {
    return {
      id: undefined,
      name: undefined,
      date: undefined
    };
  },
  methods: {
    onSubmit() {
      const newItem = {
        id: uuid.v4(),
        name: this.name,
        date: this.date
      };
      this.$emit("addItems", newItem);
    }
  }
}
</script>
