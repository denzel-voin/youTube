<script setup>
import {ref} from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingItem from "./DropdownSettingItem.vue";

const emit = defineEmits(['select-item']);
const languageList = [
  {
    label: 'Русский',
    id: 1
  },
  {
    label: 'English',
    id: 2
  }
]

const selectedId = ref(0);
</script>

<template>
  <DropdownSettingsHeader title="Выбор языка" @back="emit('select-item', 'main')"/>
  <section class="py-2 border-b border-gray-300">
    <ul>
      <DropdownSettingItem
          v-for="(item, themeId) in languageList"
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