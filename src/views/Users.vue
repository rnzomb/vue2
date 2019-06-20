<template>
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
        
        <b-button @click="onUpdate(row.item.id)" type="button"><v-icon name="edit"/></b-button>
        <b-button @click="onDelete(row.item.id)" type="button"><v-icon name="trash-alt"/></b-button>
        <b-modal name="delUser" @ok="delUser" v-model="deleteModalShow">{{$t('diag_delete')}}</b-modal>
      </template>



      <template slot="show_details" slot-scope="row">
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Show avatar
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
    
    <b-form @submit.prevent="updateUser" :hidden="hideUpdateForm">
        <TextInput v-model="firstName" :required="true" id="firstName" :label="fieldName" :description="msgName" 
        :min-length="3" :max-length="10"> </TextInput>
        <TextInput v-model="lastName" :required="true" id="lastName" :label="fieldLastName" :description="msgLastName" 
        :min-length="3" :max-length="10"> </TextInput>
        <EmailInput v-model="email" :required="true" id="email" :label="fieldEmail" :description="msgEmail"></EmailInput>
        <b-button variant="success"><v-icon name="plus" scale="2" spin/></b-button>
        <b-button class="btn btn-danger" pill type="cancel">
           <v-icon label="No Photos">
           <v-icon name="plus"></v-icon>
           <v-icon name="ban" scale="2" class="alert"></v-icon>
           </v-icon>
        </b-button>
    </b-form>
  </div>
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
        fields: [
          { key: 'last_name', sortable: true },
          { key: 'first_name', sortable: true },
          { key: 'email', sortable: true },
          'show_details',
          { key: 'actions', sortable: false }
        ],
      items: [],
      deleteModalShow: false,
      hideUpdateForm: true,
      userId: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined
    }
  },

  computed: {
    fieldName() {
      return this.$i18n.t('field_name')
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
      this.userId = undefined   
      this.getData()   
    },
    getData() {
       this.$http.get('https://reqres.in/api/users')
        .then(response => {
          this.items = response.data.data
        })
        .catch(error => console.log(error))
    },
    
    updateUser(id) {
      const userData = [
           'first_name: ' + this.firstName,
           'last_name: ' + this.lastName,
           'email: ' + this.email
      ]
      this.$http.put(`https://reqres.in/api/users/${this.userId}`, {userData})
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.userId = undefined
      this.getData()  
      
    },
    validateName(v) {
      return v.length >= 3 && /^[0-9a-zA-Z ]+$/.test(v) ? true : this.$i18n.t('msg_wrngname')
    }
  }
}

</script>
