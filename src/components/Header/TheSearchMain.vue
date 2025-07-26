<script setup>
const props = defineProps(["query"]);
const emits = defineEmits(["updateQuery"]);

import BaseIcon from "../../UI/BaseIcon.vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
import TheSearch from "./TheSearch.vue";
</script>

<template>
  <div
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
    <TheSearch :query="props.query" @update-query="emits('updateQuery', $event)" />
    <BaseTooltip title="Голосовой поиск">
      <button class="h-full cursor-pointer p-2 focus:outline-none">
        <BaseIcon icon="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<style scoped>

</style>