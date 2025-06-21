<script setup>
import DropdownListItem from "./DropdownListItem.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";

const isOpen = ref(false);
const dropdownRef = ref(null);

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
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button class="group p-2 focus:outline-none cursor-pointer" @click="() => handleClick">
      <BaseIcon icon="squares" class="w-5 h-5" />
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
          class="absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0 border-gray-300">
        <section class="py-2 border-b border-gray-300">
          <ul>
            <DropdownListItem label="NewTube TV" />
          </ul>
        </section>
        <section class="py-2 border-b border-gray-300">
          <ul>
            <DropdownListItem label="YouTube Music" />
            <DropdownListItem label="YouTube Kids" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownListItem label="Creator Academy" />
            <DropdownListItem label="YouTube for Artists" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<style scoped>

</style>