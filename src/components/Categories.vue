<script>
import CategoryItem from "./CategoryItem.vue";
import {computed} from "vue";

export default {
  components: {CategoryItem},
  props: {
    isOpen: Boolean,
  },
  setup(props) {
    const categories = [
        'All', 'Trucks', 'Tools', 'Machines', 'Engines', 'Snow', 'Ships', 'Roads', 'Roads',
        'Tanks', 'Building', 'Mars', 'Woodworking', 'Tractors', 'Songs', 'TV Shows', 'Football',
        'Planes', 'Live', 'Streets', 'Math', 'Programming'
    ];
    const classes = computed(() => {
      return [
        props.isOpen ? 'xl:pl-64' : 'md:pl-24',
        'pt-14',
        'w-full',
        'fixed',
        'bg-white',
        'bg-opacity-95',
        'z-10',
      ]
    })
    return {categories, classes};
  }
}
</script>

<template>
  <section :class="classes">
    <div class="border-t border-b px-4 border-black/20">
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <CategoryItem v-for="category in categories"
                      :key="category"
                      :category="category"
                      :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>