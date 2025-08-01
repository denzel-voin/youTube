<script setup>
import {inject, nextTick, onMounted, ref, watch} from 'vue'
import BaseIcon from "../../UI/BaseIcon.vue";

const props = defineProps(["query"]);

const emits = defineEmits(["update:query", "change-state", "enter"]);

const isMobileSearchActive = inject('isMobileSearchActive');

const updateQuery = (query) => {
  emits('update:query', query);
  emits('change-state', true);
}

const inputRef = ref(null);

watch(isMobileSearchActive, async (val) => {
  if (val) {
    await nextTick();
    inputRef.value?.focus();
  }
});

onMounted(() => {
  if (document.documentElement.clientWidth < 640) {
    inputRef.value?.focus()
  }
})

const clear = () => {
  updateQuery('')
  inputRef.value?.focus()
}

const handleEnter = () => {
  emits('change-state', false);
  inputRef.value?.blur();
  emits("enter");
}
</script>

<template>
  <div class="relative flex w-full">
    <input
        @click.stop="emits('change-state', true)"
        @keyup.esc="emits('change-state', false)"
        :value="query"
        @input="updateQuery($event.target.value)"
        type="text"
        placeholder="Введите запрос"
        ref="inputRef"
        class="w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none"
        @keydown.enter="handleEnter"
    >
    <button>
      <BaseIcon
          v-show="query"
          icon="close"
          class="absolute w-5 z-20 h-full top-0 right-2 cursor-pointer focus:outline-none"
          @click="clear"
      />
    </button>
  </div>

</template>

<style scoped>
</style>
