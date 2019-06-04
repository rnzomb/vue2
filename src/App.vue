<template>
  <div class="text-center" id="app">
    <div id="nav">
      <b-button to="/">Home</b-button> |
      <b-button to="/about">About</b-button> |  
      <b-button to="/add">AddPage</b-button>  |
      <b-button to="/profile/">Profile</b-button>
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