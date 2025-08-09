<script setup>
import BaseModal from "../../UI/BaseModal.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed, onMounted, ref} from "vue";

const microphonePermission = ref(false);
const isListening = ref(false);

const text = computed(() => (isListening.value && microphonePermission.value) ? 'Идёт запись...' : 'Голосовой поиск');

const buttonClasses = computed(() => {
  return [
    (isListening.value && microphonePermission.value) ? 'bg-red-600/70' : 'bg-gray-500/30',
    (isListening.value && microphonePermission.value) ? 'text-white' : 'text-black/60',
    'rounded-full',
    'p-4',
    'cursor-pointer',
    'focus:outline-none'
  ]
})

async function requestMicrophoneAccess() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    microphonePermission.value = true;
    stream.getTracks().forEach(track => track.stop());
    return true;
  } catch {
    microphonePermission.value = false;
    return false;
  }
}

async function checkMicrophonePermission() {
  if (!navigator.permissions) return null;
  try {
    const status = await navigator.permissions.query({name: 'microphone'});
    return status.state; // 'granted' | 'denied' | 'prompt'
  } catch {
    return null;
  }
}

onMounted(async () => {
  const status = await checkMicrophonePermission();
  microphonePermission.value = status === 'granted';

  if (!microphonePermission.value) {
    await requestMicrophoneAccess();
  }
});
</script>

<template>
  <BaseModal>
    <div class="mx-8">
      <p class="text-2xl mb-4">{{ text }}</p>
      <p class="text-md" v-show="!microphonePermission">
        Чтобы пользоваться голосовым поиском, откройте приложению доступ к микрофону в настройках браузера.
      </p>
      <div class="flex items-center justify-center w-full mb-12 flex-col gap-6 mt-52">
        <div class="relative">
    <span
        v-show="isListening"
        class="absolute inset-0 rounded-full animate-ping bg-red-500/70 pointer-events-none"
    ></span>
          <button
              :class="buttonClasses"
              @click="isListening = !isListening"
          >
            <BaseIcon icon="microphone" class="w-12 h-12"/>
          </button>
        </div>
        <p class="text-gray-800/60" v-show="microphonePermission">
          {{ isListening ? '...' : 'Для поиска нажмите на кнопку микрофона.' }}
        </p>
      </div>
    </div>

  </BaseModal>
</template>
