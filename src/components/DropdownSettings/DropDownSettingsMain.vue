<script setup>
import DropdownSettingItem from "./DropdownSettingItem.vue";

const settingsList = [
  {
    label: 'Тема: Светлая',
    arrow: true,
    id: 1,
    icon: 'sun'
  },
  {
    label: 'Язык: Русский',
    arrow: true,
    id: 2,
    icon: 'lang'
  },
  {
    label: 'Локация: Москва',
    arrow: true,
    id: 3,
    icon: 'location'
  },
  {
    label: 'Настройки',
    arrow: false,
    id: 4,
    icon: 'settings'
  },
  {
    label: 'Ваши данные',
    arrow: false,
    id: 5,
    icon: 'data'
  },
  {
    label: 'Помощь',
    arrow: false,
    id: 6,
    icon: 'help'
  },
  {
    label: 'Обратная связь',
    arrow: false,
    id: 7,
    icon: 'feedback'
  },
  {
    label: 'Клавиатурные сокращения',
    arrow: false,
    id: 8,
    icon: 'shortcats'
  },
  {
    label: 'Ограничения: выключены',
    arrow: true,
  }
];
</script>

<template>
  <section class="py-2 border-b border-gray-300">
    <ul>
      <DropdownSettingItem
          v-for="item in settingsList.slice(0, settingsList.length - 2)"
          :key="item.id" :item="item"
          @click.stop="$emit('select-item', 'appearance')"
          :icon="item.icon"
          :is-active="false"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingItem :item="settingsList[settingsList.length - 1]" />
    </ul>
  </section>
</template>

<style scoped>

</style>