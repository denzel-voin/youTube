<script setup>
const props = defineProps({
  results: Array,
  activeSearchResult: Number,
})

const emits = defineEmits(["search-mouse-enter", "search-mouse-leave", "select-search-result"]);

const classes = (id) => {
  return [
    'cursor-pointer',
    props.activeSearchResult === id ? 'bg-gray-100' : 'bg-transparent',
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
        @mouseenter="emits('search-mouse-enter', id)"
        @mouseleave="emits('search-mouse-leave')"
        @click.stop="emits('select-search-result', id)"
    >{{ result }}
    </li>
  </ul>
</template>

<style scoped>

</style>