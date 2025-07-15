<script setup>
import { onMounted, ref } from 'vue'
import BaseIcon from "../../UI/BaseIcon.vue";

const props = defineProps({
  query: String,
})

const emits = defineEmits(["update:query"]);

const inputRef = ref(null)

onMounted(() => {
  if (document.documentElement.clientWidth < 640) {
    inputRef.value?.focus()
  }
})
</script>

<template>
  <div class="relative flex w-full">
    <input
        :value="query"
        @input="emits('update:query', $event.target.value)"
        type="text"
        placeholder="Введите запрос"
        ref="inputRef"
        class="w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none"
    >
    <button>
      <BaseIcon
          v-show="query"
          icon="close"
          class="absolute w-5 z-20 h-full top-0 right-2 cursor-pointer focus:outline-none"
          @click="$emit('update:query', '')"
      />
    </button>
  </div>

</template>

<style scoped>
</style>
