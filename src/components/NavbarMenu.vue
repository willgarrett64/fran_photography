<template>
  <nav class="fixed top-0 left-0 h-screen w-screen bg-white z-50 px-6 py-6 overflow-hidden">
    <div class="flex justify-between items-center h-28">
      <a href="/"><img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="" class="h-28"></a>
      <svg @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <ul class="navbar__menu">
      <li class="arima" @click="toggleMenu"><a href="/">Home</a></li>
      <li class="arima" @click="toggleMenu"><a href="/#about">About</a></li>
      <li class="arima" @click="toggleMenu"><a href="/#gallery">Gallery</a></li>
      <li class="arima" @click="toggleMenu"><a href="/#prices">Prices</a></li>
      <li class="arima" @click="toggleMenu"><a href="/#contact">Contact</a></li>
      <li class="arima hidden"><a>EN | DE | BR</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  props: ['toggleMenu'],
  methods: {
    handleClick(sectionId) {
      this.$emit('select-section', sectionId)
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
  @apply text-2xl cursor-pointer hover:underline
}
</style>
