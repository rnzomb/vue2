<template>

<b-container>
    <b-form @submit.prevent="onSubmit">
      <TextInput v-model="name" horizontalLabel :required="true" id="firstName" label="Name" description="Enter your name"></TextInput>
      <DateInput v-model="date" horizontalLabel :required="true" id="Date" label="Date" description="Enter your Date"></DateInput>

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
  },
  computed:{
    id() {
      return this.$route.params.id
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

