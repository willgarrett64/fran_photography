<template>
  <div class="modal-overlay">
    <button class="close" @click="close">
      <span>Close</span>
      <XIcon class="w-6"/>
    </button>
    <div class="flex">
      <button @click="prevImage"><ChevronLeftIcon class="w-5 sm:w-8 md:w-10 sm:mr-4"/></button>
      <div class="panel">
        <img
          :src="getSrc(images[viewingIndex])"
          class=""
        />
      </div>
        </div>
        <button @click="nextImage"><ChevronRightIcon class="w-5 sm:w-8 md:w-10 sm:ml-4"/></button>
    </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name: 'GallerySlideshow',
  props: ['images', 'startingIndex'],
  components: { ChevronLeftIcon, ChevronRightIcon, XIcon },
  data() {
    return {
      viewingIndex: this.startingIndex
    }
  },
  methods: {
    close() {
      this.$emit('modal-close')
    },
    handleKeydown(e) {
      if (e.key === 'Escape') this.close()
      if (e.key === 'ArrowRight') this.prevImage()
      if (e.key === 'ArrowLeft') this.nextImage()
    },
    getSrc(image) {
      return require(`../assets/placeholders/${image.name}`)
    },
    nextImage() {
      this.viewingIndex = this.viewingIndex === this.images.length - 1 ? 0 : this.viewingIndex + 1
    },
    prevImage() {
      this.viewingIndex = this.viewingIndex === 0 ? this.images.length - 1 : this.viewingIndex - 1
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
    document.documentElement.style.overflow = 'hidden'
  },
  unmounted() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.documentElement.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 h-screen w-screen bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 sm:py-10 sm:px-20 md:py-10 md:px-40;
}
.panel {
  @apply inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full;
  max-height: 85vh;
}

button {
  @apply text-white
}
button.close {
  @apply absolute top-5 right-5 sm:top-10 sm:right-10 text-white text-lg flex items-end space-x-2;
}

@media (hover: hover) {
  button:hover {
    color: var(--fran-blue);
  }
}
</style>