<template>
  <section>
    <h2 class="bold mb-2">{{ $t("portfolio.title") }}</h2>
    <PorfolioPrincipalElement
      v-for="project of projects"
      :key="project.id"
      :overTitle="project?.openSource ? 'Projeto Open Source' : ''"
      :title="project.title"
      :subtitle="project.categories"
      :description="project.description"
      :link="project.link"
      :image="project.image"
      :right="project.id % 2"
    />
    <ButtonSimple v-if="loadMore.length">{{
      $t("portfolio.loadMore")
    }}</ButtonSimple>
  </section>
</template>

<script>
import PorfolioPrincipalElement from "../PorfolioPrincipalElement.vue";
import ButtonSimple from "../UI/ButtonSimple.vue";
import Portfolio from "../../blog/projects.json";

export default {
  name: "PortfolioPrincipal",
  components: { PorfolioPrincipalElement, ButtonSimple },
  computed: {
    projects() {
      return Portfolio.featured;
    },
    loadMore() {
      return Portfolio.others;
    },
  },
};
</script>

<style></style>
