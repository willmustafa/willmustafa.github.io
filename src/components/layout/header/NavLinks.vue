<template>
  <ol>
    <li>
      <router-link to="#home">{{ $t("nav.home") }}</router-link>
    </li>
    <li>
      <router-link to="#about">{{ $t("nav.about") }}</router-link>
    </li>
    <li>
      <router-link to="#portfolio">{{ $t("nav.portfolio") }}</router-link>
    </li>
    <li>
      <router-link to="#contact">{{ $t("nav.contact") }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {};
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
</style>
