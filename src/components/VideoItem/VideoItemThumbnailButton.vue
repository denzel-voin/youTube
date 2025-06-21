<script setup>
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed, ref} from "vue";

const props = defineProps({
  icon: String,
  label: String,
  width: {
    type: String,
    default: "w-28",
  }
})

const isBadgeShown = ref(false);

const toggleBadge = () => isBadgeShown.value = !isBadgeShown.value;

const classes = computed(() => {
  return [
    'opacity-0',
    'group-hover:opacity-100',
    'absolute',
    'right-0',
    'bg-black/60',
    'text-white',
    'm-1',
    'p-1',
    isBadgeShown.value ? 'rounded-r-sm' : 'rounded-sm',
  ]
})

const badgeClasses = computed(() => {
  return [
    'absolute',
    'transition-all',
    'bg-black/60',
    'whitespace-nowrap',
    'top-0',
    'right-full',
    'overflow-hidden',
    'uppercase',
    'text-xs',
    'delay-100',
    'duration-300',
    'font-semibold',
    'rounded-l-sm',
    isBadgeShown.value ? props.width : 'w-0',
  ]
})

</script>

<template>
<span
    :class="classes" @mouseenter="toggleBadge" @mouseleave="toggleBadge">
            <BaseIcon :icon="icon" class="w-5 h-5"/>
  <span :class="badgeClasses">
    <span class="my-1.5 inline-block">{{ label }}</span>
  </span>
          </span>
</template>

<style scoped>
.transition-width {
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

</style>