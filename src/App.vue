<template>
  <Header @toggle-sidebar="toggleSidebar" />
  <SideBarSmall :isOpen="sideBarState === 'compact'" />
  <SideBar :isOpen="sideBarState === 'normal'" />
  <MobileSideBar @toggle-sidebar="toggleSidebar" :isOpen="isMobileSidebarOpen" />
  <Categories :isOpen="sideBarState === 'normal'" />
  <MainContent :isOpen="sideBarState === 'normal'"  />
</template>
<script>
import Header from "./components/Header/Header.vue";
import SideBarSmall from "./components/SideBar/SmallSidebar/SideBarSmall.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import MobileSideBar from "./components/SideBar/MobileSideBar/MobileSideBar.vue";
import MainContent from "./components/MainContent.vue";
import Categories from "./components/Categories.vue";
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  components: {Header, MainContent, MobileSideBar, SideBar, SideBarSmall, Categories},
  setup() {
    const isMobileSidebarOpen = ref(false);
    const sideBarState = ref('');

    const toggleSidebar = () => {
      if (window.innerWidth >= 1280) {
        sideBarState.value = sideBarState.value === 'normal' ? 'compact' : 'normal';
      } else isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
    };

    onMounted(() => {
      if(window.innerWidth >= 768 && window.innerWidth <= 1280) {
        sideBarState.value = 'compact';
      }
      if (window.innerWidth > 1280) {
        sideBarState.value = 'normal';
      }
    })
    return {toggleSidebar, isMobileSidebarOpen, sideBarState}
  }
})

</script>