<template>
  <nav class="fixed top-0 left-0 h-screen w-screen z-50 px-6 py-6 overflow-hidden">
    <div class="flex justify-between items-center h-20">
      <!-- logo -->
      <div @click="goTo('')">
        <img src="../assets/fran-logo-colours.png" alt="logo" srcset="" class="h-20">
      </div>
      <!-- close menu -->
      <svg @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
    <!-- menu -->
    <ul class="navbar__menu">
      <li @click="goTo('about')">{{ lang.nav.links[0] }}</li>
      <li @click="goTo('services')">{{ lang.nav.links[1] }}</li>
      <li @click="toggleMenu">
        <router-link :to="{ name: 'ServicePage', params: { service:'pregnancy' } }">{{ lang.nav.services[0] }}</router-link>
      </li>
      <li @click="toggleMenu">
        <router-link :to="{ name: 'ServicePage', params: { service:'newborn' } }">{{ lang.nav.services[1] }}</router-link>
      </li>
      <li @click="toggleMenu">
        <router-link :to="{ name: 'ServicePage', params: { service:'family' } }">{{ lang.nav.services[2] }}</router-link>
      </li>
      <li @click="toggleMenu">
        <router-link :to="{ name: 'ServicePage', params: { service:'portraits' } }">{{ lang.nav.services[3] }}</router-link>
      </li>
      <li @click="toggleMenu">
        <router-link :to="{ name: 'FaqsPage' }">{{ lang.nav.links[2] }}</router-link>
      </li>
      <li @click="goTo('contact')">Contato</li>
      <li class="lang space-x-2">
        <button @click="selectLanguage('en')" :class="isSelected('en') ? 'selected' : ''">EN</button>
        <span>|</span>
        <button @click="selectLanguage('pt')" :class="isSelected('pt') ? 'selected' : ''">PT</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'NavbarMenu',
  props: ['toggleMenu'],
  computed: {
    ...mapState(['selectedLanguage']),
    ...mapGetters(['lang'])
  },
  methods: {
    async goTo(elementId) {
      this.toggleMenu()
      if (this.$route.name === 'LandingPage' && this.$route.hash === `#${elementId}`) {
        const el = document.getElementById(elementId)
        if (el) el.scrollIntoView()
      }
      else await this.$router.push({ name: 'LandingPage', hash: `#${elementId}` })
    },
    isSelected(lang) {
      return this.selectedLanguage === lang
    },
    selectLanguage(lang) {
      this.$store.commit('setLanguage', lang)
    }
  }
}
</script>

<style  scoped>
nav {
  background-color: rgb(242, 242, 242);
  /* background-image: url("../assets/placeholders/white-background-2.jpg"); */
  overflow-x: hidden;
  object-fit: cover;
  background-position: center;
}

.navbar__menu {
  @apply flex flex-col justify-between pt-4;
  height: calc(100vh - 8rem);
}

.navbar__menu li {
  @apply text-2xl cursor-pointer hover:underline;
  color: var(--fran-blue-dark);
}

.navbar__menu li.lang {
  @apply text-sm;
}

button.selected {
  @apply underline
}
</style>
