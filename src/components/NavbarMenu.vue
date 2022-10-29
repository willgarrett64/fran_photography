<template>
  <nav class="fixed top-0 left-0 h-screen w-full z-50 px-6 py-6 overflow-hidden">
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
      <div class="space-y-3">
        <li @click="goTo('services')">{{ lang.nav.links[1] }}</li>
        <li class="service" @click="toggleMenu">
          <router-link :to="{ name: 'ServicePage', params: { service:'pregnancy' } }">{{ lang.nav.services[0] }}</router-link>
        </li>
        <li class="service" @click="toggleMenu">
          <router-link :to="{ name: 'ServicePage', params: { service:'newborn' } }">{{ lang.nav.services[1] }}</router-link>
        </li>
        <li class="service" @click="toggleMenu">
          <router-link :to="{ name: 'ServicePage', params: { service:'family' } }">{{ lang.nav.services[2] }}</router-link>
        </li>
        <li class="service" @click="toggleMenu">
          <router-link :to="{ name: 'ServicePage', params: { service:'portraits' } }">{{ lang.nav.services[3] }}</router-link>
        </li>
      </div>
      <li @click="toggleMenu">
        <router-link :to="{ name: 'FaqsPage' }">{{ lang.nav.links[2] }}</router-link>
      </li>
      <li @click="goTo('contact')">Contato</li>
      <li class="lang space-x-2">
        <span @click="selectLanguage('en')" :class="selectedLanguage === 'en' ? 'underline' : ''">EN</span>
        <span>|</span>
        <span @click="selectLanguage('pt')" :class="selectedLanguage === 'pt' ? 'underline' : ''">PT</span>
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
}

.navbar__menu {
  @apply flex flex-col justify-between pt-6;
  height: calc(100vh - 12rem);
}

.navbar__menu li {
  @apply text-2xl cursor-pointer;
  color: var(--fran-blue-dark);
  -webkit-tap-highlight-color: transparent;
}
.navbar__menu li.service {
  @apply text-xl;
}

@media (hover: hover) {
  .navbar__menu li:hover {
    @apply underline
  }
}

.navbar__menu li.lang {
  @apply text-sm;
}
</style>
