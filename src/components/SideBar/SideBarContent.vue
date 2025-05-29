<script>
import ButtonLogin from "../../UI/ButtonLogin.vue";
import SideBarItem from "./SideBarItem.vue";
import SideBarHeader from "./SideBarHeader.vue";
import SideBarSection from "./SideBarSection.vue";
import SideBarFooter from "./SideBarFooter.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {SideBarFooter, SideBarHeader, ButtonLogin, SideBarItem, SideBarSection},
  props: {
    lists: Array,
  }
})

</script>

<template>
  <SideBarSection>
    <ul>
      <SideBarItem v-for="list in lists.slice(0,3)" :key="list.name" :item="list"/>
    </ul>
  </SideBarSection>
  <SideBarSection>
    <ul>
      <SideBarItem v-for="list in lists.slice(3, 5)" :key="list.name" :item="list"/>
    </ul>
  </SideBarSection>
  <SideBarSection class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
    <ButtonLogin
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"/>
  </SideBarSection>
  <SideBarSection>
    <SideBarHeader title="Best of YouTube"/>
    <ul>
      <SideBarItem v-for="list in lists.slice(5, 12)" :key="list.name" :item="list"/>
    </ul>
  </SideBarSection>
  <SideBarSection>
    <ul>
      <SideBarItem v-for="list in lists.slice(12, 13)" :key="list.name" :item="list"/>
    </ul>
  </SideBarSection>
  <SideBarSection>
    <SideBarHeader title="More from YouTube"/>
    <ul>
      <SideBarItem v-for="list in lists.slice(13, 15)" :key="list.name" :item="list"/>
    </ul>
  </SideBarSection>
  <SideBarSection>
    <ul>
      <SideBarItem v-for="list in lists.slice(15)" :key="list.name" :item="list"/>
    </ul>
  </SideBarSection>
  <SideBarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <SideBarFooter/>
  </SideBarSection>
</template>

<style scoped>

</style>