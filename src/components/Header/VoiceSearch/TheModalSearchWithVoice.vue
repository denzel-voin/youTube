<script setup>
import BaseModal from "../../../UI/BaseModal.vue";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import TheVoiceButton from "./TheVoiceButton.vue";

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
      <TheVoiceButton
          :status="status"
          :microphone-permission="microphonePermission"
          @toggle-recording="toggleRecording"
      />
    </div>
  </BaseModal>
</template>
