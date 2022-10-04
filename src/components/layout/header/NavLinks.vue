<template>
  <ol>
    <li>
      <router-link :to="`${isHome ? '#' : '/#'}home`">{{
        $t("nav.home")
      }}</router-link>
    </li>
    <li>
      <router-link :to="`${isHome ? '#' : '/#'}about`">{{
        $t("nav.about")
      }}</router-link>
    </li>
    <li>
      <router-link :to="`${isHome ? '#' : '/#'}portfolio`">{{
        $t("nav.portfolio")
      }}</router-link>
    </li>
    <li>
      <router-link :to="`${isHome ? '/' : '#'}blog`">{{
        $t("nav.blog")
      }}</router-link>
    </li>
    <li>
      <router-link :to="`${isHome ? '#' : '/#'}contact`">{{
        $t("nav.contact")
      }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: "NavLinks",
  data() {
    return {
      isHome: true,
    };
  },
  watch: {
    $route: function () {
      this.isHome = this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
ol {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

li {
  position: relative;
  margin: 0 2rem;
}

li:hover {
  color: var(--color-secondary);
}
</style>
