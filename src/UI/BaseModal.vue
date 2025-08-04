<script setup>
import BaseModalButtonClose from "./BaseModalButtonClose.vue";
import {onMounted, ref} from "vue";

const emit = defineEmits(["close"]);
const wrapperRef = ref(null);

onMounted(() => {
  wrapperRef.value?.focus()
})
</script>

<template>
  <div
      class="fixed inset-0 z-10 bg-black/80 focus:outline-none"
      @click.self="emit('close')"
      @keydown.esc="emit('close')"
      tabindex="-1"
      ref="wrapperRef"
  >
    <div class="bg-white max-w-sm mx-auto my-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="emit('close')"/>
      </div>
      <div class="p-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consectetur dolorum earum facilis laboriosam,
        minima molestiae, nobis perferendis quidem vel vitae, voluptas? Consectetur illo modi molestiae molestias
        nostrum velit?
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>