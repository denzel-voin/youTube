<script>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";

export default {
  components: {VideoItemThumbnail, VideoItemInfo},
  props: {
    index: Number,
  }
}

</script>

<template>
  <a class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>

<style scoped>

</style>