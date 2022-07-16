<template>
  <div class="h-full mt-44">
    <h2 class="capitalize text-2xl">{{ collectionName }}</h2>
    <div>
      <img src="../assets/placeholders/landscape-1.jpg" alt="">
      <img src="../assets/placeholders/landscape-2.jpg" alt="">
      <img src="../assets/placeholders/landscape-3.jpg" alt="">
      <img src="../assets/placeholders/landscape-1.jpg" alt="">
      <img src="../assets/placeholders/landscape-2.jpg" alt="">
      <img src="../assets/placeholders/landscape-3.jpg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'GalleryCollection',
  computed: {
    collectionName() {
      return this.$route.params.collection
    }
  },
  components: {
  }
}
</script>

<style>

</style>