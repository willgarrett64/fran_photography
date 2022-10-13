<template>
  <section class="cover relative parallax about" id="about" ref="about">
    <div class="h-full sm:w-1/2 text-white text-xl flex flex-col justify-center sm:pl-10 sm:pr-32">
      <div class="flex flex-col items-center justify-center px-4 h-1/2">
        <h2 class="tangerine text-5xl pb-4">Um pouco sobre mim</h2>
        <p class="ibarra">Olá eu sou a Fran, mãe, esposa, engenheira e fotógrafa. Nascida no Rio de Janeiro direto para a Alemanha com um sonho: ser feliz! Cada momento vivido daria uma bela resenha, que através da fotografia é possível de contar sem palavras. Aprendendo a cada dia a ter um olhar estrangeiro para os bons momentos que a vida nos dá.</p>
      </div>
      <img class="h-1/2 object-cover sm:hidden" src="../assets/placeholders/download/fran-camera.jpeg" alt="" srcset="">
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
  background-color: var(--default-blue);
}

@screen sm {
  .about {
    background-image: url("../assets/placeholders/about-l-1.jpg");
  }
}
</style>
