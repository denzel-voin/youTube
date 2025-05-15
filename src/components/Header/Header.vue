<script setup>

import DropdownApps from "../DropdownApps.vue";
import Logo from "../../UI/Logo.vue";
import TheSearch from "./TheSearch.vue";
import ButtonLogin from "../../UI/ButtonLogin.vue";
import BaseIcon from "../../UI/BaseIcon.vue";
</script>

<template>
  <header class="flex justify-between fixed z-30 w-full bg-white">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
          <BaseIcon icon="menu" />
        </button>
        <Logo/>
      </div>
    </div>
    <div
        class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
      <TheSearch />
      <button class="ml-4 focus:outline-none">
        <BaseIcon icon="microphone" class="w-5 h-5" />
      </button>
    </div>
    <div class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
      <button class="sm:hidden p-2 focus:outline-none">
        <BaseIcon icon="microphone" class="w-5 h-5" />
      </button>
      <button class="sm:hidden p-2 focus:outline-none">
        <BaseIcon icon="search" class="w-5 h-5" />
      </button>
      <button class="relative group p-2 focus:outline-none">
        <BaseIcon icon="squares" class="w-5 h-5" />
        <DropdownApps/>
      </button>
      <button class="relative group p-2 focus:outline-none">
        <BaseIcon icon="dots" class="w-5 h-5" />
      </button>
      <ButtonLogin />
    </div>
  </header>
</template>

<style scoped>

</style>