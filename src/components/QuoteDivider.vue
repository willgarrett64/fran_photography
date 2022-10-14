<template>
  <div class="parallax__divider flex items-center justify-center h-1/6 w-full" :class="extraClasses">
    <h2 class="tangerine text-5xl pb-4">{{ quote }}</h2>
  </div>
</template>

<script>
export default {
  name: 'QuoteDivider',
  props: ['extraClasses', 'quote']
}
</script>

<style scoped>
.parallax__divider {
  background-color: var(--default-blue);
}

.parallax__divider h2 {
  @apply text-white;
}
</style>