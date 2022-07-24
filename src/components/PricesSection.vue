<template>
  <section class="cover relative prices parallax sm:px-40" id="prices">
    <h2 class="text-2xl py-8 arima">Prices</h2>
    <div class="carousel w-full flex flex-col sm:flex-row items-center justify-between sm:space-x-5">
      <ArrowLeftIcon class="w-4" />
      <ArrowRightIcon class="w-4" />
      <input type="radio" name="carousel" title="slide1" checked="checked" class="carousel__nav"/>
      <input type="radio" name="carousel" title="slide2" class="carousel__nav"/>
      <input type="radio" name="carousel" title="slide3" class="carousel__nav"/>
      <div class="carousel__inner">
        <div class="carousel__cell">
          <h4 class="dancing-script mb-2">Package 1</h4>
          <div class="package__card">
            <img src="../assets/placeholders/prices-l-1.jpg" alt="" srcset="">
            <div class="text-overlay">
              <ul>
                <li>Photoshoot</li>
                <li>20 digital photos</li>
                <li>5 printed photos</li>
              </ul>
              <span class="price">£120</span>
            </div>
          </div>
        </div>
        <div class="carousel__cell">
          <h4 class="dancing-script mb-2">Package 2</h4>
          <div class="package__card">
            <img src="../assets/placeholders/prices-l-2.jpg" alt="" srcset="">
            <div class="text-overlay">
              <ul>
                <li>Photoshoot</li>
                <li>50 digital photos</li>
                <li>20 printed photos</li>
              </ul>
              <span class="price">£160</span>
            </div>
          </div>
        </div>
        <div class="carousel__cell">
          <h4 class="dancing-script mb-2">Package 3</h4>
          <div class="package__card">
            <div class="text-overlay">
              <img src="../assets/placeholders/prices-l-3.jpg" alt="" srcset="">
              <ul>
                <li>Photoshoot</li>
                <li>All digital photos</li>
                <li>50 printed photos</li>
                <li>Photo album</li>
              </ul>
              <span class="price">£220</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="underline">Create your own package</button>
  </section>
</template>

<script>

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/outline'

export default {
  name: 'PricesSection',
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
  },
  props: {
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

h2 {
  font-size: 1.8rem;
}

h4 {
  @apply font-bold;
  font-size: 1.4rem;
}

.prices {
  background-image: url("../assets/placeholders/white-background-3.jpg");
}

.package__card {
  @apply relative w-full h-96 flex flex-col justify-between rounded-xl overflow-hidden bg-white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.package__card .text-overlay {
  font-family: 'arima';
  @apply text-lg flex flex-col h-full justify-between text-black text-left z-20;
}
.package__card ul {
  @apply ml-5 px-4 pt-8;
}
.package__card li {
  list-style-type: circle;
}
.package__card img {
  @apply w-full h-1/2;
  object-fit: cover;
}
.package__card .price {
  @apply w-full text-right px-4 pb-8;
}

.carousel {
  height: calc(100vh - 108px);
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row nowrap;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.carousel__nav {
  width: 12px;
  height: 12px;
  margin: 2rem 12px;
  border-radius: 50%;
  z-index: 10;
  outline: 6px solid rgb(136, 136, 136);
  outline-offset: -6px;
  box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.carousel__nav:checked {
  -webkit-animation: check 0.4s linear forwards;
          animation: check 0.4s linear forwards;
}
.carousel__nav:checked:nth-of-type(1) ~ .carousel__inner {
  left: 0%;
}
.carousel__nav:checked:nth-of-type(2) ~ .carousel__inner {
  left: -100%;
}
.carousel__nav:checked:nth-of-type(3) ~ .carousel__inner {
  left: -200%;
}
.carousel__nav:checked:nth-of-type(4) ~ .carousel__inner {
  left: -300%;
}
.carousel__inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
  -webkit-transition: left 0.4s;
  transition: left 0.4s;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row nowrap;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
}
.carousel__cell {
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-flex-flow: column nowrap;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: start;
      -ms-flex-pack: center;
          justify-content: start;
}
.carousel__image {
  font-size: 2.7rem;
}
.carousel__caption {
  font-weight: 500;
  margin: 2rem 0 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}
.carousel__txt {
  color: #999;
  margin-bottom: 3rem;
  max-width: 300px;
}

@-webkit-keyframes check {
  50% {
    outline-color: #333;
    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
  }
  100% {
    outline-color: #333;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  }
}

@keyframes check {
  50% {
    outline-color: #333;
    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
  }
  100% {
    outline-color: #333;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  }
}

</style>
