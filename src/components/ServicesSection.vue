<template>
  <section class="cover relative parallax gallery h-screen" id="services">
    <div class="title">
      <div class="title__decoration"></div>
      <h2 class="arima">{{ lang.landing.services.header }}</h2>
      <div class="title__decoration"></div>
    </div>

    <div>
      <div class="gallery__list">
        <div class="image__card__holder" @click="goToService('pregnancy')">
          <div class="card__title dancing-script"><h4>{{ lang.landing.services.services[0].header }}</h4></div>
          <div class="image__card">
            <div class="image__overlay">
              <span class="px-1 hidden ibarra">{{ lang.landing.services.services[0].text }}</span>
            </div>
            <img src="../assets/placeholders/download/P10002260090.jpg" alt="">
          </div>
        </div>
        <div class="image__card__holder" @click="goToService('newborn')">
          <div class="card__title dancing-script"><h4>{{ lang.landing.services.services[1].header }}</h4></div>
          <div class="image__card">
            <div class="image__overlay">
              <span class="px-1 hidden ibarra">{{ lang.landing.services.services[1].text }}</span>
            </div>
            <img src="../assets/placeholders/download/P10002260084.jpg" alt="">
          </div>
        </div>
        <div class="image__card__holder" @click="goToService('family')">
          <div class="card__title dancing-script"><h4>{{ lang.landing.services.services[2].header }}</h4></div>
          <div class="image__card">
            <div class="image__overlay">
              <span class="px-1 hidden ibarra">{{ lang.landing.services.services[2].text }}</span>
            </div>
            <img src="../assets/placeholders/download/P10002260083.jpg" alt="">
          </div>
        </div>
        <div class="image__card__holder" @click="goToService('portraits')">
          <div class="card__title dancing-script"><h4>{{ lang.landing.services.services[3].header }}</h4></div>
          <div class="image__card">
            <div class="image__overlay">
              <span class="px-1 hidden ibarra">{{ lang.landing.services.services[3].text }}</span>
            </div>
            <img src="../assets/placeholders/download/P10002260074.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ServicesSection',
    computed: {
    ...mapGetters(['lang'])
  },
  methods: {
    goToService(service) {
      this.$router.push({ name: 'ServicePage', params: { service } })
    }
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

.gallery {
  background-image: url("../assets/placeholders/white-background-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

/* gallery categories wrapper */
.gallery__list {
  @apply flex flex-col px-4 pb-4 space-y-4 w-full;
  height: calc(100vh - 108px);
}

/* gallery category card */
.image__card__holder {
  @apply relative h-1/3 rounded overflow-hidden cursor-pointer;
}
.image__card__holder .card__title {
  @apply absolute text-white text-3xl h-full w-full flex items-center justify-center z-50;
}
.image__card {
  @apply relative rounded overflow-hidden;
}
.image__card img {
  @apply w-full h-full;
  object-fit: cover;
}
.image__overlay {
  @apply w-full h-full bg-gray-500 absolute bottom-0 z-40;
  opacity: 0.3;
}


@screen sm {
  .gallery {
    @apply px-6;
  }

  .image__card__holder {
    @apply h-full rounded-xl;
  }
  .image__card__holder .card__title {
    @apply text-4xl;
  }
  .image__card {
    @apply h-full rounded-xl;
  }

  .gallery__list {
    @apply grid grid-cols-2 items-center gap-x-4 gap-y-2 space-y-0;
  }
}


@screen lg {
  .gallery {
    @apply px-20;
    background-image: url("../assets/placeholders/white-background-2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .title {
    @apply pt-16 space-x-10;
  }
  .title h2 {
    @apply border-b-2;
    font-size: 2.5rem;
  }

  .gallery__list {
    @apply grid-cols-4 mx-auto pb-40;
    max-width: 95rem;
  }

  .image__card__holder {
    @apply overflow-visible;
    max-width: 18rem;
    height: 30rem;
  }
  .image__card__holder .card__title {
    @apply relative h-auto pb-4;
    color: var(--default-blue)
  }
  .image__card {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  .image__overlay {
    @apply overflow-hidden;
    background-color: var(--fran-blue-transparent);
    height: 0;
    opacity: 1;
    transition: .5s ease;
  }
  .image__overlay span {
    @apply absolute text-white text-3xl h-full w-full flex items-center justify-center z-50;
  }
  .image__card:hover .image__overlay {
    height: 100%;
    opacity: 1;
    transition: .5s ease;
  }
}
</style>
