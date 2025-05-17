<script>
import BaseIcon from "../../UI/BaseIcon.vue";
export default {
  components: {BaseIcon},
  props: {
    label: {
      type: String
    }
  }
}
</script>

<template>
  <li>
    <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <BaseIcon icon="play" class="w-6 h-6 mr-3 text-red-500" />
      <span>{{label}}</span>
    </a>
  </li>
</template>

<style scoped>

</style>