<template>
  <div class="text-center font-weight-bold">
    <h1>{{ $t('head_users')}}</h1>
    <hr>
    <b-table striped hover :items="items"></b-table>
     {{ items }}
  </div>
</template>


<script>
export default {
  name: "Users",
  data() {
    return {
      items: []
    }
  },
  mounted () {
    this.axios
      .get('https://reqres.in/api/users/?page=2')
      .then(response => (this.items = response))
      console.log(this.items)
    
  } 
}
</script>
