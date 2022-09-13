<script setup>
import HeaderNav from "./components/layout/header/HeaderNav.vue";
import SocialLinks from "./components/layout/SocialLinks.vue";
import SideNav from "./components/layout/SideNav.vue";
</script>

<template>
  <div id="app">
    <HeaderNav />
    <router-view />
    <SocialLinks />
    <SideNav />
  </div>
</template>

<style scoped></style>
