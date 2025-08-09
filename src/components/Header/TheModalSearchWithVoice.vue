<script setup>
import BaseModal from "../../UI/BaseModal.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
</script>

<template>
  <BaseModal>
    <p class="text-2xl mx-8 mb-4">Голосовой поиск</p>
    <p class="text-md mx-8 mb-52">Чтобы пользоваться голосовым поиском, перейдите в настройки браузера и откройте
      приложению доступ к микрофону.
    </p>
    <div class="flex items-center justify-center w-full mb-12">
      <button class="rounded-full bg-gray-500/30 p-4 cursor-pointer focus:outline-none">
        <BaseIcon icon="microphone" class="w-12 h-12" />
      </button>
    </div>
  </BaseModal>
</template>

<style scoped>

</style>