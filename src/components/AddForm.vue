<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group description="Name sjuda" label="Name" label-for="fieldset-1">
      <b-form-input id="fieldset-1" placeholder="Your Name" v-model="name" type="text"/>
    </b-form-group>

    <b-form-group
      id="fieldset-2"
      description="Date sjuda"
      label="Enter your Date"
      label-for="fieldset-2"
    >
      <b-form-input id="fieldset-2" v-model="date" type="date"/>
    </b-form-group>

    <b-row align-h="center">
      <b-button class="top-cover" variant="success" pill type="submit">
        <v-icon name="plus"/>
      </b-button>
    </b-row>
  </b-form>
</template>

<script>
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/plus"
import uuid from "uuid"

export default {
  name: "AddForm",
  components: {
    VIcon
  },
  data() {
    return {
      id: undefined,
      name: undefined,
      date: undefined,
      completed: false
    }
  },
  methods: {
    onSubmit() {
      const newItem = {
        id: uuid.v4(),
        name: this.name,
        date: this.date,
        completed: this.completed
      }
      this.$emit("addItems", newItem)
    }
  }
}
</script>

