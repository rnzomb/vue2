<template>
  <b-form-input @input="onInput" :value="value" type="email"/>
</template>

<script> 
export default {
  name: "EmailInput",
  props: ['value'],
  methods: {
    onInput(v) {
      this.$emit('input',v)
    }     
  }
}
</script>