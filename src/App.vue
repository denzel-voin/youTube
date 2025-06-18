<template>
  <Header @toggle-sidebar="toggleSidebar" />
  <SideBarCompact v-if="isCompactSidebarOpen" />
  <SideBar v-if="isSidebarOpen" />
  <MobileSideBar @toggle-sidebar="toggleSidebar" :isOpen="isMobileSidebarOpen" />
  <Categories :isOpen="isSidebarOpen" />
  <MainContent :isOpen="isSidebarOpen"  />
</template>
<script>
import Header from "./components/Header/Header.vue";
import SideBarCompact from "./components/SideBar/SideBarCompact/SideBarCompact.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import MobileSideBar from "./components/SideBar/MobileSideBar/MobileSideBar.vue";
import MainContent from "./components/MainContent.vue";
import Categories from "./components/Categories.vue";
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";

export default defineComponent({
  components: {Header, MainContent, MobileSideBar, SideBar, SideBarCompact, Categories},
  setup() {
    const isCompactSidebarActive = ref(false);
    const isMobileSidebarOpen = ref(false);
    const isCompactSidebarOpen = ref(false);
    const isSidebarOpen = ref(false);

    let resizeObserver = null;
    let lastWidth = 0;
    let debounceTimeout = null;

    const toggleSidebar = () => {
      if (document.documentElement.clientWidth >= 1280) {
        isCompactSidebarActive.value = !isCompactSidebarActive.value;
        updateSidebarState(null, true);
      } else {
        isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
      }
    };

    const updateSidebarState = (width = null, force = false) => {
      const currentWidth = width || document.documentElement.clientWidth;

      if (!force && Math.abs(currentWidth - lastWidth) < 5) {
        return;
      }

      lastWidth = currentWidth;

      if (currentWidth < 768) {
        isCompactSidebarOpen.value = false;
        isSidebarOpen.value = false;
      } else if (currentWidth < 1280) {
        isCompactSidebarOpen.value = true;
        isSidebarOpen.value = false;
      } else {
        isCompactSidebarOpen.value = isCompactSidebarActive.value;
        isSidebarOpen.value = !isCompactSidebarActive.value;
        isMobileSidebarOpen.value = false;
      }
    };

    const debouncedUpdate = (width) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      debounceTimeout = setTimeout(() => {
        updateSidebarState(width);
      }, 100);
    };

    onMounted(() => {
      const initialWidth = document.documentElement.clientWidth;
      lastWidth = initialWidth;

      if (initialWidth >= 768 && initialWidth <= 1280) {
        isCompactSidebarActive.value = true;
      }
      if (initialWidth > 1280) {
        isCompactSidebarActive.value = false;
      }

      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const width = entry.contentRect.width;
            debouncedUpdate(width);
          }
        });

        resizeObserver.observe(document.documentElement);
      } else {
        const fallbackResize = () => {
          const width = document.documentElement.clientWidth;
          debouncedUpdate(width);
        };
        window.addEventListener("resize", fallbackResize);
      }

      updateSidebarState(initialWidth);
    });

    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    });

    return {toggleSidebar, isMobileSidebarOpen, isCompactSidebarOpen, isSidebarOpen}
  }
})
</script>