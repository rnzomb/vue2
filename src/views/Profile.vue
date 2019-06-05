<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
        <!--{{ form.name }}-->
      <TextInput v-model="form.name" horizontalLabel :required="true" id="firstName" label="Name" description="Enter your name"></TextInput>
      <NumberInput v-model="form.age" horizontalLabel :required="true" id="Age" label="Age" description="Enter your age"></NumberInput>
      <EmailInput v-model="form.email" horizontalLabel :required="true" id="email" label="Email" description="Enter your Email"></EmailInput>
      <PhoneInput v-model="form.phone" horizontalLabel :required="true" id="phoneNumber" label="Phone" description="Enter your phone number"></PhoneInput>
    
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
