<script setup>

import BaseIcon from "../../UI/BaseIcon.vue";
import TheSearch from "./TheSearch.vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
</script>

<template>
  <div
      class="fixed bg-white w-full flex h-14 p-3 z-10">
    <BaseTooltip title="Назад">
      <button class="cursor-pointer focus:outline-none mr-2" @click="$emit('close')" >
        <BaseIcon icon="arrowLeft" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip title="Голосовой поиск">
      <button class="h-full cursor-pointer p-2 focus:outline-none">
        <BaseIcon icon="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<style scoped>

</style>