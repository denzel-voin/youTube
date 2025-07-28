<script setup>
import {computed} from "vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
import TheSearch from "./TheSearch.vue";

const props = defineProps(["query", "isSmallScreen"]);

const classes = computed(() => {
  return props.isSmallScreen ?
      ['fixed', 'bg-white', 'w-full', 'flex', 'h-14', 'p-3', 'z-10'] :
      ['hidden', 'sm:flex', 'items-center', 'justify-end', 'p-2.5', 'pl-8', 'md:pl-12', 'md:px-8', 'flex-1', 'lg:px-0', 'lg:w-1/2', 'max-w-screen-md']
})
</script>

<template>
  <div
      :class="classes">
    <BaseTooltip v-if="isSmallScreen" title="Назад">
      <button class="cursor-pointer focus:outline-none mr-2" @click="$emit('close')">
        <BaseIcon icon="arrowLeft"/>
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip title="Голосовой поиск">
      <button class="h-full cursor-pointer p-2 focus:outline-none">
        <BaseIcon icon="microphone" class="w-5 h-5"/>
      </button>
    </BaseTooltip>
  </div>
</template>

<style scoped>

</style>