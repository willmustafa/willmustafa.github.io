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
      <router-link :to="`/blog`">{{ $t("nav.blog") }}</router-link>
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
      this.isHome = this.$route.name === "home";
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

@media screen and (max-width: 768px) {
  ol {
    flex-direction: column !important;
    margin: 0;
    padding: 0;
  }

  li {
    text-align: center;
    line-height: 2rem;
  }
}
</style>
