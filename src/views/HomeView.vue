<script>
import AboutSection from "../components/layout/AboutSection.vue";
import PortfolioPrincipal from "../components/layout/PortfolioPrincipal.vue";
import ContactSection from "../components/layout/ContactSection.vue";

export default {
  name: "HomeView",
  data() {
    return {
      working_url: "",
    };
  },
  components: {
    AboutSection,
    PortfolioPrincipal,
    ContactSection,
  },
};
</script>

<template>
  <main class="container">
    <div class="vertical-center">
      <div class="w-50">
        <h3>
          {{ $t("home.jumbo") }}
        </h3>
        <h1 class="title bold">Willian Mustafa</h1>
        <h3
          class="text-justify"
          v-html="$t('home.headline') + $t('home.working')"
        ></h3>
      </div>
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

.w-50 {
  width: 50%;
}
</style>
