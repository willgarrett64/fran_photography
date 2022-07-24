<template>
  <section class="cover relative sm:pt-20 parallax gallery h-screen" id="gallery">
    <h2 class="py-8 arima">Gallery</h2>
    <div class="gallery__list">
      <div class="image__card__holder" @click="goToCollection('pregnancy')">
        <div class="overlay sm:hidden"/>
        <div class="card__title dancing-script"><h4>Pregnancy</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/download/P10002260078.jpg" alt="" class="relative -top-5">
        </div>
      </div>
      <div class="image__card__holder" @click="goToCollection('newborn')">
        <div class="overlay sm:hidden"/>
        <div class="card__title dancing-script"><h4>Newborn</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/download/P10002260084.jpg" alt="">
        </div>
      </div>
      <div class="image__card__holder" @click="goToCollection('family')">
        <div class="overlay sm:hidden"/>
        <div class="card__title dancing-script"><h4>Family</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/download/P10002260075.jpg" alt="" class="relative -top-5">
        </div>
      </div>
      <div class="image__card__holder" @click="goToCollection('portraits')">
        <div class="overlay sm:hidden"/>
        <div class="card__title dancing-script"><h4>Portraits</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/portrait-l-1.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  props: {
    msg: String
  },
  methods: {
    goToCollection(collection) {
      this.$router.push(`/gallery/${collection}`)
    }
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

h2 {
  font-size: 1.8rem;
}

.image__card__holder {
  @apply relative h-1/4 rounded sm:h-auto overflow-hidden;
}
.image__card__holder .card__title {
  @apply absolute text-white text-3xl h-full w-full flex items-center justify-center sm:relative sm:text-gray-500 z-50;
}
.image__card {
  @apply sm:w-64 sm:h-96 rounded sm:rounded-xl overflow-hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.image__card img {
  @apply w-full h-full;
  object-fit: cover;
}

.gallery {
  background-image: url("../assets/placeholders/brickWall-l-1.jpg");
}

.gallery__list {
  @apply flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-5 px-4 pb-4 space-y-2 sm:px-40 w-full sm:h-auto;
  height: calc(100vh - 108px);
}
</style>
