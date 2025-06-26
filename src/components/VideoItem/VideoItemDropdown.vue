<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import VideoItemDroplistItem from "./VideoItemDroplistItem.vue";

const isOpen = ref(false);
const dropdownRef = ref(null);
const dropdownPosition = ref('top-9');

const getTopClass = (event) => {
  const clickCordY = event.clientY;
  const dropdownHeight = dropdownRef.value?.offsetHeight || 0;

  if (window.innerHeight - clickCordY < dropdownHeight + 200) {
    return '-top-14';
  }
  return 'top-9';
};

const handleButtonClick = (event) => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    dropdownPosition.value = getTopClass(event);
  }
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const handleEscapeKey = (event) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('keydown', handleEscapeKey);
});

const buttonClasses = computed(() => [
  "-mt-1",
  "ml-auto",
  "p-1",
  "opacity-0",
  "group-hover:opacity-100",
  "text-gray-500",
  "hover:text-gray-700",
  "focus:outline-none",
  "cursor-pointer"
]);

const dropdownClasses = computed(() => [
  'absolute',
  '-right-full',
  'sm:right-0',
  'bg-white',
  'w-48',
  'rounded',
  'shadow',
  dropdownPosition.value
]);
</script>

<template>
  <div ref="dropdownRef" class="relative ml-auto -mt-1">
    <button @click="handleButtonClick" :class="buttonClasses">
      <BaseIcon icon="dots" />
    </button>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpen" :class="dropdownClasses">
        <section class="border-b border-gray-300">
          <ul>
            <VideoItemDroplistItem label="Добавить в очередь" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>