<script setup>
import {computed, ref} from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import BasicToggleSwitch from '../../UI/BaseSwitch.vue';

const emit = defineEmits(['select-item']);
const switchValue = ref(false);

const switchValueText = computed(() => {
  return switchValue.value ? 'вкл' : 'выкл';
})
</script>

<template>
  <DropdownSettingsHeader title="Безопасный режим" @back="emit('select-item', 'main')"/>
  <section class="py-2 border-b border-gray-300">
    <div class="text-gray-500 text-xs px-3 py-1">В безопасном режиме скрыты видео, которые не подходят для детей. Хотя
      идеальных фильтров не существует, в большинстве случаев защита работает.
    </div>
    <div class="text-gray-500 text-xs px-3 py-1">Безопасный режим будет включен только в этом браузере.</div>
    <div class="flex flex-nowrap py-1 px-3 items-center justify-between">
      <div>Включить безопасный <br> режим: {{ switchValueText }}</div>
      <basic-toggle-switch v-model="switchValue" />
    </div>
  </section>
</template>

<style scoped>

</style>