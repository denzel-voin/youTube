<script setup>

import Logo from "../../../UI/Logo.vue";
import SideBarContent from "../SideBarContent.vue";
import BaseIcon from "../../../UI/BaseIcon.vue";
import MobileSideBarOverlay from "./MobileSideBarOverlay.vue";

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
]
</script>

<template>
  <MobileSideBarOverlay>
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="ml-2 mr-6 focus:outline-none">
          <BaseIcon icon="menu" />
        </button>
        <Logo/>
      </section>
      <SideBarContent :lists="lists" />
    </aside>
  </MobileSideBarOverlay>
</template>

<style scoped>

</style>