<template>
  <div class="h-full">
    <SplashSection />
    <QuoteDivider quote="Some interesting quote will go here" extraClasses="hidden md:flex" />
    <AboutMe />
    <QuoteDivider quote="Some interesting quote will go here" />
    <div class="parallax test"></div>
    <QuoteDivider quote="Some interesting quote will go here" />
    <GallerySection />
    <QuoteDivider quote="Some interesting quote will go here" />
    <div class="parallax test2"></div>
    <QuoteDivider quote="Some interesting quote will go here" />
    <PricesSection />
    <QuoteDivider quote="Some interesting quote will go here" extraClasses="md:hidden" />
    <ContactSection />
  </div>
</template>

<script>

import AboutMe from '@/components/AboutMe.vue'
import ContactSection from '@/components/ContactSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import SplashSection from '@/components/SplashSection.vue'
import PricesSection from '@/components/PricesSection.vue'
import QuoteDivider from '@/components/QuoteDivider.vue'

export default {
  name: 'LandingPage',
  components: {
    AboutMe,
    ContactSection,
    GallerySection,
    SplashSection,
    PricesSection,
    QuoteDivider
  }
}
</script>

<style>
.test {
  @apply h-2/3;
  background-image: url("../assets/placeholders/download/P10002260074.jpg");
}

.test2 {
  @apply h-4/5;
  background-image: url("../assets/placeholders/download/anna-clara-hair.jpeg");
}

@screen md {
  .test {
    @apply h-4/5;
    background-image: url("../assets/placeholders/download/P10002260069.jpg");
    background-position-x: 50%;
  }

  .parallax__divider {
    @apply h-1/4;
  }
}
</style>