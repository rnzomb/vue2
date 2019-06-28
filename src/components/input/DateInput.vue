<template>
  <b-form-group :label-cols-sm="horizontalLabel ? '2': undefined" :state="state">
    <datepicker
      input-class="text-center"
      bootstrap-styling
      :inline="false"      
      :format="format"        
      :id="id"
      :required="required"
      :placeholder="description"
      :value="value"
      :disabled-dates="tate.disabledDates"
      :highlighted="tate.highlighted"
      :language="currentLocale"
      @selected="onSelect"
    >
      <div slot="beforeCalendarHeader" class="calender-header">
      {{$t('msg_date')}}
      </div>
    </datepicker>
  </b-form-group>
</template>
>
<script> 
import Datepicker from 'vuejs-datepicker'
import {ru, en} from 'vuejs-datepicker/dist/locale'
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
    format: {
      type: String,
      required:false,
      default: undefined
    }
  
  },
  data (){
    return {
      tate: {
        disabledDates: {
          to: new Date(2019, 5, 8), 
          days: [6, 0],
          ranges: [{ 
            from: new Date(2019, 6, 20),
            to: new Date(2019, 6, 30)
          }]
        },
        highlighted: {
          days: [4]
        }
      },
      ru: ru,
      en: en
    }
  },
  computed: {
    invalidFeedback(){
      const result = this.validate === undefined ? true : this.validate(this.value)
      return result === true ? undefined : result
    },
    state(){
      return this.validate === undefined ? undefined : this.validate(this.value) === true
      
    },
    currentLocale() {
      if(this.$store.getters.getLanguage === 'ru') return ru
      if(this.$store.getters.getLanguage === 'en') return en      
    }
  },
  methods: {
    onSelect(newDat) {
      this.$emit('input', newDat)      
    },
  }

}
</script>