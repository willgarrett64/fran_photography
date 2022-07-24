<template>
  <section class="cover relative parallax about" id="about" ref="about">
    <div class="h-full sm:w-1/2 text-white text-xl flex flex-col justify-center sm:pl-10 sm:pr-32">
      <div class="flex items-center justify-center px-4 h-1/2">
        <p class="ibarra">I am Fran. I like babies. I like pregnant people. Please, please let me take photos of your babies and your pregnant belly. It would make me very happy. You know what? You don't even have to pay me - I will pay you!</p>
      </div>
      <img class="h-1/2 object-cover sm:hidden" src="../assets/placeholders/download/P10002260077.jpg" alt="" srcset="">
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
  @apply w-screen h-screen object-cover;
}

.about {
  background-color: var(--fran-blue);
}

@screen sm {
  .about {
    background-image: url("../assets/placeholders/about-l-1.jpg");
  }
}
</style>
