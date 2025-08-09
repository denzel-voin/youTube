<script setup>
import BaseModal from "../../UI/BaseModal.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";

const microphonePermission = ref(false);
const isListening = ref(true);
const isRecording = ref(false);
const isQuiet = ref(false);
const recordingTimeout = ref(null);

const text = computed(() => {
  if (isQuiet.value) return 'Не удалось выполнить поиск. Попробуйте ещё раз';
  if (isListening.value || isRecording.value) return 'Идёт запись...'
  return 'Голосовой поиск'
});

const handleRecordingTimeout = () => {
  if (isListening.value || isRecording.value) {
    recordingTimeout.value = setTimeout(() => {
      isRecording.value = false;
      isListening.value = false;
      isQuiet.value = true;
    }, 5000)
  }
}

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

const buttonAnimation = computed(() => {
  return [
    isRecording.value ? 'bg-red-500/70' : 'border border-red-500',
    'absolute',
    'inset-0',
    'rounded-full',
    'animate-ping',
    'pointer-events-none',
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

const toggleRecording = () => {
  clearTimeout(recordingTimeout.value)
  isQuiet.value = false;
  if (isRecording.value) {
    isRecording.value = false;
    isListening.value = false;
  } else if (isListening.value) {
    isRecording.value = true;
  } else {
    isListening.value = true;
  }

  handleRecordingTimeout();
}

onMounted(async () => {
  const status = await checkMicrophonePermission();
  microphonePermission.value = status === 'granted';
  handleRecordingTimeout();

  if (!microphonePermission.value) {
    await requestMicrophoneAccess();
  }
});

onBeforeUnmount(() => {
  clearTimeout(recordingTimeout.value)
})
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
        :class="buttonAnimation"
    ></span>
          <button
              :class="buttonClasses"
              @click="toggleRecording"
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
