<script>
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed} from "vue";

export default {
  components: {BaseIcon},
  props: {
    index: Number,
  },
  setup(props) {
    const dayCounts = computed(() => props.index > 1 ? 'days' : 'day');
    return {dayCounts};
  }
}
</script>

<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${index}/68`" class="mr-3 rounded-full w-9 h-9" alt="">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title</span>
      <div class="mt-1 flex items-center">
        <span>Channel name</span>
        <BaseIcon icon="check" class="w-3.5 h-3.5 ml-1" />
      </div>
      <div>
        <span>1K views</span>
        &middot;
        <span>{{index}} {{dayCounts}} ago</span>
      </div>
    </div>
    <button class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
      <BaseIcon icon="dots" />
    </button>
  </div>
</template>

<style scoped>

</style>