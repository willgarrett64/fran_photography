<template>
  <div>
    <div class="mt-32 mb-20">
      <div class="title">
        <div class="title__decoration"></div>
        <h2 class="arima">{{ collectionTitle }}</h2>
        <div class="title__decoration"></div>
      </div>
      <div class="px-40">
        <div class="text-left text-lg">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Egestas erat imperdiet sed euismod nisi porta. Nibh mauris cursus mattis molestie a iaculis at.</p>
          <p>Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Ullamcorper a lacus vestibulum sed arcu. Vel facilisis volutpat est velit egestas dui id ornare arcu. Est lorem ipsum dolor sit amet consectetur adipiscing.</p>
          <p>Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor.</p>
        </div>
        <div class="gallery__collection">
          <img
            v-for="image in currentCollection"
            :key="image.name"
            :src="getSrc(image)"
            :class="image.class"
          />
        </div>
      </div>
    </div>
    <ContactSection />
  </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'WorkPage',
  props: ['title'],
  components: {
    ContactSection
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
      }
    }
  },
  computed: {
    currentCollection() {
      return this.collections[this.collectionName]
    },
    currentCollectionIndex() {
      return this.collectionNames.indexOf(this.collectionName)
    },
    collectionName() {
      return this.$route.params.work
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
    },
    collectionNames() {
      return Object.keys(this.collections)
    },
    nextCollection() {
      const nextIndex = this.currentCollectionIndex === this.collectionNames.length - 1 ? 0 : this.currentCollectionIndex + 1
      return `/gallery/${this.collectionNames[nextIndex]}`
    },
    prevCollection() {
      const prevIndex = this.currentCollectionIndex === 0 ? this.collectionNames.length - 1 : this.currentCollectionIndex - 1
      return `/gallery/${this.collectionNames[prevIndex]}`
    }
  },
  methods: {
    getSrc(image) {
      return require(`../assets/placeholders/${image.name}`)
    },
    goTo(newRoute) {
      this.$router.push(newRoute)
    }
  }
}
</script>

<style>
.gallery__collection {
  @apply grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 py-10
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
</style>