<template>

<b-container>
    <b-form @submit.prevent="onSubmit">
      <TextInput v-model="name" :required="true" id="firstName" :label="fieldName" :description="msgName" :min-length="3" :max-length="10"/>     <!--horizontallabel - label sverhu-->
      <DateInput v-model="date" :required="true" id="Date" :label="fieldDate" :description="msgDate"/>

      <template v-if="id!= undefined"> 
        <b-button class="top-cover" variant="success" pill type="submit">
          <v-icon name="edit"/>
        </b-button>
      </template>
      <template v-else>
        <b-button class="top-cover" variant="success" pill type="submit">
          <v-icon name="plus"/>
        </b-button>
      </template>
          
    </b-form>
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
      name: undefined,
      date: undefined,
      done: false
    }
  },
  methods: {
    onSubmit() {
   

      if (!this.validateName(this.name)) {
        alert('Name is incorrect!')
        return
      }
      if (!this.validateDate(this.date)) {
        alert('Date must be between 2000 and 2020')
        return
      }

      const newItem = {
        id: this.id === undefined ? uuid.v4() : this.id,
        name: this.name,
        date: moment(this.date).toDate(),
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
      return /^[\0-9a-zA-Z ]+$/.test(v)

    },
    validateDate(dat) {
      return (moment(dat).isAfter('2000-01-01') && moment(dat).isBefore('2020-01-01'))
      
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
    },msgName() {
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
      this.date = newItem.date
      this.done = newItem.done
    }
  }
}
</script>

