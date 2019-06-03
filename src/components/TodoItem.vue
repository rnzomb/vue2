<template>

  <b-container class="mb-2 bg-light">

    <b-row class="item" >
      <b-col>
        <b-form-checkbox class="text-left" @change="setStatus" :checked="done" switch></b-form-checkbox>
      </b-col>
       <b-col class="text-left">
          <div :class="getClass">
            <b-link :to="`/edit/${id}`">
                {{name}}
            </b-link>
          </div>
        </b-col>
      
        <b-col class="text-right">
          <div :class="getClass">
            <b-link :to="`/edit/${id}`">
                {{date}}
            </b-link>
          </div>
        </b-col>
      
      <b-col class="text-right" >
        <b-button @click="modalShow = !modalShow" type="button"><v-icon name="trash-alt"/></b-button>
      </b-col>
 
    </b-row>
    
    <b-modal @ok="delElement" v-model="modalShow">Vy uvereny, udalit?!</b-modal>
  </b-container>
 
</template>

<script>
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/"
export default {
  name: "TodoItem",
  components: {
    VIcon
  },
  props: ["id", "name", "date", "done"],

  data() {
    return {
      modalShow: false,
    }
  },
  computed: {
    getClass() {
      if (this.done) {
        return "completed"
      } else {
        return undefined
      }  
    }
  },
  methods: {
    

    delElement() {
      this.$store.dispatch('todoRemoved', this.id)
    },
    setStatus(e) {
      const payload = {
        id: this.id,
        status: e
      }
      this.$store.dispatch('statusUpdated', payload)
    }
  }
}
</script>
<style scoped>

.completed {
  text-decoration-line: line-through;
}
.item
{
  
}
.item:hover {
  background-color:#3ADF00;
}
</style>
   
