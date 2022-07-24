<template>
  <div class="h-full">
    <HelloWorld />
    <div class="parallax__divider hidden sm:flex items-center justify-center h-1/3 w-full">
      <h2 class="text-white text-2xl dancing-script">Some interesting quote will go here</h2>
    </div>
    <AboutMe />
    <div class="parallax__divider">
      <h2 class="text-white text-2xl dancing-script">Some interesting quote will go here</h2>
    </div>
    <div class="parallax test h-1/2"></div>
    <div class="parallax__divider">
      <h2 class="text-white text-2xl dancing-script">Some interesting quote will go here</h2>
    </div>
    <GallerySection />
    <div class="parallax__divider lex items-center justify-center h-1/3 w-full">
      <h2 class="text-white text-2xl dancing-script">Some interesting quote will go here</h2>
    </div>
    <PricesSection />
    <div class="parallax__divider md:hidden">
      <h2 class="text-white text-2xl dancing-script">Some interesting quote will go here</h2>
    </div>
    <ContactSection />
  </div>
</template>

<script>

import AboutMe from '@/components/AboutMe.vue'
import ContactSection from '@/components/ContactSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import PricesSection from '@/components/PricesSection.vue'

export default {
  name: 'LandingPage',
  components: {
    AboutMe,
    ContactSection,
    GallerySection,
    HelloWorld,
    PricesSection
  }
}
</script>

<style>
.parallax__divider {
  @apply flex items-center justify-center h-1/3 w-full;
  background-color: var(--fran-blue);
}
</style>