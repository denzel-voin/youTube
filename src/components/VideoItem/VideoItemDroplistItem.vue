<script setup>
import BaseIcon from "../../UI/BaseIcon.vue";

const props = defineProps({
  label: String,
  icon: String,
})
</script>

<template>
  <li>
    <a href="#" class="flex items-center pl-5 pr-8 py-2 text-sm hover:bg-gray-200">
      <BaseIcon :icon="icon" class="w-5 h-5 mr-4 text-gray-400"  />
      <span>{{label}}</span>
    </a>
  </li>
</template>

<style scoped>

</style>