<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  components: {CategoryItem},
  setup() {
    const categories = [
        'All', 'Trucks', 'Tools', 'Machines', 'Engines', 'Snow', 'Ships', 'Roads', 'Roads',
        'Tanks', 'Building', 'Mars', 'Woodworking', 'Tractors', 'Songs', 'TV Shows', 'Football',
        'Planes', 'Live', 'Streets', 'Math', 'Programming'
    ]
    return {categories};
  }
}
</script>

<template>
  <section class="pt-14 md:pl-24 xl:pl-64 w-full fixed bg-white bg-opacity-95 z-10">
    <div class="border-t border-b px-4 max-w-screen-2xl m-auto">
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