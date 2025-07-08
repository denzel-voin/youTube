<script setup>
import DropdownSettingItem from "./DropdownSettingItem.vue";
import {ref} from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const emit = defineEmits(["select-item"]);

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
  <DropdownSettingsHeader title="Цветовая тема" @back="emit('select-item', 'main')" />
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