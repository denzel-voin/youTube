<script setup>

import Logo from "../../../UI/Logo.vue";
import SideBarContent from "../SideBarContent.vue";
import BaseIcon from "../../../UI/BaseIcon.vue";
import MobileSideBarOverlay from "./MobileSideBarOverlay.vue";
import {onMounted, onUnmounted, watch} from "vue";

const lists = [
  {
    name: "Home",
    icon: "home",
    isActive: true
  },
  {
    name: "Trending",
    icon: "trending",
    isActive: false
  },
  {
    name: "Subscriptions",
    icon: "subscriptions",
    isActive: false
  },
  {
    name: "Library",
    icon: "library",
    isActive: false
  },
  {
    name: "History",
    icon: "history",
    isActive: false
  },
  {
    name: "Music",
    icon: "music",
    isActive: false
  },
  {
    name: "Sports",
    icon: "sports",
    isActive: false
  },
  {
    name: "Gaming",
    icon: "gaming",
    isActive: false
  },
  {
    name: "Movies",
    icon: "movies",
    isActive: false
  },
  {
    name: "News",
    icon: "news",
    isActive: false
  },
  {
    name: "Live",
    icon: "live",
    isActive: false
  },
  {
    name: "360 Video",
    icon: "video",
    isActive: false
  },
  {
    name: "Browse channels",
    icon: "browseChannels",
    isActive: false
  },
  {
    name: "NewTube Premium",
    icon: "premium",
    isActive: false
  },
  {
    name: "Live",
    icon: "live",
    isActive: false
  },
  {
    name: "Settings",
    icon: "settings",
    isActive: false
  },
  {
    name: "Report history",
    icon: "reportHistory",
    isActive: false
  },
  {
    name: "Help",
    icon: "help",
    isActive: false
  },
  {
    name: "Send feedback",
    icon: "feedback",
    isActive: false
  }
];

const props = defineProps(["isOpen"]);
const emit = defineEmits(["openMobileSidebar"]);

function handleEscape(event) {
  if (event.key === "Escape" && props.isOpen) {
    emit("openMobileSidebar");
  }
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <transition
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <MobileSideBarOverlay v-show="isOpen" @click="$emit('openMobileSidebar')" />
  </transition>
  <transition
      enter-active-class="transition ease-in-out duration-200 transform"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-200 transform"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
  >
    <aside
        class="w-64 max-h-screen overflow-auto bg-white fixed z-40"
        v-show="isOpen"
        ref="mobileSideBar"
        tabindex="-1"
    >
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="ml-2 mr-6 focus:outline-none" @click="$emit('openMobileSidebar')">
          <BaseIcon icon="menu" />
        </button>
        <Logo/>
      </section>
      <SideBarContent :lists="lists" />
    </aside>
  </transition>
</template>

<style scoped>

</style>