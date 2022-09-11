<template>
  <section class="cover relative prices parallax" id="prices">
    <div class="title">
      <div class="title__decoration"></div>
      <h2 class="arima">Pacotes</h2>
      <div class="title__decoration"></div>
    </div>
    <div class="prices__content">
      <div class="w-full">
        <Swiper
          class="slider-wrapper w-full"
          :breakpoints="swiperOptions.breakpoints"
          :centeredSlides="true"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
          }"
          effect='coverflow'
          navigation
          :pagination="{ clickable: true }"
        >
          <SwiperSlide class="slide">
            <div class="package__wrapper">
              <h4 class="package__title dancing-script mb-2">Gestante</h4>
              <div class="package__card">
                <div class="h-1/2 w-full"><img src="../assets/placeholders/download/computer-editing.jpeg" alt="" srcset=""></div>
                <div class="package__details">
                  <ul>
                    <li>Photoshoot (50min)</li>
                    <li>18 fotos digitáis</li>
                    <li>10 fotos impressas</li>
                    <li>Confecção de livro a combinar</li>
                  </ul>
                  <span class="package__price">€190</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <div class="package__wrapper">
              <h4 class="package__title dancing-script mb-2">Newborn</h4>
              <div class="package__card">
                <div class="h-1/2 w-full"><img src="../assets/placeholders/prices-l-2.jpg" alt="" srcset=""></div>
                <div class="package__details">
                  <ul>
                    <li>Photoshoot (1,5h)</li>
                    <li>18 fotos digitáis</li>
                    <li>10 fotos impressas</li>
                    <li>Confecção de livro a combinar</li>
                  </ul>
                  <span class="package__price">€210</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <div class="package__wrapper">
              <h4 class="package__title dancing-script mb-2">Família</h4>
              <div class="package__card">
                <div class="h-1/2 w-full"><img src="../assets/placeholders/prices-l-3.jpg" alt="" srcset=""></div>
                <div class="package__details">
                  <ul>
                    <li>Photoshoot (1h)</li>
                    <li>Com até 5 pessoas</li>
                    <li>18 fotos digitáis</li>
                    <li>10 fotos impressas</li>
                    <li>Confecção de livro a combinar</li>
                  </ul>
                  <span class="package__price">€210</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- <button class="dosis w-max text-xl lg:text-2xl underline hover:text-red-500">Create your own package</button> -->
    </div>
  </section>
</template>

<script>

// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/outline'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/core';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Scrollbar]);


export default {
  name: 'PricesSection',
  components: {
    // ArrowLeftIcon,
    // ArrowRightIcon,
    Swiper,
    SwiperSlide,
  },
  props: {
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
      swiperOptions: {
        breakpoints: {
          // when window width is >= 320px
          0: {
            slidesPerView: 1.3,
          },
          300: {
            slidesPerView: 1.4,
          },
          350: {
            slidesPerView: 1.6,
          },
          450: {
            slidesPerView: 1.8,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            centeredSlides: false,
            effect: 'none',
            slidesPerView: 2.5,
            spaceBetween: 10
          },
          1024: {
            centeredSlides: false,
            centerInsufficientSlides: true,
            effect: 'none',
            enabled: false,
            navigation: { enabled: false },
            pagination: false,
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

.prices {
  background-image: url("../assets/placeholders/white-background-2.jpg");
  background-position: center;
}

.prices__content {
  @apply flex flex-col justify-between items-center pt-8 pb-12;
  height: calc(100vh - 108px);
}

.slider-wrapper {
  @apply pb-10;
}
.slide {
  @apply flex justify-center;
}

.package__wrapper {
  @apply w-full flex flex-col items-center;
  text-align: center;
  max-width: 420px;
}
.package__card {
  @apply relative w-full flex flex-col justify-between rounded-xl overflow-hidden bg-white;
  height: 50vh;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.package__title {
  @apply text-3xl;
}
.package__card .package__details {
  @apply flex flex-col h-1/2 justify-between text-black text-left z-20;
  font-family: 'arima';
}
.package__card ul {
  @apply ml-5 px-4 pt-4;
}
.package__card li {
  list-style-type: circle;
}
.package__card img {
  @apply h-full w-full;
  object-fit: cover;
  object-position: center
}
.package__price {
  @apply w-full text-xl text-right px-4 pb-4;
  font-family: 'ibarra';
}


@screen md {
  .package__wrapper {
    @apply mx-4
  }
  .slide:last-of-type .package__wrapper {
    @apply mr-8
  }
}

@screen lg {
  .prices {
    @apply px-20;
  }
  .prices__content {
    height: calc(100vh - 158px);
    max-width: 1400px;
    margin: 0 auto;
  }

  .slide:last-of-type .package__wrapper {
    @apply mr-0;
  }
  .package__title {
    @apply text-4xl mb-4;
  }
}
</style>
