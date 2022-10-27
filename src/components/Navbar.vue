<template>
  <nav id="navbar">
    <!-- logo -->
    <router-link to="/">
      <img src="../assets/fran-logo-colours.png" alt="logo" class="h-20" :class="hideLogo ? 'hidden' : ''">
    </router-link>
    <!-- burger menu -->
    <svg @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:hidden" fill="none" viewBox="0 0 24 24" stroke="#000" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
    <!-- menu -->
    <ul class="navbar__menu_desktop">
      <li @click="scrollTo('about')">{{ lang.nav.links[0] }}</li>
      <div class="services_dropdown">
        <li @click="scrollTo('services')" class="services_dropdown-button">{{ lang.nav.links[1] }}</li>
        <div class="services_dropdown-content">
          <li >
            <router-link :to="{ name: 'ServicePage', params: { service:'pregnancy' } }">{{ lang.nav.services[0] }}</router-link>
          </li>
          <li >
            <router-link :to="{ name: 'ServicePage', params: { service:'newborn' } }">{{ lang.nav.services[1] }}</router-link>
          </li>
          <li >
            <router-link :to="{ name: 'ServicePage', params: { service:'family' } }">{{ lang.nav.services[2] }}</router-link>
          </li>
          <li >
            <router-link :to="{ name: 'ServicePage', params: { service:'portraits' } }">{{ lang.nav.services[3] }}</router-link>
          </li>
        </div>
      </div>
      <!-- FAQs -->
      <li >
        <router-link :to="{ name: 'FaqsPage' }">{{ lang.nav.links[2] }}</router-link>
      </li>

      <li @click="scrollTo('contact')">{{ lang.nav.links[3] }}</li>
      <div class="relative">
        <Listbox v-model="language">
          <div class="relative">
            <ListboxButton class="listButton">
              <img :src="getSrc(language)" alt="flag" srcset="" class="h-4"><ChevronDownIcon class="w-4" />
            </ListboxButton>
            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions class="listOptions">
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-for="language in languages"
                  :key="language.name"
                  :value="language"
                >
                  <li
                    class="listOption"
                    :class="{
                      'selected': selected,
                      'active': active,
                    }"
                  >
                    <div class="flex items-center">
                      {{ language.name }}
                      <img :src="getSrc(language)" alt="flag" srcset="" class="h-4 ml-1">
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </ul>
  </nav>
  <NavbarMenu v-if="showMenu" :toggleMenu="toggleMenu" />
</template>

<script>
import NavbarMenu from './NavbarMenu.vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { mapGetters } from 'vuex'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

const languages = [
  {
    name: 'Deutsch',
    code: 'de',
    image: 'germany-flag.png'
  },
  {
    name: 'English',
    code: 'en',
    image: 'uk-flag.png'
  },
  {
    name: 'Português',
    code: 'pt',
    image: 'brazil-flag.png'
  }
]

export default {
  name: 'Navbar',
  data() {
    return {
      language: languages[2],
      languages: languages,
      showMenu: false,
      windowWidth: window.innerWidth
    }
  },
  computed: {
    ...mapGetters(['lang']),
    hideLogo() {
      return this.$route.name === 'LandingPage' && this.md
    },
    md() {
      return this.windowWidth >= 768
    }
  },
  components: {
    ChevronDownIcon,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    NavbarMenu
  },
  methods: {
    getSrc(language) {
      return require(`../assets/flags/${language.image}`)
    },
    onWindowResize() {
      this.windowWidth = window.innerWidth
    },
    async scrollTo(elementId) {
      this.toggleMenu()
      if (this.$route.name !== 'LandingPage') await this.$router.push({ name: 'LandingPage', hash: `#${elementId}` })
      else document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth'
      })
    },
    toggleMenu() {
      if (!this.md) this.showMenu = !this.showMenu
    }
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onWindowResize)
  },
  watch: {
    language() {
      this.$store.commit('setLanguage', this.language.code)
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
  @apply hidden md:flex items-center space-x-8 mr-4;
}

.navbar__menu_desktop li {
  @apply cursor-pointer;
  font-size: 1.5rem;
}

.navbar__menu_desktop li:hover {
  color: var(--fran-blue-dark);
}

.listButton {
  @apply capitalize relative w-max flex items-center space-x-1 cursor-pointer;
}
.listOptions {
  @apply absolute right-0 top-6 z-10 w-max py-1 mt-1 pr-5 pl-2 rounded-md bg-white shadow-lg focus:outline-none shadow-none;
}
li.listOption {
  @apply relative flex items-center justify-end bg-transparent cursor-pointer py-2 cursor-default select-none;
  font-size: 1rem;
}
li.listOption.active, li.listOption.selected {
  color: var(--fran-blue-medium);
}



.services_dropdown {
  position: relative;
  display: inline-block;
}
.services_dropdown-button {
  border: none;
}
.services_dropdown-content {
  @apply rounded hidden absolute bg-white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.services_dropdown-content a {
  @apply text-base py-2 block hover:text-white;
}
.services_dropdown:hover .services_dropdown-content {
  @apply block;
}
.services_dropdown-content a:hover {
  background-color: var(--fran-blue);
}

</style>
