<template>
  <div class="h-screen">
    <Navbar />
    <HelloWorld />
    <div class="flex items-center justify-center bg-gray-700 h-1/3 w-full">
      <h2 class="text-white text-2xl cursive">Some interesting quote will go here</h2>
    </div>
    <AboutMe />
    <div class="flex items-center justify-center bg-gray-700 h-1/3 w-full">
      <h2 class="text-white text-2xl cursive">Some interesting quote will go here</h2>
    </div>

    <div class="parallax test h-1/2"></div>

    <div class="flex items-center justify-center bg-gray-700 h-1/3 w-full">
      <h2 class="text-white text-2xl cursive">Some interesting quote will go here</h2>
    </div>
    <GallerySection />
    <div class="flex items-center justify-center bg-gray-700 h-1/3 w-full">
      <h2 class="text-white text-2xl cursive">Some interesting quote will go here</h2>
    </div>
    <PricesSection />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import GallerySection from './components/GallerySection.vue'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import PricesSection from './components/PricesSection.vue'

export default {
  name: 'App',
  components: {
    AboutMe,
    GallerySection,
    HelloWorld,
    Navbar,
    PricesSection
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

.parallax {
  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.overlay {
  @apply w-full h-full bg-gray-500 absolute top-0;
  opacity: 0.4;
}

.cursive {
  font-family: 'Brush Script MT';
}

.test {
  background-image: url("./assets/placeholders/landscape-3.jpg");
}
</style>
