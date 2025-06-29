<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  title: {
    type: String
  },
  isForTop: {
    type: Boolean,
    default: false
  }
})

const isShow = ref(false);

const classes = computed(() => {
  return [
    'bg-gray-600/80',
    'rounded-sm',
    'text-white',
    'text-xs',
    'whitespace-nowrap',
    'p-2',
    'absolute',
    'left-1/2',
    'transform',
    '-translate-1/2',
    props.isForTop ? '-top-4' : 'top-14'
  ]
});
</script>

<template>
  <div class="relative">
    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="h-full" @click="isShow = false">
      <slot></slot>
    </div>
    <transition
        enter-active-class="duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-75"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="isShow" :class="classes">{{ props.title }}</div>
    </transition>
  </div>
</template>

<style scoped>

</style>