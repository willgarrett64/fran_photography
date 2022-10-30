<template>
  <section class="cover relative parallax contact__section" id="contact">
    <div class="flex flex-col items-center justify-center h-full dosis md:w-1/2">
      <div class="contact__details">
        <span class="name text-2xl">Francine Martello</span>
        <div class="flex items-center justify-center">
          <div class="icon mr-2"><PhoneIcon class="w-5" /></div>
          <a href="tel:004915752473422">+49 15752473422</a>
        </div>
        <div class="flex items-center justify-center">
          <div class="icon mr-2"><MailIcon class="w-5" /></div>
          <a href="mailto:martellofrancine@gmail.com">martellofrancine@gmail.com</a>
        </div>
        <div class="flex items-center justify-center">
          <div class="icon mr-2"><LocationMarkerIcon class="w-5" /></div>
          <a href="https://goo.gl/maps/JMFcUwm6fEnvaSeD8" target="#">Kemptenerstraße 66, 87600 Kaufbeuren</a>
        </div>
        <div class="social__icons">
          <!-- facebook link -->
          <a href="https://www.facebook.com/francine.martello" target="#"><img class="social__icon" src="../assets/placeholders/icons/facebook_icon.png" alt="facebook icon"></a>
          <!-- instagram link -->
          <a href="https://www.instagram.com/martello_fran_photography/" target="#"><img class="social__icon" src="../assets/placeholders/icons/instagram_icon.png" alt="instagram icon"></a>
          <!-- whatsapp link -->
          <a href="https://api.whatsapp.com/send?phone=+4915752473422" target="#"><img class="social__icon" src="../assets/placeholders/icons/whatsapp_icon.png" alt="whatsapp icon"></a>
        </div>
      </div>
    </div>
    <img class="hidden cover__image parallax" src="../assets/placeholders/download/P10002260078.jpg" alt="">
  </section>
</template>

<script>
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/vue/solid'

export default {
  name: 'ContactSection',
  components: {
    LocationMarkerIcon,
    MailIcon,
    PhoneIcon
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

.contact__section {
  background-image: url("../assets/placeholders/download/P10002260078.jpg");
  background-position-x: 58%;
}

.contact__details {
  @apply w-full py-2 flex flex-col space-y-2 text-xl;
  background-color: var(--fran-blue-transparent);
  font-weight: 600;
}

@screen md {
  .contact__section{
    @apply w-1/2 left-1/2;
    background-image: none;
  }

  .cover__image {
    @apply block absolute top-0 h-full object-cover;
  }

  .contact__details {
    @apply absolute -left-full h-screen justify-center;
    background-color: var(--fran-blue);
  }
}

@media (max-width: 400px) {
  .contact__section {
    @apply text-base;
  }
}

@media (max-width: 320px) {
  .icon {
    @apply hidden;
  }
}
</style>
