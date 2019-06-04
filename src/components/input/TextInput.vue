<template>
  <b-form-input @input="onInput" :value="value" type="text"/>
</template>

<script>
export default {
  name: "TextInput",
  props: ['value'],
  methods: {
    onInput(v) {
      this.$emit('input',v)
    }     
  }
}
</script>