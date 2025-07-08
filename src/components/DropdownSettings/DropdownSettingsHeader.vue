<script setup>
const props = defineProps({
  title: String,
})
const emit = defineEmits(['back'])
import BaseIcon from "../../UI/BaseIcon.vue";
</script>

<template>
  <section class="border-b border-gray-300 flex gap-2 text-black">
    <button class="px-3 focus:outline-none cursor-pointer" @click.stop="emit('back')">
      <BaseIcon icon="arrowLeft" />
    </button>
    <span class="py-3">
      {{props.title}}
    </span>
  </section>
</template>

<style scoped>

</style>