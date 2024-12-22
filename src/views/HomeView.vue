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
    <section class="vertical-center" id="home">
      <div class="col-12 col-md-6">
        <h4>
          {{ $t("home.jumbo") }}
        </h4>
        <h1 class="jumbo bold">Willian Mustafa</h1>
        <h3 v-html="$t('home.headline')"></h3>
        <h3 v-html="$t('home.working')"></h3>
      </div>
      <div class="hero-img">
        <img
          src="@/assets/images/persona.png"
          alt=""
        />
      </div>
    </section>
    <section class="vertical-center" id="about">
      <AboutSection />
    </section>
    <section class="vertical-center" id="portfolio">
      <PortfolioPrincipal />
    </section>
    <section class="vertical-center" id="contact">
      <ContactSection />
    </section>
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

.hero-img {
  width: 50%;
  display: flex;
  justify-content: end;
}

.hero-img > img {
  width: 70%;
}

.jumbo {
  font-family: "Noto Serif", -apple-system, sans-serif;
  letter-spacing: 7px;
  margin-bottom: 1.5rem;
}
</style>
