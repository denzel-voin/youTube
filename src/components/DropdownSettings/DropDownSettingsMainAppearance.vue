<script setup>
import DropdownSettingItem from "./DropdownSettingItem.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import {ref} from "vue";

const settingsList = [
  {
    label: 'Использовать тему устройства',
    id: 1,
  },
  {
    label: 'Тёмная тема',
    id: 2,
  },
  {
    label: 'Светлая тема',
    id: 3,
  }
];

const selectedId = ref(0);
</script>

<template>
  <section class="border-b border-gray-300 flex gap-2 text-black">
    <button class="px-3 focus:outline-none cursor-pointer" @click.stop="$emit('select-item', 'main')">
      <BaseIcon icon="arrowLeft" />
    </button>
    <span class="py-3">
      Цветовая тема
    </span>
  </section>
  <section class="py-2 border-b border-gray-300">
    <div class="text-gray-500 text-xs px-3 py-1">Настройки применятся к текущему браузеру</div>
    <ul>
      <DropdownSettingItem
          v-for="(item, themeId) in settingsList"
          :key="item.id"
          :item="item"
          :is-active="themeId === selectedId"
          @click="selectedId = themeId"
      />
    </ul>
  </section>
</template>

<style scoped>

</style>