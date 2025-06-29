<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  title: {
    type: String
  }
})

const isShow = ref(false);

const toggle = () => {
  isShow.value = !isShow.value;
}

const classes = computed(() => {
  return [
    'bg-gray-600/80',
    'rounded-sm',
    'text-white',
    'text-xs',
    'whitespace-nowrap',
    'p-2',
    'absolute',
    'top-14',
    'left-1/2',
    'transform',
    '-translate-1/2'
  ]
});
</script>

<template>
  <div class="relative">
    <div @mouseenter="toggle" @mouseleave="toggle" class="h-full">
      <slot></slot>
    </div>
    <transition
        enter-active-class="transition-opacity ease-linear duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="isShow" :class="classes">{{ props.title }}</div>
    </transition>
  </div>
</template>

<style scoped>

</style>