<template>
  <b-container class="primer">

    
        <b-form @submit.prevent="onSubmit">
          <b-form-group>
            <b-row>
              <b-col sm="1">
                <p>Name</p>
              </b-col>
              <b-col sm="5">
                <TextInput v-model="form.name"></TextInput>
              </b-col>
            </b-row>
            
            <b-row>
              <b-col sm="1">
                <p>Age</p>
              </b-col>
              <b-col sm="5">
                <NumberInput v-model="form.age"></NumberInput>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="1">
                <p>Email</p>
              </b-col>
              <b-col sm="5">
                <EmailInput v-model="form.email"></EmailInput>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="1">
                <p>Phone</p>
              </b-col>
              <b-col sm="5">
                <PhoneInput v-model="form.phone"></PhoneInput>
              </b-col>
              <b-col sm="7">
                <b-button class="text-center" variant="success" pill type="submit">Submit</b-button>
              </b-col>
            </b-row>
          </b-form-group>
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
