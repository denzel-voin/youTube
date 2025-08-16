<script setup>
import BaseIcon from "../../../UI/BaseIcon.vue";
import {computed} from "vue";

const props = defineProps(['status', 'microphonePermission']);
const emit = defineEmits(["toggleRecording"]);

const buttonClasses = computed(() => {
  return [
    (['recording'].includes(props.status) && props.microphonePermission) ? 'bg-red-600/70' : 'bg-gray-500/30',
    (['recording'].includes(props.status) && props.microphonePermission) ? 'text-white' : 'text-black/60',
    (props.microphonePermission) ? 'cursor-pointer' : 'cursor-default',
    'rounded-full',
    'p-4',
    'focus:outline-none'
  ]
})

const buttonAnimation = computed(() => {
  return [
    (['recording'].includes(props.status) && props.microphonePermission) ? 'bg-red-500/70' : '',
    'absolute',
    'inset-0',
    'rounded-full',
    'animate-ping',
    'pointer-events-none',
  ]
})
</script>

<template>
  <div class="flex items-center justify-center w-full mb-12 flex-col gap-6 mt-52">
    <div class="relative">
          <span
              v-show="props.status === 'recording'"
              :class="buttonAnimation"
          ></span>
      <button
          :class="buttonClasses"
          @click="emit('toggleRecording')"
      >
        <BaseIcon icon="microphone" class="w-12 h-12"/>
      </button>
    </div>
    <p class="text-gray-800/60" v-show="props.microphonePermission">
      {{ status === 'recording' ? '...' : 'Для поиска нажмите на кнопку микрофона.' }}
    </p>
  </div>
</template>

<style scoped>

</style>