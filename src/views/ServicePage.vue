<template>
  <div class="view__content px-4 max-w-5xl m-auto ">
    <div class="pageHeader">
      <h2 class="arima">{{ lang.servicePage.services[collectionName].header }}</h2>
    </div>
    <div class="text-lg">
      <p>{{ lang.servicePage.services[collectionName].text }}</p>
    </div>
    <div class="mt-4 space-y-4">
      <div class="pageHeader_divider"></div>
      <div class="gallery__collection">
        <img
          v-for="(image, index) in currentCollection"
          :key="image.name"
          :src="getSrc(image)"
          :class="image.class"
          @click="openGallery(index)"
        />
        <button @click="openGallery(0)" class="viewMoreButton">{{ lang.servicePage.generic.more }}</button>
      </div>

      <div class="prices__section">
        <h3 class="text-2xl">{{ lang.servicePage.generic.prices }}</h3>

        <p class="pt-4 ibarra text-base">{{ lang.servicePage.generic.packageDetail.numberOfPhotos }}</p>


        <ul class="py-4">
          <li>1 hour photoshoot</li>
          <li>50 digital photos</li>
          <li>15 printed photos</li>
        </ul>
        <span>€190</span>

        <p class="pt-4 ibarra text-base">{{ lang.servicePage.generic.packageDetail.packageDifferences }}<router-link class="underline" :to="{ name: 'FaqsPage' }">{{ lang.servicePage.generic.packageDetail.link }}</router-link>.</p>

        <p class="pt-4 ibarra text-base">{{ lang.servicePage.generic.payment }}</p>
      </div>

      <div class="contact__section">
        <span class="name text-2xl">Francine Martello</span>
        <div class="flex items-center justify-center">
          <div class="icon mr-2"><PhoneIcon class="w-5" /></div>
          <a h-ref="tel:004915752473422">+49 15752473422</a>
        </div>
        <div class="flex items-center justify-center">
          <div class="icon mr-2"><MailIcon class="w-5" /></div>
          <a href="mailto:martellofrancine@gmail.com">martellofrancine@gmail.com</a>
        </div>
        <div class="flex items-center justify-center">
          <div class="icon mr-2"><LocationMarkerIcon class="w-5" /></div>
          <a href="https://goo.gl/maps/JMFcUwm6fEnvaSeD8" target="#">Kemptenerstraße 66, 87600 Kaufbeuren</a>

        </div>
        <div class="social__icons">
          <!-- facebook link -->
          <a href="https://www.facebook.com/francine.martello" target="#"><img class="social__icon" src="../assets/placeholders/icons/facebook_icon.png" alt="facebook icon"></a>
          <!-- instagram link -->
          <a href="https://www.instagram.com/martello_fran_photography/" target="#"><img class="social__icon" src="../assets/placeholders/icons/instagram_icon.png" alt="instagram icon"></a>
          <!-- whatsapp link -->
          <a href="https://api.whatsapp.com/send?phone=+4915752473422" target="#"><img class="social__icon" src="../assets/placeholders/icons/whatsapp_icon.png" alt="whatsapp icon"></a>
        </div>
      </div>
    </div>
    <GallerySlideshow
      v-if="showGallery"
      :images="currentCollection"
      :startingIndex="galleryStartingIndex"
      @modal-close="closeGallery"
    />
  </div>
</template>

<script>
import GallerySlideshow from '@/components/GallerySlideshow'
import { mapGetters } from 'vuex'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/vue/solid'

export default {
  name: 'ServicePage',
  props: ['title'],
  components: {
    GallerySlideshow,
    LocationMarkerIcon,
    MailIcon,
    PhoneIcon
  },
  data() {
    return {
      collections: {
        pregnancy: [
          {
            name: 'portrait-1.jpg',
            class: 'portrait'
          },
          {
            name: 'landscape-1.jpg',
            class: 'landscape'
          },

          {
            name: 'landscape-2.jpg',
            class: 'landscape'
          },
          {
            name: 'portrait-2.jpg',
            class: 'portrait'
          },
          {
            name: 'landscape-3.jpg',
            class: 'landscape full-width'
          }
        ],
        newborn: [
          {
            name: 'newborn-l-1.jpg',
            class: 'landscape'
          },
          {
            name: 'newborn-p-1.jpg',
            class: 'portrait'
          },
          {
            name: 'newborn-l-1.jpg',
            class: 'landscape'
          }
        ],
        family: [
          {
            name: 'family-l-1.jpg',
            class: 'landscape'
          },
          {
            name: 'family-p-1.jpg',
            class: 'portrait'
          },
          {
            name: 'family-l-1.jpg',
            class: 'landscape'
          }
        ],
        portraits: [
          {
            name: 'portrait-l-1.jpg',
            class: 'landscape'
          },
          {
            name: 'portrait-p-1.jpg',
            class: 'portrait'
          },
          {
            name: 'portrait-l-1.jpg',
            class: 'landscape'
          }
        ]
      },
      galleryStartingIndex: 0,
      showGallery: false
    }
  },
  computed: {
    ...mapGetters(['lang']),
    currentCollection() {
      return this.collections[this.collectionName]
    },
    collectionName() {
      return this.$route.params.service
    },
    collectionTitle() {
      switch (this.collectionName) {
        case 'pregnancy':
          return 'Gestante'
        case 'newborn':
          return 'Newborn'
        case 'family':
          return 'Família'
        case 'portraits':
          return 'Portrait'
        default:
          return null
      }
    }
  },
  methods: {
    closeGallery() {
      this.showGallery = false
    },
    getSrc(image) {
      return require(`../assets/placeholders/${image.name}`)
    },
    goTo(newRoute) {
      this.$router.push(newRoute)
    },
    openGallery(index) {
      this.galleryStartingIndex = index
      this.showGallery = true
    }
  }
}
</script>

<style scoped>
/* gallery */
.gallery__collection {
  @apply grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 py-4
}
.gallery__collection img {
  @apply h-full object-cover rounded cursor-pointer;
}
.gallery__collection .portrait {
  @apply row-span-2
}
.gallery__collection .full-width {
  @apply col-span-2
}
.viewMoreButton {
  @apply text-xl underline;
  grid-column: 1/-1
}
.viewMoreButton:hover {
  color: var(--fran-blue-dark);
}

/* prices */
.prices__section {
  @apply w-full py-4 px-4 flex flex-col space-y-2 text-xl rounded;
  background-color: var(--fran-blue-transparent);
  font-weight: 600;
}
/* contact */
.contact__section {
  @apply w-full py-4 flex flex-col space-y-2 text-xl rounded;
  font-weight: 600;
}

@media (max-width: 400px) {
  .contact__section {
    @apply text-base;
  }
}

@media (max-width: 320px) {
  .icon {
    @apply hidden;
  }
}
</style>