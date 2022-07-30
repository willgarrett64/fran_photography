<template>
  <div class="parallax__divider flex items-center justify-center h-1/4 w-full" :class="extraClasses">
    <h2 class="text-2xl dancing-script">{{ quote }}</h2>
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
  background-color: var(--fran-blue);
}

.parallax__divider h2 {
  color: var(--default-blue);
}
</style>