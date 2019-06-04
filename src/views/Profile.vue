<template>
  <b-container class="primer">
    <b-form @submit.prevent="onSubmit">
        <!--{{ form.name }}-->
      <TextInput v-model="form.name" :required="true" id="firstName" label="Name"></TextInput>
      <NumberInput v-model="form.age" :required="true" id="Age" label="Age"></NumberInput>
      <EmailInput v-model="form.email" :required="true" id="email" label="Email"></EmailInput>
      <PhoneInput v-model="form.phone" :required="true" id="phoneNumber" label="Phone"></PhoneInput>
    
      <b-button variant="success" pill type="submit">Submit</b-button>
          
    </b-form>
  </b-container>
</template>

<script>
import TextInput from "@/components/input/TextInput"
import PhoneInput from "@/components/input/PhoneInput"
import NumberInput from "@/components/input/NumberInput"
import EmailInput from "@/components/input/EmailInput"
export default {
  name: "Profile",
  components: {
    TextInput,
    PhoneInput,
    NumberInput, 
    EmailInput
  },
  data() {
    return {
      form: {
        name: undefined,
        age: undefined,
        email: undefined,
        phone: undefined
      } 
    }
  },
  methods: {
    onSubmit(){
      console.log(this.form)
    }
  }
}

</script>

<style scoped>

</style>
