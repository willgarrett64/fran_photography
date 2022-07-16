<template>
  <div class="h-full mt-44">
    <div class="flex justify-between mx-4 mb-4 items-center">
      <button @click="goTo(prevCollection)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <h2 class="capitalize text-4xl dancing-script">{{ collectionName }}</h2>
      <button @click="goTo(nextCollection)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
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
</template>

<script>
export default {
  name: 'GalleryCollection',
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
            name: 'portrait-2.jpg',
            class: 'portrait'
          },
          {
            name: 'landscape-2.jpg',
            class: 'landscape'
          },
          {
            name: 'landscape-3.jpg',
            class: 'landscape full-width'
          },
          {
            name: 'portrait-3.jpg',
            class: 'portrait'
          },
          {
            name: 'landscape-2.jpg',
            class: 'landscape'
          },
          {
            name: 'landscape-1.jpg',
            class: 'landscape'
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
      return this.$route.params.collection
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
  @apply grid grid-cols-2 gap-2 p-2
}

.gallery__collection img {
  @apply h-full object-cover rounded;
}

.gallery__collection .portrait {
  @apply row-span-2
}

.gallery__collection .full-width {
  @apply col-span-2
}
</style>