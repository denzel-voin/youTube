<script setup>
import SideBarContent from "./SideBarContent.vue";
import {computed} from "vue";

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

const classes = computed(() => [
  'overflow-auto',
  'w-64',
  'fixed',
  'top-0',
  'pt-12',
  'bg-white',
  'z-20',
])

</script>

<template>
  <aside :class="classes">
    <SideBarContent :lists="lists" />
  </aside>
</template>

<style scoped>

</style>