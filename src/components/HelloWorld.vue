<template>
  <section class="cover relative">
    <div class="parallax splash"></div>
    <div class="title">
      <img src="../assets/FranPhotographyLogo.jpeg" alt="logo" srcset="">
      <h1 class="header">I take really good photos.</h1>
      <h2 class="sub-header">Give me money and I will take your photo.</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
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

.splash {
  background-image: url("../assets/placeholders/landscape-1.jpg")
}

.title {
  @apply absolute right-40 top-52 w-72;
}

.header {
  @apply text-2xl;
  font-family: 'Brush Script MT';
}

.sub-header {
  @apply text-xl;
  font-family: 'Trebuchet MS';
}
</style>
