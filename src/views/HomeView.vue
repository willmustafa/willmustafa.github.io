<script setup>
import AboutSection from "../components/layout/AboutSection.vue";
import PortfolioPrincipal from "../components/layout/PortfolioPrincipal.vue";
import ContactSection from "../components/layout/ContactSection.vue";
</script>

<template>
  <main class="container">
    <div class="vertical-center">
      {{ $t("home.headline") }}
    </div>
    <div class="vertical-center">
      <PortfolioPrincipal />
    </div>
    <div class="vertical-center">
      <AboutSection />
    </div>
    <div class="vertical-center">
      <ContactSection />
    </div>
  </main>
</template>

<style>
main {
  min-height: 100vh;
  width: 100%;
  margin: 0px auto;
  margin-top: calc(-1 * var(--header-height));
}
</style>
