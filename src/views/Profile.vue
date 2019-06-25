<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
        <!--{{ form.name }}-->
      <TextInput v-model="form.name" horizontalLabel :required="true" id="firstName" :label="fieldName" :description="msgName" 
        :validate="validateName" :min-length="3" :max-length="10"> </TextInput>
      <NumberInput v-model="form.age" horizontalLabel :required="true" id="Age" :label="fieldAge" :description="msgAge" :validate="validateAge"></NumberInput>
      <EmailInput v-model="form.email" horizontalLabel :required="true" id="email" :label="fieldEmail" :description="msgEmail"></EmailInput>
      <PhoneInput v-model="form.phone" type="tel" horizontalLabel :required="true" id="phoneNumber" :label="fieldPhone" :description="msgPhone" 
        :validate="validatePhone"></PhoneInput>
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
    }
    

  },
  methods: {
    onSubmit(){
      console.log(this.form)
    },
    validateName(v) {
      return v === undefined ? true : v.length >= 3 && /^[0-9a-zA-Z ]+$/.test(v) ? true : this.$i18n.t('msg_wrngName')
    },
    validateAge(a){
      console.log(a)
      return a === undefined ? true : a < 110 ? true : this.$i18n.t('msg_wrngAge')
    },
    validatePhone (p){
      return p === undefined ? true : p.length >= 3 && /^[0-9 +()]+$/.test(p) ? true : this.$i18n.t('msg_wrngPhone')
    }
  }
}

</script>

<style scoped>

</style>
