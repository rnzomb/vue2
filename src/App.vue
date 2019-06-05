<template>
  <div id="app">
    <div class="text-center" id="nav">
      <b-button to="/">{{$t('menu_home')}}</b-button> |
      <b-button to="/about">{{$t('menu_about')}}</b-button> |  
      <b-button to="/add">{{$t('menu_add')}}</b-button>  |
      <b-button to="/profile/">{{$t('menu_prof')}}</b-button> |
      <b-button :variant="getLangClass('en')" @click.prevent="setLanguage('en')">English</b-button> |
      <b-button :variant="getLangClass('ru')" @click.prevent="setLanguage('ru')">Russian</b-button>
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

</style>