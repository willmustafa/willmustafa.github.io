<template>
  <header :class="{ 'is-hidden': !showHeader, 'is-home': headerAtHome }">
    <nav class="container">
      <div class="logo">
        <router-link to="/">
          <img class="light-logo" src="@/assets/images/logo.png" alt="" />
          <img class="dark-logo" src="@/assets/images/light-logo.png" alt="" />
        </router-link>
      </div>
      <button
        type="button"
        class="navbar-toggler collapsed"
        @click="toggleCollapseNavbar"
      >
        <span class="navbar-toggler-icon"><BarsIcon /></span>
      </button>
      <div class="nav-wrapper" :class="{ show: collapsed }">
        <NavLinks />
      </div>
    </nav>
  </header>
</template>

<script>
import NavLinks from "./NavLinks.vue";
import BarsIcon from "../../../assets/icons/BarsIcon.vue";

export default {
  name: "HeaderNav",
  components: { NavLinks, BarsIcon },
  props: {
    showHeader: {
      type: Boolean,
    },
    headerAtHome: {
      type: Boolean,
    },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapseNavbar() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.navbar-toggler {
  border: none;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  margin-left: auto;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: 50%/100% 100% no-repeat;
}

.navbar-toggler-icon > svg {
  fill: var(--color-text);
}

@media (min-width: 992px) {
  .navbar-toggler {
    display: none;
  }

  .nav-wrapper {
    display: -ms-flexbox !important;
    display: flex !important;
    align-items: center;
    margin-left: auto;
    justify-content: end;
  }
}

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
  width: 35px;
}

.nav-wrapper:not(.show) {
  display: none;
}

.nav-wrapper {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  header {
    padding: 0px 50px;
    display: block;
  }

  .logo {
    padding: 1rem 0;
  }

  .nav-wrapper {
    background: var(--color-background);
  }

  nav {
    flex-wrap: wrap;
  }
}

.dark-logo {
  display: none;
}
.light-logo {
  display: block;
}

@media (prefers-color-scheme: dark) {
  .dark-logo {
    display: block;
  }
  .light-logo {
    display: none;
  }
}
</style>
