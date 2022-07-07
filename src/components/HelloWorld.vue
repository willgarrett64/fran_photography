<template>
  <section class="cover relative">
    <div class="parallax splash"></div>
    <div class="title">
      <img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="" class="hidden">
      <h1 class="header">I take really good photos.</h1>
      <h2 class="hidden sub-header">Give me money and I will take your photo.</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld'
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
  @apply absolute text-3xl top-56 w-full;
}

.header {
  @apply text-4xl;
  font-family: 'Brush Script MT';
}

.sub-header {
  @apply text-xl;
  font-family: 'Trebuchet MS';
}

@screen sm {
  .splash {
    background-image: url("../assets/placeholders/splash-l-1.jpg")
  }
}
</style>
