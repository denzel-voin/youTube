<script>
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed} from "vue";
import VideoItemDropdown from "./VideoItemDropdown.vue";
import BaseTooltip from "../../UI/BaseTooltip.vue";

export default {
  components: {BaseTooltip, VideoItemDropdown, BaseIcon},
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
        <BaseTooltip is-for-top title="Название канала">
          <span class="cursor-pointer">Channel name</span>
        </BaseTooltip>
        <BaseTooltip is-for-top title="Подтверждено">
          <BaseIcon icon="check" class="w-3.5 h-3.5 ml-1 cursor-pointer" />
        </BaseTooltip>
      </div>
      <div>
        <span>1K views</span>
        &middot;
        <span>{{index}} {{dayCounts}} ago</span>
      </div>
    </div>
    <VideoItemDropdown />
  </div>
</template>

<style scoped>

</style>