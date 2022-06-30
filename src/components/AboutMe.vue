<template>
  <section class="cover relative pt-20 px-40" id="about">
    <div class="h-full w-full flex items-center justify-between space-x-10">
      <img class="w-80" src="../assets/placeholders/photographer-1.jpg" alt="">
      <p>I am Fran. I like babies. I like pregnant people. Please, please let me take photos of your babies and your pregnant belly. It would make me very happy. You know what? You don't even have to pay me - I will pay you!</p>
      <img class="w-80" src="../assets/placeholders/photographer-2.jpg" alt="" srcset="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
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
