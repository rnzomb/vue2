<template>
  <b-form-group :label-cols-sm="horizontalLabel ? '2': undefined" 
      :label="label" 
      :label-for="id" 
      :description="description" 
      :invalid-feedback="invalidFeedback"
      :state="state">
    <b-form-input v-rounded @input="onInput" 
    :class="inputClass"
    :value="value" 
    :type="type" 
    :required="required" 
    :id="id" 
    :name="name" 
    :minlength="minLength" 
    :maxlength="maxLength"
    :state="state"/>
  </b-form-group>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    inputClass: {
      type: String,
      required: false,
      default: undefined
    },
    validate: {
      type: Function,
      required: false,
      default: undefined 
    },
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
  computed: {
    invalidFeedback(){
      const result = this.validate === undefined ? true : this.validate(this.value)
      return result === true ? undefined : result
    },
    state(){
      return this.validate === undefined ? undefined : this.validate(this.value) === true
      
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