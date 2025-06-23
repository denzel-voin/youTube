<script setup>

import BaseIcon from "../../UI/BaseIcon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import VideoItemDroplistItem from "./VideoItemDroplistItem.vue";

const handleClick = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  } else if (event.key === "Escape") {
    isOpen.value = false;
  } else {
    isOpen.value = !isOpen.value;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick);
  window.removeEventListener('keydown', handleClick);
});

const isOpen = ref(false);
const dropdownRef = ref(null);

</script>

<template>
  <div ref="dropdownRef" class="relative ml-auto -mt-1">
    <button @click="() => handleClick" class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer">
      <BaseIcon icon="dots" />
    </button>
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition asy-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          class="absolute top-9 -right-full sm:right-0 bg-white w-48 rounded shadow">
        <section class="border-b border-gray-300">
          <ul>
            <VideoItemDroplistItem label="Добавить в очередь" icon="menuAlt3"  />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<style scoped>

</style>