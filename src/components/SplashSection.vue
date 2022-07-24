<template>
  <section class="cover relative">
    <div class="parallax splash"></div>
    <div class="title">
      <img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="" class="hidden md:block h-64">
      <h1 class="header dancing-script">Capturando o que é invisível aos olhos.</h1>
      <h2 class="hidden sub-header">Give me money and I will take your photo.</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SplashSection'
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
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
    background-image: url("../assets/placeholders/splash-l-1.jpg")
  }

  .title {
    @apply w-1/2 flex flex-col items-center space-y-6 absolute left-1/2 text-white font-bold pt-10 pr-4;
  }

  .header {
    @apply text-4xl;
  }
}
</style>
