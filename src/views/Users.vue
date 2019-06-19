<template>
  <div class="text-center font-weight-bold">
    <h1>{{ $t('head_users')}}</h1>
    <hr>
    <!--{{userYear}}  -->
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

      <template slot="actions" slot-scope="act">
  <!--      <b-button @click="modalShow = !modalShow" type="button"><v-icon name="edit"/></b-button>            -->
        
        <b-button @click="modalShow = !modalShow" type="button"><v-icon name="trash-alt"/></b-button>

        <b-modal name="delUser" @ok="delUser(act.item.id)" v-model="modalShow">{{$t('diag_delete')}}</b-modal>
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
  </div>
</template>


<script>
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/"
export default {
  name: "Users",
  components: {
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
      avatar: undefined,
      email: undefined,
      modalShow: false
    }
  },
  mounted () {
    this.$http.get('https://reqres.in/api/users')
     .then(response => {
       console.log(response.data)
       this.items = response.data.data
       this.avatar = response.data.avatar
       this.email = response.data.email
       console.log(response.data.total_pages)
     })
     .catch(error => console.log(error))
  },   
  methods: {

    delUser(id) {
      console.log(id)
      this.$http.delete('https://reqres.in/api/users/', {body: {id}})
      
    },
    
    updateUser(id) {

    }
  }
}

</script>
