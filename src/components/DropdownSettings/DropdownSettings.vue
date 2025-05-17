<script setup>
import DropdownSettingItem from "./DropdownSettingItem.vue";

const settingsList = [
  {
    label: 'Appearance: Light',
    arrow: true,
    id: 1,
    icon: 'sun'
  },
  {
    label: 'Language: English',
    arrow: true,
    id: 2,
    icon: 'lang'
  },
  {
    label: 'Location: Moscow',
    arrow: true,
    id: 3,
    icon: 'location'
  },
  {
    label: 'Settings',
    arrow: false,
    id: 4,
    icon: 'settings'
  },
  {
    label: 'Your data in YouTube',
    arrow: false,
    id: 5,
    icon: 'data'
  },
  {
    label: 'Help',
    arrow: false,
    id: 6,
    icon: 'help'
  },
  {
    label: 'Send feedback',
    arrow: false,
    id: 7,
    icon: 'feedback'
  },
  {
    label: 'Keyboard shortcuts',
    arrow: false,
    id: 8,
    icon: 'shortcats'
  },
  {
    label: 'Restricted Mode: Off',
    arrow: true,
  }
];

</script>

<template>
  <div
      class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0">
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingItem v-for="item in settingsList.slice(0, settingsList.length - 2)" :key="item.id" :item="item" />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownSettingItem :item="settingsList[settingsList.length - 1]" />
      </ul>
    </section>
  </div>
</template>

<style scoped>

</style>