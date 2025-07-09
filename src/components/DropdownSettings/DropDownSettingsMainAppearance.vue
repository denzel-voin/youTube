<script setup>
import DropdownSettingItem from './DropdownSettingItem.vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import { ref, watch } from 'vue'
import { useThemeStore } from "../../stores.js"
import { storeToRefs } from "pinia"

const emit = defineEmits(['select-item'])

const settingsList = [
  { label: 'Тема устройства', id: 1 },
  { label: 'Тёмная тема', id: 2 },
  { label: 'Светлая тема', id: 3 }
]

const themeStore = useThemeStore()
const { themeState } = storeToRefs(themeStore)

const labelToId = {
  'Тема устройства': 1,
  'Тёмная тема': 2,
  'Светлая тема': 3
}
const idToLabel = Object.fromEntries(
    Object.entries(labelToId).map(([label, id]) => [id, label])
)

const selectedId = ref(labelToId[themeState.value] || 1)

watch(selectedId, (id) => {
  themeState.value = idToLabel[id]
})
</script>

<template>
  <DropdownSettingsHeader title="Цветовая тема" @back="emit('select-item', 'main')" />
  <section class="py-2 border-b border-gray-300">
    <div class="text-gray-500 text-xs px-3 py-1">
      Настройки применятся к текущему браузеру
    </div>
    <ul>
      <DropdownSettingItem
          v-for="item in settingsList"
          :key="item.id"
          :item="item"
          :is-active="item.id === selectedId"
          @click="selectedId = item.id"
      />
    </ul>
  </section>
</template>
