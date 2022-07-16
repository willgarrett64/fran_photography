<template>
  <nav id="navbar">
    <!-- <span>Martello Photograpy</span> -->
    <a href="/"><img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="" class="h-28"></a>
    <svg @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#000" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </nav>
  <NavbarMenu v-if="showMenu" :toggleMenu="toggleMenu" />
</template>

<script>
import NavbarMenu from './NavbarMenu.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      showMenu: false
    }
  },
  components: {
    NavbarMenu
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
  // mounted() {
  //   let prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     let currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "0";
  //     } else {
  //       document.getElementById("navbar").style.top = "-5rem";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // }
}
</script>

<style  scoped>
#navbar {
  @apply absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center;
  transition: top 0.3s;
  /* background-color: rgba(175, 203, 190, 0.8); */
}

ul {
  @apply flex space-x-4
}

ul li {
  @apply cursor-pointer hover:underline
}
</style>
