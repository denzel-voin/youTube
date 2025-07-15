<script setup>
const props = defineProps({
  results: Array,
})
</script>

<template>
<ul class="absolute top-full w-full bg-white rounded-md">
  <li
      v-for="result in results"
      :key="result"
      class="cursor-pointer hover:bg-gray-100 px-2 py-2 select-none truncate"
  >{{result}}</li>
</ul>
</template>

<style scoped>

</style>