<template>
  <nav class="fixed top-0 left-0 h-screen w-screen bg-white z-50 px-6 py-6 overflow-hidden">
    <div class="flex justify-between items-center h-28">
      <router-link to="/"><img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="" class="h-28"></router-link>
      <svg @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <ul class="navbar__menu">
      <li class="ibarra" @click="toggleMenu"><router-link to="/">Home</router-link></li>
      <li class="ibarra" @click="scrollTo('about')">About</li>
      <li class="ibarra" @click="scrollTo('gallery')">Gallery</li>
      <li class="ibarra" @click="scrollTo('prices')">Prices</li>
      <li class="ibarra" @click="scrollTo('contact')">Contact</li>
      <li class="ibarra hidden"><a>EN | DE | BR</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  props: ['toggleMenu'],
  methods: {
    scrollTo(elementId) {
      this.toggleMenu()
      document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style  scoped>
.navbar__menu {
  @apply flex flex-col justify-around;
  height: calc(100vh - 8rem);
}

.navbar__menu li {
  @apply text-2xl cursor-pointer hover:underline;
  color: var(--fran-blue-dark);
}
</style>
