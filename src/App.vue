<template>
  <div id="app">
    <div class="text-center" id="nav">
      <b-navbar id="navButtons" class="justify-content-center" toggleable="lg">
          <b-button class="mr-2" to="/">{{$t('menu_home')}}</b-button>
          <b-button class="mr-2" to="/about">{{$t('menu_about')}}</b-button>  
          <b-button class="mr-2" to="/add">{{$t('menu_add')}}</b-button>
          <b-button class="mr-2" to="/profile/">{{$t('menu_prof')}}</b-button>
          <b-button class="mr-2" to="/users/">{{$t('menu_users')}}</b-button>
          <b-button class="ml-5" :variant="getLangClass('en')" @click.prevent="setLanguage('en')">English</b-button>
          <b-button class="mx-2" :variant="getLangClass('ru')" @click.prevent="setLanguage('ru')">Russian</b-button>
      </b-navbar>
      <hr>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>      
  </div>
</template>

<script>
export default {
  mounted() {
      if (this.currentLocale) {
        this.$i18n.locale=this.currentLocale
      } 
    
  },
  computed: {
    currentLocale(){
      return this.$store.getters.getLanguage
    }
  },
  methods: {
    setLanguage(locale) {
      this.$i18n.locale=locale
      this.$store.dispatch('saveLanguage', this.$i18n.locale)
    },
    getLangClass(lang) {
      return this.currentLocale === lang ? 'warning' : undefined
    }
  }
}
</script>


<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: all 0.1s;
}

.fade-enter{
  transform: scale(1.1);
  opacity: 0;
}
.fade-leave-to
 {
   transform: scale(0.8);
   opacity: 0;
}

#navButtons {
  background-color: blanchedalmond;
}

</style>