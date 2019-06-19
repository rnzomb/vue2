<template>
  <div class="text-center font-weight-bold">
    <h1>{{ $t('head_users')}}</h1>
    <hr>
    <b-table striped hover :user="users"></b-table>
     {{ users }}
  </div>
</template>


<script>
export default {
  name: "Users",
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      users: []
    }
  },
  mounted () {
    this.$http.get('https://reqres.in/api/users?page=2')
     .then(response => {
       console.log(response.data)
       this.users = response.data.data
     })
     .catch(error => console.log(error))
   }
}

</script>
