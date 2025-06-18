<script setup>
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed, ref} from "vue";

const classes = computed(() => {
  return [
    // 'opacity-0',
    'group-hover:opacity-100',
    'bg-opacity-60',
    'absolute',
    'top-0',
    'right-0',
    'bg-black',
    'text-white',
    'rounded-sm',
    'm-1',
    'p-1'
  ]
})

const badgeClasses = computed(() => {
  return [
    'absolute',
    'transition-width',
    'bg-black',
    'bg-opacity-60',
    'whitespace-nowrap',
    'top-0',
    'right-full',
    'overflow-hidden',
    'uppercase',
    'text-xs',
    'delay-100',
    'font-semibold',
    'rounded-l-sm',
    'w-28'
  ]
})

const isBadgeShown = ref(false);

</script>

<template>
<span
    :class="classes">
            <BaseIcon icon="clock" class="w-5 h-5"/>
  <span :class="badgeClasses">
    <span class="my-1.5 inline-block">Смотреть позже</span>
  </span>
          </span>
</template>

<style scoped>

</style>