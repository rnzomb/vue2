<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
        <!--{{ form.name }}-->
      <TextInput v-model="form.name" horizontalLabel :required="true" id="firstName" :label="fieldName" :description="msgName" 
       :min-length="3" :max-length="10"></TextInput>
      <NumberInput v-model="form.age" horizontalLabel :required="true" id="Age" :label="fieldAge" :description="msgAge"></NumberInput>
      <EmailInput v-model="form.email" horizontalLabel :required="true" id="email" :label="fieldEmail" :description="msgEmail"></EmailInput>
      <PhoneInput v-model="form.phone" horizontalLabel :required="true" id="phoneNumber" :label="fieldPhone" :description="msgPhone"></PhoneInput>
      <b-button variant="success" pill type="submit">{{$t('btn_subm')}}</b-button>          
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
  computed: {
    fieldName() {
      return this.$i18n.t('field_name')
    },
    fieldAge() {
      return this.$i18n.t('field_age')
    },
    fieldEmail() {
      return this.$i18n.t('field_email')
    },
    fieldPhone() {
      return this.$i18n.t('field_tel')
    },
    msgName() {
      return this.$i18n.t('msg_name')
    },
    msgAge() {
      return this.$i18n.t('msg_age')
    },
    msgEmail() {
      return this.$i18n.t('msg_email')
    },
    msgPhone() {
      return this.$i18n.t('msg_tel')
    },
    

  },
  methods: {
    onSubmit(){
      console.log(this.form)
    },
    checkTitle(v){
      v.length
    }
  }
}

</script>

<style scoped>

</style>
