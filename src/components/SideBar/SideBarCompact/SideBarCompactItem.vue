<script setup>
import BaseIcon from "../../../UI/BaseIcon.vue";
import {computed} from "vue";

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})

const activeItem = computed(() => props.category.isActive ? "flex flex-col items-center px-2 py-5 text-red-500 hover:bg-gray-100"
    : "flex flex-col items-center px-2 py-5 hover:bg-gray-100");
</script>

<template>
  <li>
    <a href="#" :class="activeItem">
      <BaseIcon class="w-6 h-6 mb-1.5" :icon="props.category.icon" />
      <span class="text-xs">{{props.category.title}}</span>
    </a>
  </li>
</template>

<style scoped>

</style>