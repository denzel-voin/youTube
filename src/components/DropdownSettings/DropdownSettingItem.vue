<script>
import BaseIcon from "../../UI/BaseIcon.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {BaseIcon},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})

</script>

<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <BaseIcon v-if="item.icon" :icon="item.icon" class="w-6 h-6 mr-3 text-gray-400"  />
      <span>{{item.label}}</span>
      <BaseIcon v-if="item.arrow" icon="arrow" class="w-5 h-5 text-gray-400 ml-auto" />
    </a>
  </li>
</template>

<style scoped>

</style>