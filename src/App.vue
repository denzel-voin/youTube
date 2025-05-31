<template>
  <Header @open-mobile-sidebar="openMobileSidebar" />
  <Categories />
  <SideBarSmall />
  <SideBar />
  <MobileSideBar @open-mobile-sidebar="openMobileSidebar" :isOpen="isMobileSidebarOpen" />
  <MainContent />
</template>
<script>
import Header from "./components/Header/Header.vue";
import SideBarSmall from "./components/SideBarSmall.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import MobileSideBar from "./components/SideBar/MobileSideBar/MobileSideBar.vue";
import MainContent from "./components/MainContent.vue";
import Categories from "./components/Categories.vue";
import {defineComponent, ref} from "vue";

export default defineComponent({
  components: {Header, MainContent, MobileSideBar, SideBar, SideBarSmall, Categories},
  setup() {
    const isMobileSidebarOpen = ref(false);
    const openMobileSidebar = () => {
      isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
    };
    return {openMobileSidebar, isMobileSidebarOpen}
  }
})

</script>