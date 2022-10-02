<template>
  <header :class="{ 'is-hidden': !showHeader, 'is-home': headerAtHome }">
    <nav class="container">
      <div class="logo">
        <a href="/">
          <img src="@/assets/images/logo.png" alt="" />
        </a>
      </div>
      <div class="nav-wrapper">
        <NavLinks />
      </div>
      <div class="collapsed"></div>
    </nav>
  </header>
</template>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  name: "HeaderNav",
  components: { NavLinks },
  props: {
    showHeader: {
      type: Boolean,
    },
    headerAtHome: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  height: var(--header-height);
  background-color: var(--header-color);
  box-shadow: 0 10px 30px -10px var(--header-shadow);
  transform: translateY(0);
  transition: transform 300ms linear, box-shadow 300ms linear;
}

.is-home {
  box-shadow: none;
}

header.is-hidden {
  transform: translateY(-100%);
  box-shadow: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.logo {
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
}

.logo img {
  width: 120px;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  header {
    padding: 0px 50px;
  }
}
</style>
