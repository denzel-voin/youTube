<script setup>
const links = [
    'About',
    'Press',
    'Copyright',
    'Contact us',
    'Creators',
    'Advertise',
    'Developers',
    'Terms',
    'Privacy',
    'Policy & Safety',
    'How YouTube works',
    'Test new features'
]
</script>

<template>
  <div>
    <a href="#" class="mr-2" v-for="link in links.slice(0,7)" :key="link">{{link}}</a>
  </div>
  <div>
    <a href="#" class="mr-2" v-for="link in links.slice(7)" :key="link">{{link}}</a>
  </div>
  <div class="font-normal text-gray-500">
    &copy; 2025 Loogle LLC
  </div>
</template>

<style scoped>

</style>