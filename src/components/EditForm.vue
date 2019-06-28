<template>

<b-container>
  <b-form-group>
    <b-form @submit.prevent="onSubmit">
      <TextInput v-model="name" 
      :required="true" id="firstName" 
      :label="fieldName" :description="msgName"  
      :validate="validateName"
      :max-length="10" />     <!--horizontallabel - label sverhu-->
      <p>{{errorMsg}}</p>
      <DateInput v-model="date" :required="true" id="Date" :description="msgDate"
        format="dd-MM-yyyy" typeable/>
      <template v-if="id!= undefined"> 
        <b-button class="top-cover" variant="success" pill type="submit">
          <v-icon name="edit"/>
        </b-button>
      </template>
      <template v-else>
        <b-button id="formSubmit" class="top-cover" variant="success" pill type="submit">
          <v-icon name="plus"/>
        </b-button>
      </template>
          
    </b-form>
  </b-form-group>
  </b-container>
  
</template>

<script>
import TextInput from "@/components/input/TextInput"
import DateInput from "@/components/input/DateInput"
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/edit"
import "vue-awesome/icons/plus"
import uuid from "uuid"
import moment from "moment"
export default {
  name: "EditForm",
  components: {
    VIcon,
    TextInput,
    DateInput
  },
  data() {
    return {
      name: '',
      date: undefined,
      done: false,
      errorMsg: undefined
    }
  },
  methods: {
    onSubmit() {
      if (this.validateName(this.name) !== true) {
        this.errorMsg='Error Name'       
        return
      }
      if (this.validateDate(this.date) !== true) {
        this.errorMsg='Error Date'
        return
      }

      const newItem = {
        id: this.id === undefined ? uuid.v4() : this.id,
        name: this.name,
        date: this.date,
        done: this.done
      }

      if(this.id === undefined){              
        this.$store.dispatch('todoAdded',newItem)
      } else {          
        this.$store.dispatch('todoUpdated',newItem)            
      }
      this.$router.push('/')
    },
    validateName(v) {
      return v.length >= 3 && /^[0-9a-zA-Z ]+$/.test(v) ? true : this.$i18n.t('msg_wrngName')

    },
    validateDate(dat) {
        //if (/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/.test(dat)){
      const date = moment(dat)
      return date.isAfter('2000-01-01') && date.isBefore('2020-01-01')
      return false
      }
  },
  computed:{
    id() {
      return this.$route.params.id
    },
    fieldName() {
      return this.$i18n.t('field_name')
    },
    fieldDate() {
      return this.$i18n.t('field_date')
    },
    msgName() {
      return this.$i18n.t('msg_name')
    },
    msgDate() {
      return this.$i18n.t('msg_date')
    }
  
  },
    mounted() {
      if (this.id !== undefined){
      const items = this.$store.getters.getTodos
      const newItem = items.find(item => item.id === this.id)
      this.name = newItem.name
      this.date = moment(newItem.date).toDate()
      this.done = newItem.done
    }
  }
}
</script>

