<script>
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed} from "vue";

export default {
  name: 'SideBarItem',
  components: {BaseIcon},
  props: {
    item: Object,
  },
  setup(props, { emit }) {
    const activeItem = computed(() => props.item.isActive ? 'font-medium text-gray-800 bg-gray-200 hover:bg-gray-300'
        : 'hover:bg-gray-100');
    return {
      activeItem,
    }
  }
}

</script>

<template>
  <li>
    <a href="#"
       class="flex items-center px-6 py-2 text-sm"
       :class="activeItem"
    >
      <BaseIcon :icon="item.icon" class="w-6 h-6 mr-6" :class="!item.isActive || 'text-red-500' " />
      <span>{{item.name}}</span>
    </a>
  </li>
</template>

<style scoped>

</style>