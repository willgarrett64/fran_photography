<template>
  <div>
    <Navbar />
    <HelloWorld />
    <AboutMe />
    <GallerySection />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import GallerySection from './components/GallerySection.vue'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    AboutMe,
    GallerySection,
    HelloWorld,
    Navbar
  }
}
</script>

<style>
#app {
  @apply bg-gray-200;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
