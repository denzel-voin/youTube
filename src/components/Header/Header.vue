<script>

import DropdownApps from "../DropdownApps/DropdownApps.vue";
import Logo from "../../UI/Logo.vue";
import TheSearch from "./TheSearch.vue";
import ButtonLogin from "../../UI/ButtonLogin.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import DropdownSettings from "../DropdownSettings/DropdownSettings.vue";
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
import TheSearchMobile from "./TheSearchMobile.vue";

export default defineComponent({
  components: {TheSearchMobile, BaseTooltip, Logo, BaseIcon, ButtonLogin, TheSearch, DropdownSettings, DropdownApps},
  emits: {
    toggleSidebar: null
  },
  setup() {
    const isSmallScreen = ref(false);
    const isMobileSearchActive = ref(false);

    const onResize = () => {
      isSmallScreen.value = document.documentElement.clientWidth < 640;
    }

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
    return {
      isSmallScreen,
      isMobileSearchActive,
      closeMobileSearch
    }
  }
})

</script>

<template>
  <header class="flex justify-between fixed z-30 w-full bg-white">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none" @click="$emit('toggleSidebar')">
          <BaseIcon icon="menu" />
        </button>
        <Logo/>
      </div>
    </div>
    <TheSearchMobile v-if="isSmallScreen && isMobileSearchActive" @close="closeMobileSearch" />
    <div
        v-else
        class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
      <TheSearch />
      <BaseTooltip title="Голосовой поиск">
        <button class="h-full cursor-pointer p-2 focus:outline-none">
          <BaseIcon icon="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
    </div>
    <div class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
      <BaseTooltip title="Голосовой поиск">
        <button class="sm:hidden p-2 focus:outline-none cursor-pointer">
          <BaseIcon icon="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip title="Введите запрос">
        <button class="sm:hidden p-2 focus:outline-none cursor-pointer" @click="isMobileSearchActive = true">
          <BaseIcon icon="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <DropdownApps/>
      <DropdownSettings />
      <ButtonLogin />
    </div>
  </header>
</template>

<style scoped>

</style>