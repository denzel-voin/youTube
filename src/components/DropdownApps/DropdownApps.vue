<script setup>
import DropdownListItem from "./DropdownListItem.vue";
</script>

<template>
  <div
      class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0">
    <section class="py-2 border-b">
      <ul>
        <DropdownListItem label="NewTube TV" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownListItem label="YouTube Music" />
        <DropdownListItem label="YouTube Kids" />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownListItem label="Creator Academy" />
        <DropdownListItem label="YouTube for Artists" />
      </ul>
    </section>
  </div>
</template>

<style scoped>

</style>