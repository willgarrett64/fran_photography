<template>
  <section class="cover relative">
    <div class="parallax splash"></div>
    <div class="title">
      <img src="../assets/fran-logo-white.png" alt="logo" srcset="" class="hidden md:block h-80">
      <h1 class="header tangerine">{{ lang.landing.splash.tagline }}</h1>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SplashSection',
    computed: {
    ...mapGetters(['lang'])
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  object-fit: cover;
}

.splash {
  background-image: url("../assets/placeholders/splash-p-1.jpg");
}

.title {
  @apply absolute text-3xl w-full;
  top: 22vh;
}

.header {
  @apply text-4xl px-1 px-2;
}

.sub-header {
  @apply text-xl;
}

@screen md {
  .splash {
    background-image: url("../assets/placeholders/download/P10002260086.jpg");
  }

  .title {
    @apply w-1/2 flex flex-col items-center space-y-6 absolute left-1/2 text-white font-bold pt-10 pr-4;
  }

  .header {
    font-size: 3.5rem;
  }
}
</style>
