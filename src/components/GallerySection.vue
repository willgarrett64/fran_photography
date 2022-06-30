<template>
  <section class="cover relative pt-20 px-40" id="gallery">
    <div class="h-full w-full flex items-center justify-between space-x-5">
      <div>
        <h4>Pregnancy</h4>
        <div>
          <img src="" alt="">
        </div>
      </div>
      <div>
        <h4>Newborn</h4>
        <div>
          <img src="" alt="">
        </div>
      </div>
      <div>
        <h4>Family</h4>
        <div>
          <img src="" alt="">
        </div>
      </div>
      <div>
        <h4>Portraits</h4>
        <div>
          <img src="" alt="">
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
</style>
