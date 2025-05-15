<script>
import icons from './icons.js'
export default {
  props: {
    icon: {
      type: String,
    }
  },
  setup(props) {
    const icon = icons[props.icon];
    return {
      icon
    }
  }
}

</script>

<template>
  <svg :class="$attrs.class || 'w-6 h-6'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-html="icon">

  </svg>
</template>

<style scoped>

</style>