<template>
  <section>
    <h2 class="bold mb-2">{{ $t("portfolio.title") }}</h2>
    <PorfolioPrincipalElement
      overTitle="Projeto Open Source"
      title="Money 7"
      subtitle="React, Express, Postgres"
      description="Site para controle financeiro, com importação de movimentações e
        definições de metas."
      image="https://quiety.themetags.com/assets/img/app-two-feature-phone-with-shape.png"
    />
    <PorfolioPrincipalElement
      overTitle="Projeto Open Source"
      title="Money 7"
      subtitle="React, Express, Postgres"
      description="Site para controle financeiro, com importação de movimentações e
        definições de metas."
      image="https://n.foxdsgn.com/twilo/wp-content/uploads/elementor/thumbs/Frame-158-1-pt08ediwc60gle6gtgzemt60p3k2y0h4xmia58gimm.png"
      right
    />
  </section>
</template>

<script>
import PorfolioPrincipalElement from "../PorfolioPrincipalElement.vue";
export default {
  name: "PortfolioPrincipal",
  components: { PorfolioPrincipalElement },
};
</script>

<style></style>
