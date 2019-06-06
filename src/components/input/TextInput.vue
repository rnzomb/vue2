<template>
  <b-form-group :label-cols-sm="horizontalLabel ? '2': undefined" :label="label" :label-for="id" :description="description">
    <b-form-input v-rounded @input="onInput" 
    :value="value" 
    :type="type" 
    :required="required" 
    :id="id" 
    :name="name" 
    :minlength="minLength" 
    :maxlength="maxLength"/>
  </b-form-group>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    minLength: {
      type: Number,
      required: false,
      default: undefined
    },
    maxLength: {
      type: Number,
      required: false,
      default: undefined
    },
    type: {
      type: String,
      required: false,
      default: 'text'      
    },
    value: {
      type: String,
      required: false,
      default: undefined
    },
    required: {
      type: Boolean,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required:false,
      default: undefined
    },
    label: {
      type: String,
      required: false,
      default: undefined
    },
    description: {
      type: String,
      required: false,
      default: undefined
    },
    horizontalLabel: {
      type: Boolean,
      required: false
    }
  },
  directives: {
    rounded: {
      inserted: function (el) {
        el.style.borderRadius = '50%'
      }
    }
  },
  methods: {
    onInput(v) {
      this.$emit('input',v)
    }
  }
}
</script>