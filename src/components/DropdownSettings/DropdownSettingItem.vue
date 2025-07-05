<script>
import BaseIcon from "../../UI/BaseIcon.vue";
import {computed, defineComponent} from "vue";

export default defineComponent({
  components: {BaseIcon},
  props: {
    item: {
      type: Object,
      required: true
    },
    icon: {
      type: String,
      default: "check"
    },
    isActive: Boolean,
  },
  setup(props) {
    const iconName = computed(() => {
      return props.isActive ? "check" : props.icon;
    })
    const isIconShow = computed(() => {
      return props.isActive && props.item.icon !== 'check';
    });
    return {isIconShow, iconName}
  }
})

</script>

<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <BaseIcon v-if="isIconShow" :icon="iconName" class="w-5 h-5 mr-3 text-gray-400"  />
      <BaseIcon v-if="item.icon" :icon="iconName" class="w-5 h-5 mr-3 text-gray-400"  />
      <span :class="!isActive && !item.icon && 'ml-8'">{{item.label}}</span>
      <BaseIcon v-if="item.arrow" icon="arrow" class="w-5 h-5 text-gray-400 ml-auto" />
    </a>
  </li>
</template>

<style scoped>

</style>