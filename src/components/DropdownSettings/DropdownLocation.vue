<script setup>
import {ref, watch} from "vue";
import { useOptionsStore } from "../../stores.js"
import { storeToRefs } from "pinia"
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingItem from "./DropdownSettingItem.vue";

const locationStore = useOptionsStore()
const { locationState } = storeToRefs(locationStore)
const emit = defineEmits(['select-item']);

const locationList = [
  {
    label: 'Россия',
    id: 0
  },
  {
    label: 'США',
    id: 1
  }
]

const selectedId = ref(locationList.findIndex(locate => locate.label === locationState.value));

watch(selectedId, (id) => {
  locationState.value = locationList[id].label;
})
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