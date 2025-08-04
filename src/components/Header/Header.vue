<script>

import DropdownApps from "../DropdownApps/DropdownApps.vue";
import Logo from "../../UI/Logo.vue";
import TheSearch from "./TheSearch.vue";
import ButtonLogin from "../../UI/ButtonLogin.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import DropdownSettings from "../DropdownSettings/DropdownSettings.vue";
import {computed, defineComponent, onBeforeUnmount, onMounted, provide, ref} from "vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
import TheSearchWrapper from "./TheSearchWrapper.vue";
import BaseModal from "../../UI/BaseModal.vue";

export default defineComponent({
  components: {
    BaseModal,
    TheSearchWrapper,
    TheSearchMobile: TheSearchWrapper,
    BaseTooltip,
    Logo,
    BaseIcon,
    ButtonLogin,
    TheSearch,
    DropdownSettings,
    DropdownApps
  },
  emits: {
    toggleSidebar: null
  },
  setup() {
    const isSmallScreen = ref(false);
    const isMobileSearchActive = ref(false);
    const searchQuery = ref('');

    const onResize = () => {
      isSmallScreen.value = document.documentElement.clientWidth < 640;
    }

    provide('isMobileSearchActive', computed(() => isMobileSearchActive.value));

    onMounted(() => {
      onResize();
      window.addEventListener('resize', onResize);
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize);
    })

    const closeMobileSearch = () => {
      isMobileSearchActive.value = false;
    }

    const isSearchShow = computed(() => {
      return isMobileSearchActive.value || !isSmallScreen.value;
    })

    const isVoiceModalOpen = ref(false);

    const closeModal = () => {
      isVoiceModalOpen.value = false;
    }

    return {
      isSmallScreen,
      searchQuery,
      isMobileSearchActive,
      isSearchShow,
      closeMobileSearch,
      isVoiceModalOpen,
      closeModal
    }
  }
})

</script>

<template>
  <header class="flex justify-between fixed z-30 w-full bg-white">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none" @click="$emit('toggleSidebar')">
          <BaseIcon icon="menu"/>
        </button>
        <Logo/>
      </div>
    </div>
    <TheSearchWrapper :is-small-screen="isSmallScreen" @close="closeMobileSearch"
                      :query="searchQuery"
                      v-show="isSearchShow"
                      :isVoiceModalOpen="isVoiceModalOpen"
                      @closeVoiceModal="closeModal"
                      @onOpenVoiceModal="isVoiceModalOpen = true"
    >
      <TheSearch :query="searchQuery" @update-query="searchQuery = $event"/>
    </TheSearchWrapper>
    <div class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
      <BaseTooltip title="Голосовой поиск">
        <button class="sm:hidden p-2 focus:outline-none cursor-pointer" @click="isVoiceModalOpen = true">
          <BaseIcon icon="microphone" class="w-5 h-5"/>
        </button>
      </BaseTooltip>
      <teleport to="body">
        <BaseModal v-if="isVoiceModalOpen" @close="closeModal" />
      </teleport>
      <BaseTooltip title="Введите запрос">
        <button class="sm:hidden p-2 focus:outline-none cursor-pointer" @click="isMobileSearchActive = true">
          <BaseIcon icon="search" class="w-5 h-5"/>
        </button>
      </BaseTooltip>
      <DropdownApps/>
      <DropdownSettings/>
      <ButtonLogin/>
    </div>
  </header>
</template>

<style scoped>

</style>