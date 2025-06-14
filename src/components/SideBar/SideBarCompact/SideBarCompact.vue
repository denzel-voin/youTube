<script setup>
import { computed } from 'vue'
import SideBarCompactItem from "./SideBarCompactItem.vue";

const classes = computed(() => [
  'min-h-screen',
  'overflow-auto',
  'fixed',
  'top-0',
  'pt-14',
  'bg-white',
  'z-20',
]);

const categoryes = [
  {
    title: 'Home',
    icon: 'home',
    isActive: true,
  },
  {
    title: 'Trending',
    icon: 'trending',
    isActive: false,
  },
  {
    title: 'Subscriptions',
    icon: 'subscriptions',
    isActive: false,
  },
  {
    title: 'Library',
    icon: 'library',
    isActive: false,
  },
  {
    title: 'History',
    icon: 'history',
    isActive: false,
  }
]
</script>

<template>
  <aside :class="classes" class="pl-2 pr-2">
    <section>
      <ul>
        <SideBarCompactItem v-for="category in categoryes" :key="category.title" :category="category" />
      </ul>
    </section>
  </aside>
</template>

<style scoped>

</style>