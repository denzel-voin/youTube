<script setup>
import {ref, watch} from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingItem from "./DropdownSettingItem.vue";
import { useOptionsStore } from "../../stores.js"
import { storeToRefs } from "pinia"

const langStore = useOptionsStore()
const { languageState } = storeToRefs(langStore)

const emit = defineEmits(['select-item']);
const languageList = [
  {
    label: 'Русский',
    id: 0
  },
  {
    label: 'English',
    id: 1
  }
]

const selectedId = ref(languageList.findIndex(lang => lang.label === languageState.value));

watch(selectedId, (id) => {
  languageState.value = languageList[id].label;
})
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