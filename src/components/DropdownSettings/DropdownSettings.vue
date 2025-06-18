<script setup>
import DropdownSettingItem from "./DropdownSettingItem.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";

const settingsList = [
  {
    label: 'Appearance: Light',
    arrow: true,
    id: 1,
    icon: 'sun'
  },
  {
    label: 'Language: English',
    arrow: true,
    id: 2,
    icon: 'lang'
  },
  {
    label: 'Location: Moscow',
    arrow: true,
    id: 3,
    icon: 'location'
  },
  {
    label: 'Settings',
    arrow: false,
    id: 4,
    icon: 'settings'
  },
  {
    label: 'Your data in YouTube',
    arrow: false,
    id: 5,
    icon: 'data'
  },
  {
    label: 'Help',
    arrow: false,
    id: 6,
    icon: 'help'
  },
  {
    label: 'Send feedback',
    arrow: false,
    id: 7,
    icon: 'feedback'
  },
  {
    label: 'Keyboard shortcuts',
    arrow: false,
    id: 8,
    icon: 'shortcats'
  },
  {
    label: 'Restricted Mode: Off',
    arrow: true,
  }
];

const isOpen = ref(false);
const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});

</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button class="group p-2 focus:outline-none cursor-pointer" @click="isOpen = !isOpen">
      <BaseIcon icon="dots" class="w-5 h-5" />
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
          class="absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0 border-gray-300">
        <section class="py-2 border-b border-gray-300">
          <ul>
            <DropdownSettingItem v-for="item in settingsList.slice(0, settingsList.length - 2)" :key="item.id" :item="item" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownSettingItem :item="settingsList[settingsList.length - 1]" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<style scoped>

</style>