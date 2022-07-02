<template>
  <section class="cover relative pt-20 sm:px-40" id="prices">
    <div class="h-full w-full flex flex-col sm:flex-row items-center justify-between space-x-5">
      <div>
        <h4>Package 1</h4>
        <div class="package__card">
          <img src="../assets/placeholders/portrait-1.jpg" alt="" srcset="">
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
      <div>
        <h4>Package 2</h4>
        <div class="package__card">
          <img src="../assets/placeholders/portrait-2.jpg" alt="" srcset="">
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
      <div>
        <h4>Package 3</h4>
        <div class="package__card">
          <img src="../assets/placeholders/portrait-3.jpg" alt="" srcset="">
          <div class="text-overlay">
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
  </section>
</template>

<script>
export default {
  name: 'PricesSection',
  props: {
  }
}
</script>

<style scoped>
.cover {
  @apply w-screen h-screen;
  object-fit: cover;
}

.package__card {
  @apply relative w-56 h-96 flex flex-col justify-between border border-black rounded-xl overflow-hidden;
}
.package__card img {
  @apply w-full h-full absolute top-0 left-0 rounded-xl z-0;
  object-fit: cover;
  opacity: 0.3;
}

.package__card .text-overlay {
  @apply flex flex-col h-full justify-between z-20 px-4 py-8 text-black text-left font-bold;
}
.package__card ul {
  @apply ml-5
}
.package__card li {
  list-style-type: circle
}

.package__card .price {
  @apply w-full text-right
}

.image__card img {
  @apply w-full h-full rounded;
}
</style>
