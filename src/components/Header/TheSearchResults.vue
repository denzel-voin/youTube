<script setup>
import {computed} from "vue";

const props = defineProps({
  results: Array,
  activeSearchResult: Number,
})

const classes = (id) => {
  return [
    'cursor-pointer',
    props.activeSearchResult === id ? 'bg-gray-100' : 'hover:bg-gray-100',
    'px-2',
    'py-2',
    'select-none',
    'truncate'
  ]
}
</script>

<template>
  <ul class="absolute top-full w-full bg-white rounded-md">
    <li
        v-for="(result, id) in results"
        :key="result"
        :class="classes(id)"
    >{{ result }}
    </li>
  </ul>
</template>

<style scoped>

</style>