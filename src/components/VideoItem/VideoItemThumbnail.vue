<script>
import BaseIcon from "../../UI/BaseIcon.vue";
import VideoItemThumbnailButton from "./VideoItemThumbnailButton.vue";

export default {
  components: { VideoItemThumbnailButton, BaseIcon},
  props: {
    index: Number,
  }
}

</script>

<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`">
    <VideoItemThumbnailButton icon="clock" label="смотреть позже" width="28" class="top-0" />
    <VideoItemThumbnailButton icon="menuAlt3" label="Добавить в очередь" width="32" class="top-8" />
  </div>
</template>

<style scoped>

</style>