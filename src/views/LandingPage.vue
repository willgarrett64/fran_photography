<template>
  <div class="h-full">
    <SplashSection />
    <QuoteDivider quote="Um pouco sobre mim" extraClasses="md:hidden" />
    <AboutMe />
    <div class="parallax photo1"></div>
    <ServicesSection />
    <div class="parallax photo2"></div>
    <QuoteDivider quote="Entre em contato" extraClasses="md:hidden" />
    <ContactSection />
  </div>
</template>

<script>

import AboutMe from '@/components/AboutMe.vue'
import ContactSection from '@/components/ContactSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import SplashSection from '@/components/SplashSection.vue'
import QuoteDivider from '@/components/QuoteDivider.vue'

export default {
  name: 'LandingPage',
  components: {
    AboutMe,
    ContactSection,
    ServicesSection,
    SplashSection,
    QuoteDivider
  },
  mounted() {
    const elementId = this.$route.hash && this.$route.hash.slice(1)
    setTimeout(() => {
      if (elementId) document.getElementById(elementId).scrollIntoView()
    }, 0)
  }
}
</script>

<style scoped>
.photo1 {
  @apply h-2/3;
  background-image: url("../assets/placeholders/download/P10002260074.jpg");
}

.photo2 {
  @apply h-4/5;
  background-image: url("../assets/placeholders/download/anna-clara-hair.jpeg");
}

@screen md {
  .photo1 {
    @apply h-4/5;
    background-image: url("../assets/placeholders/download/P10002260069.jpg");
    background-position-x: 50%;
  }

  .parallax__divider {
    @apply h-1/6;
  }
}
</style>