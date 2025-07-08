<script setup>
import {ref} from "vue";

const emit = defineEmits(['select-item']);
const locationList = [
  {
    label: 'Россия',
    id: 1
  },
  {
    label: 'США',
    id: 2
  }
]

const selectedId = ref(0);
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingItem from "./DropdownSettingItem.vue";
</script>
<template>
  <DropdownSettingsHeader title="Локация" @back="emit('select-item', 'main')"/>
  <section class="py-2 border-b border-gray-300">
    <ul>
      <DropdownSettingItem
          v-for="(item, themeId) in locationList"
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