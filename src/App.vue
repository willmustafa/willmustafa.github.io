<script>
import HeaderNav from "./components/layout/header/HeaderNav.vue";
import SocialLinks from "./components/layout/SocialLinks.vue";
import SideNav from "./components/layout/SideNav.vue";

export default {
  name: "App",
  components: { HeaderNav, SocialLinks, SideNav },
  data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>

<template>
  <div id="app">
    <HeaderNav :showHeader="showHeader" />
    <router-view />
    <SocialLinks />
    <SideNav />
  </div>
</template>

<style scoped></style>
