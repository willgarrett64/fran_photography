<template>
  <div class="mt-20 pb-40">
    <div class="title">
      <div class="title__decoration"></div>
      <h2 class="arima">{{ collectionTitle }}</h2>
      <div class="title__decoration"></div>
    </div>
    <div class="max-w-5xl m-auto">
      <div class="text-left text-lg">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Egestas erat imperdiet sed euismod nisi porta. Nibh mauris cursus mattis molestie a iaculis at.</p>
        <br>
        <p>Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Ullamcorper a lacus vestibulum sed arcu. Vel facilisis volutpat est velit egestas dui id ornare arcu. Est lorem ipsum dolor sit amet consectetur adipiscing.</p>
        <br>
        <p>Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor.</p>
      </div>
      <div class="gallery__collection">
        <img
          v-for="(image, index) in currentCollection"
          :key="image.name"
          :src="getSrc(image)"
          :class="image.class"
          @click="openGallery(index)"
        />
        <button @click="openGallery(0)" class="viewMoreButton">View more</button>
      </div>

      <div class="packages">

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

export default {
  name: 'WorkPage',
  props: ['title'],
  components: {
    GallerySlideshow
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
    currentCollection() {
      return this.collections[this.collectionName]
    },
    currentCollectionIndex() {
      return this.collectionNames.indexOf(this.collectionName)
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
    },
    collectionNames() {
      return Object.keys(this.collections)
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

.viewMoreButton {
  @apply text-xl;
  grid-column: 1/-1
}
.viewMoreButton:hover {
  color: var(--fran-blue-dark);
}
</style>