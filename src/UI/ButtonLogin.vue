<script>
import BaseIcon from "./BaseIcon.vue";
import { computed, useAttrs } from "vue";

export default {
  name: "ButtonLogin",
  components: { BaseIcon },
  setup() {
    const attrs = useAttrs();
    const classes = computed(() =>
        attrs.class ??
        "focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
    );
    return { classes };
  }
};
</script>

<template>
  <button :class="classes">
    <BaseIcon icon="user" class="mr-2 w-7 h-7" />
    Sign In
  </button>
</template>

<style scoped>
</style>
