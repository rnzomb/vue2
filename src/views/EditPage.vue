<template>
  <div class="text-center font-weight-bold" id="app">
    <b-container class="text-info">
      <EditForm/>
    </b-container>
  </div>
</template>

<script>
import EditForm from "@/components/EditForm"
export default {
  name: "app",
  components: {
    EditForm
  },
  methods: {
  }
}
</script>


