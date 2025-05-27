<script setup>
import ButtonLogin from "../../UI/ButtonLogin.vue";
import SideBarItem from "./SideBarItem.vue";
import SideBarHeader from "./SideBarHeader.vue";
import SideBarSection from "./SideBarSection.vue";
import SideBarFooter from "./SideBarFooter.vue";

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
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20">
    <SideBarSection>
      <ul>
        <SideBarItem v-for="list in lists.slice(0,3)" :key="list.name" :item="list"/>
      </ul>
    </SideBarSection>
    <SideBarSection>
      <ul>
        <SideBarItem v-for="list in lists.slice(3, 5)" :key="list.name" :item="list"/>
      </ul>
    </SideBarSection>
    <SideBarSection class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
      <ButtonLogin
          class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"/>
    </SideBarSection>
    <SideBarSection>
      <SideBarHeader title="Best of YouTube"/>
      <ul>
        <SideBarItem v-for="list in lists.slice(5, 12)" :key="list.name" :item="list"/>
      </ul>
    </SideBarSection>
    <SideBarSection>
      <ul>
        <SideBarItem v-for="list in lists.slice(12, 13)" :key="list.name" :item="list"/>
      </ul>
    </SideBarSection>
    <SideBarSection>
      <SideBarHeader title="More from YouTube"/>
      <ul>
        <SideBarItem v-for="list in lists.slice(13, 15)" :key="list.name" :item="list"/>
      </ul>
    </SideBarSection>
    <SideBarSection>
      <ul>
        <SideBarItem v-for="list in lists.slice(15)" :key="list.name" :item="list"/>
      </ul>
    </SideBarSection>
    <SideBarSection class="px-6 py-4 text-xs font-semibold space-y-4">
      <SideBarFooter/>
    </SideBarSection>
  </aside>
</template>

<style scoped>

</style>