<template>
  <nav id="navbar" class="box">
    <span>Martello Photograpy</span>
    <!-- <ul class="hidden sm:block">
      <li><a href="#about">About</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#prices">Prices</a></li>
      <li><a>Contact</a></li>
      <li><a>EN | DE | BR</a></li>
    </ul> -->
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  // mounted() {
  //   let prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     let currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "0";
  //     } else {
  //       document.getElementById("navbar").style.top = "-5rem";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // }
}
</script>

<style  scoped>
#navbar {
  @apply absolute top-0 w-full z-50 h-20 p-4 flex justify-between items-center bg-white;
  transition: top 0.3s;
}

ul {
  @apply flex space-x-4
}

ul li {
  @apply cursor-pointer hover:underline
}
</style>
