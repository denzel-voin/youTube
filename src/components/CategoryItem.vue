<script>
import { computed } from "vue";

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const classes = computed(() => {
      return props.isActive
          ? "px-3 py-1 transition bg-gray-600 border border-gray-700 rounded-full hover:bg-gray-500 text-white"
          : "px-3 py-1 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200";
    });
    return { classes };
  }
}
</script>

<template>
  <a href="#" :class="classes">{{ category }}</a>
</template>

<style scoped>

</style>
