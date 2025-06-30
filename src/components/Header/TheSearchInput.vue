<script setup>
import { onMounted, ref } from 'vue'

const inputRef = ref(null)

onMounted(() => {
  if (document.documentElement.clientWidth < 640) {
    inputRef.value?.focus()
  }
})
</script>

<template>
  <input
      type="text"
      placeholder="Введите запрос"
      ref="inputRef"
      class="w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none"
  >
</template>

<style scoped>
</style>
