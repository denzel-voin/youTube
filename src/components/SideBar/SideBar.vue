<script setup>
import ButtonLogin from "../../UI/ButtonLogin.vue";
import SideBarItem from "./SideBarItem.vue";
const topList = [
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
  }
]
const secondSectionList = [
  {
    name: "Library",
    icon: "library",
    isActive: false
  },
  {
    name: "History",
    icon: "history",
    isActive: false
  }
]

const thirdSectionList = [
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
  }
]


</script>

<template>
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20">
    <section class="py-2 border-b">
      <ul>
        <SideBarItem v-for="list in topList" :key="list.name" :item="list" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SideBarItem v-for="list in secondSectionList" :key="list.name" :item="list" />
      </ul>
    </section>
    <section class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
      <ButtonLogin />
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        Best of YouTube
      </div>
      <ul>
        <SideBarItem v-for="list in thirdSectionList" :key="list.name" :item="list" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>Browse channels</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        More from YouTube
      </div>
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>YouTube Premium</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>Live</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>Report history</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>Help</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <svg class="w-6 h-6 mr-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
            </svg>
            <span>Send feedback</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="px-6 py-4 text-xs font-semibold space-y-4">
      <div>
        <a href="#" class="mr-2">About</a>
        <a href="#" class="mr-2">Press</a>
        <a href="#" class="mr-2">Copyright</a>
        <a href="#" class="mr-2">Contact us</a>
        <a href="#" class="mr-2">Creators</a>
        <a href="#" class="mr-2">Advertise</a>
        <a href="#" class="mr-2">Developers</a>
      </div>
      <div>
        <a href="#" class="mr-2">Terms</a>
        <a href="#" class="mr-2">Privacy</a>
        <a href="#" class="mr-2">Policy & Safety</a>
        <a href="#" class="mr-2">How YouTube works</a>
        <a href="#" class="mr-2">Test new features</a>
      </div>
      <div class="font-normal text-gray-500">
        &copy; 2021 Google LLC
      </div>
    </section>
  </aside>
</template>

<style scoped>

</style>