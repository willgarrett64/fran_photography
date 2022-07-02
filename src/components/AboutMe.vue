<template>
  <section class="cover relative flex" id="about">
    <div class="h-full w-full flex items-center sm:px-20">
      <p>I am Fran. I like babies. I like pregnant people. Please, please let me take photos of your babies and your pregnant belly. It would make me very happy. You know what? You don't even have to pay me - I will pay you!</p>
      <!-- <img class="w-80" src="../assets/placeholders/photographer-2.jpg" alt="" srcset=""> -->
    </div>
    <div class="parallax about w-1/2 flex-shrink-0"></div>
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

.about {
  background-image: url("../assets/placeholders/photographer-1.jpg")
}
</style>
