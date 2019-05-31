<template>
  <div  class="font-weight-bold" id="app">
    <b-container class="text-info">
      <AddForm/>
    </b-container>
  </div>
</template>

<script>
import AddForm from "@/components/AddForm"
export default {
  name: "app",
  components: {
    AddForm
  },
  
  methods: {

  }
 
}
</script>
