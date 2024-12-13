<template>
  <div class="w-full h-full flex flex-col relative">

    <nav-bar />
  </div>

    <router-view />
    
    <FooterSection />
</template>

<script setup>
import NavBar from './components/layouts/navbar/NavBar.vue'
import FooterSection from './components/layouts/footer/FooterSection.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
