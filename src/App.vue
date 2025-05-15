<template>
  <Header />
  <Categories />
  <SideBarSmall />
  <SideBar />
  <MobileSideBar />
  <MainContent />
</template>
<script setup>
import Header from "./components/Header/Header.vue";
import SideBarSmall from "./components/SideBarSmall.vue";
import SideBar from "./components/SideBar.vue";
import MobileSideBar from "./components/MobileSideBar.vue";
import MainContent from "./components/MainContent.vue";
import Categories from "./components/Categories.vue";
</script>