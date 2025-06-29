<script setup>
import BaseIcon from "../../UI/BaseIcon.vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
</script>

<template>
  <BaseTooltip title="Введите запрос">
    <button
        class="h-full focus:outline-none cursor-pointer flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200">
      <BaseIcon icon="search" class="w-5 h-5"/>
    </button>
  </BaseTooltip>
</template>

<style scoped>

</style>