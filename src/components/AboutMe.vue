<template>
  <section class="cover relative parallax about" id="about" ref="about">
    <div class="h-full md:w-1/2 text-white text-xl flex flex-col-reverse justify-center md:pl-10 md:pr-32">
      <div class="flex flex-col items-center justify-center px-4 h-1/2">
        <h2 class="tangerine text-5xl pb-4 hidden md:block">{{ lang.landing.about.header }}</h2>
        <p class="ibarra">{{ lang.landing.about.content }}</p>
      </div>
      <img class="h-1/2 object-cover md:hidden" src="../assets/placeholders/download/fran-camera.jpeg" alt="" srcset="">
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AboutMe',
  computed: {
    ...mapGetters(['lang'])
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen object-cover;
}

.about {
  background-color: var(--default-blue);
}

@screen md {
  .about {
    background-image: url("../assets/placeholders/about-l-1.jpg");
  }
}
</style>
