<template>
  <b-form-group :label-cols-sm="horizontalLabel ? '2': undefined"
    :state="state">
      <datepicker
        input-class="text-center"
        bootstrap-styling
        :typeable="typeable"
        :format="format"
        :id="id"
        :required="required"
        :placeholder="description"
        :value="value"
        @input="onSelect"
      >
      </datepicker>
  </b-form-group>
</template>
>
<script> 
import Datepicker from 'vuejs-datepicker'
export default {
  name: "DateInput",
  components: {
    Datepicker
  },
  props: {
    type: {
      type: String,
      required: false,
      default: undefined      
    },
    id: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false
    },
    description: {
      type: String,
      required: false,
      default: undefined
    },
    value: {
      type: Date,
      required: false,
      default: undefined
    },
    horizontalLabel: {
      type: Boolean,
      required: false
    },
    typeable: {
      type: Boolean,
      required: false
    },
    format: {
      type: String,
      required:false,
      default: undefined
    },
  
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
  methods: {
    onSelect(newDat) {
      this.$emit('input', newDat)      
    }
  }

}
</script>