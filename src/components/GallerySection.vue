<template>
  <section class="cover relative pt-20 px-40" id="gallery">
    <div class="h-full w-full flex items-center justify-between space-x-5">
      <div>
        <h4>Pregnancy</h4>
        <div class="image__card">
          <img src="../assets/placeholders/portrait-3.jpg" alt="">
        </div>
      </div>
      <div>
        <h4>Newborn</h4>
        <div class="image__card">
          <img src="../assets/placeholders/newborn-p-1.jpg" alt="">
        </div>
      </div>
      <div>
        <h4>Family</h4>
        <div class="image__card">
          <img src="../assets/placeholders/family-p-1.jpg" alt="">
        </div>
      </div>
      <div>
        <h4>Portraits</h4>
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

.image__card {
  @apply w-44 h-52 drop-shadow;
}

.image__card img {
  @apply w-full h-full rounded;
  object-fit: cover;
}
</style>
