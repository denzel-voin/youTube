<script>
export default {
  name: 'SideBarHeader',
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<template>
  <div class="uppercase text-sm font-semibold px-6 py-2">
    {{title}}
  </div>
</template>

<style scoped>

</style>