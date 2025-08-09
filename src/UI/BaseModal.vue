<script setup>
import BaseModalButtonClose from "./BaseModalButtonClose.vue";
import BaseModalOverlay from "./BaseModalOverlay.vue";
import {onMounted, ref} from "vue";

const emit = defineEmits(["close"]);
const wrapperRef = ref(null);

const isModalOpen = ref(true);

const close = () => {
  isModalOpen.value = false;
};

onMounted(() => {
  wrapperRef.value?.focus();
});
</script>

<template>
  <div
      class="fixed inset-0 z-30 focus:outline-none flex justify-center items-start"
      @keydown.esc="close"
      tabindex="-1"
      ref="wrapperRef"
  >
    <transition
        appear
        enter-active-class="duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <BaseModalOverlay v-if="isModalOpen" @click="close"/>
    </transition>

    <transition
        appear
        enter-active-class="duration-200 transform ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="duration-200 transform ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
        @after-leave="emit('close')"
    >
      <div
          v-if="isModalOpen"
          class="bg-white max-w-1/3 mx-8 my-8 relative"
      >
        <div class="p-2 text-right">
          <BaseModalButtonClose @click="close"/>
        </div>
        <slot/>
      </div>
    </transition>
  </div>
</template>
