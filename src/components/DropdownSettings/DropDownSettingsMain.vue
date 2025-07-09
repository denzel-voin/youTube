<script setup>
import DropdownSettingItem from "./DropdownSettingItem.vue";
import {useThemeStore} from "../../stores.js";
const themeStore = useThemeStore()
const emit = defineEmits(["select-item"]);
const settingsList = [
  {
    label: `Тема: ${themeStore.themeState}`,
    arrow: true,
    id: 1,
    icon: 'sun',
    title: 'appearance'
  },
  {
    label: 'Язык: Русский',
    arrow: true,
    id: 2,
    icon: 'lang',
    title: 'language'
  },
  {
    label: 'Локация: Россия',
    arrow: true,
    id: 3,
    icon: 'location',
    title: 'location'
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
    label: 'Безопасный режим: откл.',
    id: 9,
    arrow: true,
    icon: 'shield',
    title: 'restricted'
  }
];

const selectMenu = (item) => {
  if (item.arrow) {
    emit('select-item', item.title);
  }
}
</script>

<template>
  <section class="py-2 border-b border-gray-300">
    <ul>
      <DropdownSettingItem
          v-for="item in settingsList.slice(0, settingsList.length - 2)"
          :key="item.id" :item="item"
          @click.stop="selectMenu(item)"
          :icon="item.icon"
          :is-active="false"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingItem
          :item="settingsList[settingsList.length - 1]"
          :icon="settingsList[settingsList.length - 1].icon"
          @click.stop="selectMenu(settingsList[settingsList.length - 1])"
      />
    </ul>
  </section>
</template>

<style scoped>

</style>