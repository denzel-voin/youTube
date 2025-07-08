<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import BaseIcon from "../../UI/BaseIcon.vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";
import DropDownSettingsMain from "./DropDownSettingsMain.vue";
import DropDownSettingsMainAppearance from "./DropDownSettingsMainAppearance.vue";
import DropdownSettingsLanguage from "./DropdownSettingsLanguage.vue";
import DropdownLocation from "./DropdownLocation.vue";
import DropdownRestricted from "./DropdownRestricted.vue";

const isOpen = ref(false);
const dropdownRef = ref(null);
const isSelectedMenu = ref("main");

const toggleDropdown = () => {
  isOpen.value ? closeDropdown() : isOpen.value = true;
};

const closeDropdown = () => {
  isOpen.value = false;
  setTimeout(() => {
    isSelectedMenu.value = 'main';
  }, 100)
};

const showSelectedMenu = (menu) => {
  isSelectedMenu.value = menu;
};

const handleClickOutside = (event) => {
  if (!dropdownRef.value?.contains(event.target)) {
    closeDropdown();
  }
};

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <BaseTooltip title="Настройки">
      <button class="group p-2 focus:outline-none cursor-pointer" @click="toggleDropdown">
        <BaseIcon icon="dots" class="w-5 h-5"/>
      </button>
    </BaseTooltip>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          class="absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0 border-gray-300"
      >
        <DropDownSettingsMain
            v-if="isSelectedMenu === 'main'"
            @select-item="showSelectedMenu"
        />
        <DropDownSettingsMainAppearance
            v-else-if="isSelectedMenu === 'appearance'"
            @select-item="showSelectedMenu"
        />
        <DropdownSettingsLanguage
            v-else-if="isSelectedMenu === 'language'"
            @select-item="showSelectedMenu"
        />
        <DropdownLocation
            v-else-if="isSelectedMenu === 'location'"
            @select-item="showSelectedMenu"
        />
        <DropdownRestricted
            v-else-if="isSelectedMenu === 'restricted'"
            @select-item="showSelectedMenu"
        />
      </div>
    </transition>
  </div>
</template>
