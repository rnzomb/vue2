<template>
  <b-form-input @input="onInput" :value="value" type="tel"/>
</template>

<script>
export default {
  name: "PhoneInput",
  props: ['value'],
  methods: {
    onInput(v) {
      this.$emit('input',v)
    }     
  } 
}
</script>