<script setup>
import VideoItem from "./VideoItem/VideoItem.vue";
import {computed} from "vue";

const {isOpen} = defineProps({
  isOpen: Boolean,
});

const classes = computed(() => [
  isOpen ? 'xl:ml-64' : 'md:ml-24',
  'pt-32',
  'px-5',
  'pb-5',
  'bg-white',
  'z-20',
])
</script>
<template>
  <main :class="classes">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto">
      <VideoItem v-for="i in 20" :key="i" :index="i" />
    </div>
  </main>
</template>