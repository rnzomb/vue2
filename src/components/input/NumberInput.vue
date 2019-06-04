<template>
  <b-form-input @input="onInput" :value="value" type="number"/>
</template>

<script>
export default {
  name: "NumberInput",
  props: ['value'],
  methods: {
    onInput(v) {
      this.$emit('input',v)
    }     
  } 
}
</script>