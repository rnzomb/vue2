<template>
  <div id="app">
    <div class="text-center" id="nav">
      <b-button to="/">{{$t('menu_home')}}</b-button> |
      <b-button to="/about">{{$t('menu_about')}}</b-button> |  
      <b-button to="/add">{{$t('menu_add')}}</b-button>  |
      <b-button to="/profile/">{{$t('menu_prof')}}</b-button>
      <hr>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>      
  </div>
</template>

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