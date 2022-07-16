<template>
  <div class="h-screen">
    <Navbar />
    <body class="h-full ">
      <router-view />
    </body>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
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

.test {
  background-image: url("./assets/placeholders/landscape-3.jpg");
}
</style>
