<template>
  <div class="mt-8 flex flex-col space-y-2">
    <div
      v-for="(item, i) in items"
      :key=i
    >
      <button class="disclosure__button" @click="toggleOpenItem(i)">
        <span>{{ item.q }}</span>
        <ChevronRightIcon class="chevron w-5" :class="isOpen(i) && 'rotate-90 transform'"/>
      </button>
      <div v-if="isOpen(i)" class="disclosure__panel">
        <span>{{ item.a }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  name: 'Accordian',
  props: ['items'],
  components: {
    ChevronRightIcon,
  },
  data() {
    return {
      openItem: null
    }
  },
  methods: {
    isOpen(i) {
      return this.openItem === i
    },
    toggleOpenItem(i) {
      if (this.openItem === i) this.openItem = null
      else this.openItem = i
    }
  }
}
</script>

<style scoped>
/* faq accordians */
.disclosure__button {
  @apply w-full flex relative items-center justify-center text-xl px-8 py-2 rounded;
  background-color: var(--fran-blue);
}

.disclosure__button .chevron {
  @apply w-5 absolute right-2 sm:right-5
}
.disclosure__panel {
  @apply text-lg py-2;
}

@media (hover: hover) {
  .disclosure__button:hover {
    color: white;
  }
}
</style>