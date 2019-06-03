<template>


  <b-form @submit.prevent="onSubmit">
    <b-form-group description="Name sjuda" label="Name" label-for="fieldset-1">
      <b-form-input id="fieldset-1" required placeholder="Your Name" v-model="name" type="text"/>
    </b-form-group>

    <b-form-group
      id="fieldset-2"
      description="Date sjuda"
      label="Enter your Date"
      label-for="fieldset-2"
    >
      <b-form-input id="fieldset-2" required v-model="date" type="date"/>
    </b-form-group>

    <b-row align-h="center">
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
    </b-row>
  </b-form>

  
</template>

<script>
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/edit"
import "vue-awesome/icons/plus"
import uuid from "uuid"

export default {
  name: "EditForm",
  components: {
    VIcon
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

