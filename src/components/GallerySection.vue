<template>
  <section class="cover relative sm:pt-20 parallax gallery flex flex-col justify-center" id="gallery">
    <div class="overlay" />
    <h2 class="hidden sm:block text-2xl mb-10">Gallery</h2>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-5 sm:px-40 w-full h-full sm:h-auto">
      <div class="image__card__holder">
        <div class="overlay sm:hidden"/>
        <div class="card__title"><h4>Pregnancy</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/portrait-3.jpg" alt="">
        </div>
      </div>
      <div class="image__card__holder">
        <div class="overlay sm:hidden"/>
        <div class="card__title"><h4>Newborn</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/newborn-p-1.jpg" alt="">
        </div>
      </div>
      <div class="image__card__holder">
        <div class="overlay sm:hidden"/>
        <div class="card__title"><h4>Family</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/family-p-1.jpg" alt="">
        </div>
      </div>
      <div class="image__card__holder">
        <div class="overlay sm:hidden"/>
        <div class="card__title"><h4>Portraits</h4></div>
        <div class="image__card">
          <img src="../assets/placeholders/portrait-p-1.jpg" alt="">
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
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

.cover.gallery {
  @apply sm:h-screen;
  height: calc(100vh - 80px);
}

.image__card__holder {
  @apply relative h-1/4 sm:h-auto overflow-hidden;
}
.image__card__holder .card__title {
  @apply absolute text-white text-2xl h-full w-full flex items-center justify-center sm:relative sm:text-gray-500;
}
.image__card {
  @apply sm:w-64 sm:h-96 sm:rounded-xl overflow-hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.image__card img {
  @apply w-full h-full;
  object-fit: cover;
}

.gallery {
  background-image: url("../assets/placeholders/brickWall-l-1.jpg");
}

@screen sm {
  .cover.gallery {
    @apply h-screen;
  }
}
</style>
