<template>
  <nav id="navbar">
    <!-- <span>Martello Photograpy</span> -->
    <router-link to="/"><img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="" class="h-28 md:hidden"></router-link>
    <!-- burger menu -->
    <svg @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:hidden" fill="none" viewBox="0 0 24 24" stroke="#000" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <ul class="navbar__menu_desktop">
      <li class="dosis" @click="scrollTo('about')">About</li>
      <li class="dosis" @click="scrollTo('gallery')">Gallery</li>
      <li class="dosis" @click="scrollTo('prices')">Prices</li>
      <li class="dosis" @click="scrollTo('contact')">Contact</li>
      <li class="dosis hidden"><a>EN | DE | BR</a></li>
    </ul>
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
    scrollTo(elementId) {
      this.toggleMenu()
      document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth'
      })
    },
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
  @apply absolute top-0 w-full md:h-28 z-50 px-6 py-6 flex justify-between items-center;
  transition: top 0.3s;
  /* background-color: rgba(175, 203, 190, 0.8); */
}

.navbar__menu_desktop {
  @apply hidden md:flex space-x-8 mr-4;
}

.navbar__menu_desktop li {
  @apply cursor-pointer;
  font-size: 1.9rem;
}

.navbar__menu_desktop li:hover {
  color: var(--fran-blue-dark);
}
</style>
