<template>
  <header class="box navbar">
    <span>Martello Photograpy</span>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#prices">Prices</a></li>
      <li><a>Contact</a></li>
      <li><a>EN | DE | BR</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style  scoped>
.navbar {
  @apply fixed w-full z-50 h-20 p-4 flex justify-between items-center bg-white;
}

ul {
  @apply flex space-x-4
}

ul li {
  @apply cursor-pointer hover:underline
}
</style>
