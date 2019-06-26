<template>
  <b-container>
    <div class="text-center font-weight-bold">
      <h1>{{ $t('head_users')}}</h1>
      <hr>
      <b-table
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        bordered head-variant="light"
        striped hover
      >
        <template slot="email" slot-scope="mail">
          <a :href="mail.item.email">{{ mail.item.email }}</a>
        </template>

    <!--    <template slot="avatar" slot-scope="row">
          <img :src="row.value" />
        </template>  -->

        <template slot="actions" slot-scope="row">
          
          <b-button @click="onUpdate(row.item.id)" class="float-left" variant="success" pill type="button"><v-icon name="edit"/></b-button>
          <b-button @click="onDelete(row.item.id)" class="float-right" variant="danger" pill type="button"><v-icon name="trash-alt"/></b-button>          
        </template>

        <template slot="show_details" slot-scope="row">
          <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
            {{ $t('btn_avatar')}}
          </b-form-checkbox>
        </template>

        <template slot="row-details" slot-scope="data">
          <b-card 
          :img-src="data.item.avatar"
          img-alt="Image"
          style="max-width: 20rem;"
          class="mb-2"
          >  
          </b-card>
        </template>
      </b-table>
      <p>{{errorMsg}}</p>
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form @submit.prevent="updateUser" id="userDataSubmit" :hidden="hideUpdateForm">
            <TextInput input-class="text-center" :validate="validateName" v-model="firstName" :required="true" id="firstName" :label="fieldFirstName" :description="msgName" 
            :min-length="3" :max-length="10" size="20"> </TextInput>
            <TextInput input-class="text-center" :validate="validateName" v-model="lastName" :required="true" id="lastName" :label="fieldLastName" :description="msgLastName" 
            :min-length="3" :max-length="10"> </TextInput>
            <EmailInput input-class="text-center" v-model="email" :required="true" id="email" :label="fieldEmail" :description="msgEmail"></EmailInput>
        
            <b-button class="" variant="success" type="submit"><v-icon name="save" scale="3"/></b-button>
            <a>.|.</a>
            <b-button @click="onCancel()" class="top-cover" variant="danger"><v-icon name="save" scale="3"/></b-button>
              
          </b-form>
        </b-col>
      </b-row> 
    </div>
    <b-modal name="delUser" @ok="delUser" v-model="deleteModalShow">{{$t('diag_delete')}}</b-modal>
  </b-container>
</template>


<script>
import TextInput from "@/components/input/TextInput"
import EmailInput from "@/components/input/EmailInput"
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/"
export default {
  name: "Users",
  components: {
    TextInput,
    EmailInput,
    VIcon
  },
  data() {
    return {
      sortBy: 'last_name',
        sortDesc: true,
        
      items: [],
      deleteModalShow: false,
      hideUpdateForm: true,
      userId: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      errorMsg: undefined
    }
  },

  computed: {
    fields() {
      return [
        { key: 'first_name', label: this.$i18n.t("field_firstName") },
        { key: 'last_name', label: this.$i18n.t("field_lastName") },
        { key: 'email', label: this.$i18n.t('field_email') },
        { key: 'show_details', label: this.$i18n.t('field_showDetails') },
        { key: 'actions', label: this.$i18n.t('field_actions') }
      ]
    },
 
    fieldFirstName() {
      return this.$i18n.t('field_firstName')
    },
    fieldLastName() {
      return this.$i18n.t('field_lastName')
    },
    fieldEmail() {
      return this.$i18n.t('field_email')
    },
    msgName() {
      return this.$i18n.t('msg_name')
    },
    msgLastName() {
      return this.$i18n.t('msg_lastName')
    },
    msgEmail() {
      return this.$i18n.t('msg_email')
    }
  },

  mounted() {
    this.getData()
  },   
  methods: {
    onCancel() {
      this.hideUpdateForm = !this.hideUpdateForm
    },
    onDelete(id) {
      this.userId = id
      this.deleteModalShow = true
    },

    onUpdate(id) {
      this.userId = id
      this.firstName = this.items.find(x => x.id === id).first_name
      this.lastName = this.items.find(x => x.id === id).last_name
      this.email = this.items.find(x => x.id === id).email
      this.hideUpdateForm = !this.hideUpdateForm
    },

    delUser() {
      console.log(this.userId)
      this.$http.delete(`https://reqres.in/api/users/${this.userId}`)
      .catch(error => {
          if (error.response) {
            this.validateReqStatus(error.response.status)
          } 
        })
      this.userId = undefined   
      this.getData()   
    },

    getData() {
       this.$http.get('https://reqres.in/api/users')
        .then(response => {
          this.items = response.data.data
        })
        .catch(error => {
          if (error.response) {
            this.validateReqStatus(error.response.status)
          } 

        })
    },

    validateReqStatus (status) {  
      if(status == 404) {
        this.errorMsg = this.$i18n.t('msg_status404')
      } else {
        status >= 400 && status < 500 ? this.errorMsg = this.$i18n.t('msg_status400') : undefined
        status >= 500 && status < 600 ? this.errorMsg = this.$i18n.t('msg_status500') : undefined
      }          
    },
    
    updateUser(id) {
      console.log(this.firstName)
      if (this.validateName(this.firstName) !== true) {    
        return
      }
      if (this.validateName(this.lastName) !== true) {     
        return
      }
      const userData = [
           'first_name: ' + this.firstName,
           'last_name: ' + this.lastName,
           'email: ' + this.email
      ]
      this.$http.put(`https://reqres.in/api/users/${this.userId}`, {userData})
        .then(response => console.log(response))
        .catch(error => {
          if (error.response) {
            this.validateReqStatus(error.response.status)
          }
          this.userId = undefined
          this.getData()  
        })
    },
    
    validateName(v) {
      return v === undefined ? true : v.length >= 3 && /^[0-9a-zA-Z ]+$/.test(v) ? true : this.$i18n.t('msg_wrngName')
    }
  }
}

</script>
