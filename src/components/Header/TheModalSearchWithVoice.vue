<script setup>
import BaseModal from "../../UI/BaseModal.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";

const microphonePermission = ref(false);
const status = ref('quiet');
const recordingTimeout = ref(null);

const text = computed(() => {
  if (status.value === 'quiet' && recordingTimeout.value) return 'Не удалось выполнить поиск. Попробуйте ещё раз';
  if (['recording'].includes(status.value) && microphonePermission.value) return 'Идёт запись...'
  return 'Голосовой поиск'
});

const handleRecordingTimeout = () => {
  if (['recording'].includes(status.value)) {
    recordingTimeout.value = setTimeout(() => {
      status.value = 'quiet';
    }, 5000)
  }
}

const buttonClasses = computed(() => {
  return [
    (['recording'].includes(status.value) && microphonePermission.value) ? 'bg-red-600/70' : 'bg-gray-500/30',
    (['recording'].includes(status.value) && microphonePermission.value) ? 'text-white' : 'text-black/60',
    (microphonePermission.value) ? 'cursor-pointer' : 'cursor-default',
    'rounded-full',
    'p-4',
    'focus:outline-none'
  ]
})

const buttonAnimation = computed(() => {
  return [
    (['recording'].includes(status.value) && microphonePermission.value) ? 'bg-red-500/70' : '',
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
  if (!microphonePermission.value) return;
  clearTimeout(recordingTimeout.value)
  if (status.value === 'recording') {
    status.value = 'quiet';
  } else {
    status.value = 'recording';
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
        v-show="status === 'recording'"
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
          {{ status === 'recording' ? '...' : 'Для поиска нажмите на кнопку микрофона.' }}
        </p>
      </div>
    </div>

  </BaseModal>
</template>
