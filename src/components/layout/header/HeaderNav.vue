<template>
  <header>
    <nav>
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
export default { components: { NavLinks } };
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
  height: 120px;
  padding: 0px 8rem;
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
