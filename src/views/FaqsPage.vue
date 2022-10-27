<template>
  <div class="view__content">
    <div class="pageHeader">
      <h2 class="arima">Dúvidas</h2>
    </div>
    <div class="w-full max-w-5xl m-auto px-4">
      <div class="pageHeader_divider" />
    </div>
    <div>
      <!-- tabs -->
      <div class="relative flex justify-center w-full px-4 mt-4 sm:mt-0">
        <Listbox v-model="selectedCategory">
          <div class="relative w-full">
            <p class="text-left mb-2 sm:hidden">Choose a category</p>
            <ListboxButton class="listButton">
              <span>{{ selectedCategory }}</span><ChevronDownIcon class="w-4" />
            </ListboxButton>
            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions class="listOptions" :static="sm">
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-for="(questions, category) in faqs"
                  :key="category"
                  :value="category"
                >
                  <li
                    class="listOption"
                    :class="{
                      'selected': selected,
                      'active': active,
                    }"
                  >
                    <div class="flex items-center">
                      {{ category }}
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <!-- faqs -->
      <div class="max-w-5xl px-4 m-auto">
        <div class="mt-8 flex flex-col space-y-2">
          <Disclosure
            v-slot="{ open }"
            v-for="faq in faqs[selectedCategory]"
            :key=faq.q
          >
            <DisclosureButton class="disclosure__button">
              <span>{{ faq.q }}</span>
              <ChevronRightIcon class="chevron w-5" :class="open && 'rotate-90 transform'"/>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel class="disclosure__panel">
                <span>{{ faq.a }}</span>
              </DisclosurePanel>
            </transition>
          </Disclosure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

export default {
  name: 'FaqsPage',
  components: {
    ChevronDownIcon,
    ChevronRightIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
  },
  data() {
    return {
      faqs: {
        general: [
          {
            q: "Where can we do the photoshoot?",
            a: "The photoshoot can be done anywhere you like. Personally I love taking working outside, using nature as the perfect backdrop to your photos. However, if you prefer to have indoor shots, I recommend using the comfort of your own home as this will help you relax and get the best natural photos. Alternatively, I am happy to offer my own personal studio in my house. I am happy to discuss all the options with you."
          },
          {
            q: "How many photos will I receive?",
            a: "This depends on your package. My standard package is to deliver 50 digital photos and 15 printed photos, however we can of course discuss if you want more or less."
          },
          {
            q: "How long does it take to receive my pictures?",
            a: "I pride myself in the post-production stage of my work. This involves selecting the best photos from the shoot, editing the photos such as correcting lighting, and preparing them all to deliver to you. This normally takes about 2-3 weeks after the day of the shoot"
          }
        ],
        pregnancy: [
          {
            q: "What is the best stage of pregnancy to do the photos?",
            a: "My recommendation is to wait until at least 26 weeks so we can capture your beautiful bump in all its glory. Id also recommend booking your photoshoot before the 38th week because things can get a little uncomfortable towards the end. At the end of the day though, all stages of pregnancy are beautiful and I just want to capture this magical moment in your life"
          },
          {
            q: "Can I bring my partner?",
            a: "Of course you can! Whilst pregnancy is a special moment in the life of every woman, it's also a moment we share with our partners, so I encourage them to take part in the photoshoot."
          },
          {
            q: "What shall I wear?",
            a: "Whatever you feel comfortable in. Something tight works well as it really shows off your belly, however if you want some shots in just lingerie, or with your bump out, that's absolutely fine. Sometimes bringing two or three outfits is a good idea to get a variety of photos."
          }
        ],
        newborn: [
          {
            q: "What age can I take newborn photos until?",
            a: "Whislt I call them 'newborn' photos, in fact I am happy to take photos of your little one until they older. When they start crawling and walking however, I recommend the family package because this includes a longer photoshoot which, trust me, is necessary to get a decent number of quality photos.."
          },
          {
            q: "Do you put my baby in poses?",
            a: "My style is to capture moments naturally, so I tend to avoid putting the baby in specific positions for photos. However, if there is something you'd particularly like, just let me know. My request however is that you're the one who poses your child as you know them best and they will be most comfortable with you."
          }
        ],
        family: [
          {
            q: "How many family members can I bring?",
            a: "The family shoot includes up to 5 people. It's possible to bring more, however there is an extra charge because with more people, this inevitibly requires more time in the photoshoot to get the necessary number of photos of all of your loved ones."
          },
          {
            q: "Where can we do the photoshoot?",
            a: "The photoshoot can be done anywhere you like. Personally I love taking working outside, using nature as the perfect backdrop to your photos. However, if you prefer to have indoor shots, I recommend using the comfort of your own home as this will help you relax and get the best natural photos. Alternatively, I am happy to offer my own personal studio in my house. I am happy to discuss all the options with you."
          }
        ],
        portrait: [
          {
            q: "Where can we do the photoshoot?",
            a: "The photoshoot can be done anywhere you like. Personally I love taking working outside, using nature as the perfect backdrop to your photos. However, if you prefer to have indoor shots, I recommend using the comfort of your own home as this will help you relax and get the best natural photos. Alternatively, I am happy to offer my own personal studio in my house. I am happy to discuss all the options with you."
          }
        ]
      },
      selectedCategory: 'general',
      windowWidth: window.innerWidth
    }
  },
  computed: {
    ...mapGetters(['lang']),
    sm() {
      return this.windowWidth >= 640
    }
  },
  methods: {
    onWindowResize() {
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onWindowResize)
  },
}
</script>

<style scoped>
.tab {
  @apply px-4 sm:py-4 cursor-pointer text-2xl;
}
.tab:hover {
  color: var(--fran-blue-dark);
}
.tab.selected {
  color: var(--fran-blue-dark);
}

/* faq accordians */
.disclosure__button {
  @apply w-full flex relative items-center justify-center text-xl px-8 py-2 rounded;
  background-color: var(--fran-blue);
}
.disclosure__button:hover {
  color: white;
}
.disclosure__button .chevron {
  @apply w-5 absolute right-2 sm:right-5
}
.disclosure__panel {
  @apply text-lg py-2
}

.listButton {
  @apply bg-white capitalize relative flex items-center justify-between space-x-1 cursor-pointer px-4 py-2 text-xl rounded-lg w-full border-2;
  @apply sm:hidden;
  border-color: var(--fran-blue);
}
.listOptions {
  @apply absolute capitalize bg-white z-10 w-full py-1 mt-1 rounded-lg shadow-lg focus:outline-none shadow-none sm:py-4 cursor-pointer text-xl border-2;
  border-color: var(--fran-blue);

}
li.listOption {
  @apply relative flex items-center bg-transparent cursor-pointer py-1 cursor-default select-none px-4;
}
li.listOption.active, li.listOption.selected {
  color: var(--fran-blue-medium);
}

@screen sm {
  .listOptions {
    @apply flex bg-transparent relative justify-center space-x-4 border-0
  }
}

</style>