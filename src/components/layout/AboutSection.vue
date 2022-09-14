<template>
  <div class="wrapper">
    <h2 class="bold mb-2">{{ $t("about.title") }}</h2>
    <h5>{{ $t("about.description") }}</h5>
    <h4 class="bold mt-1">Algumas tecnologias que trabalho:</h4>
    <ul class="skills">
      <ImageFollow :image="JavascriptLogo" text="Javascript" />
      <ImageFollow :image="ReactLogo" text="React" />
      <ImageFollow :image="VueLogo" text="Vue" />
      <ImageFollow :image="NodeLogo" text="Node.js" />
      <ImageFollow :image="MongodbLogo" text="MongoDB" />
      <ImageFollow :image="PostgresLogo" text="Postgres" />
      <ImageFollow :image="MysqlLogo" text="MySQL" />
    </ul>
  </div>
</template>

<script>
import ImageFollow from "../ImageFollow.vue";

import JavascriptLogo from "../../assets/icons/JavascriptLogo.png";
import MongodbLogo from "../../assets/icons/MongodbLogo.png";
import MysqlLogo from "../../assets/icons/MysqlLogo.png";
import NodeLogo from "../../assets/icons/NodeLogo.png";
import PostgresLogo from "../../assets/icons/PostgresLogo.png";
import ReactLogo from "../../assets/icons/ReactLogo.png";
import VueLogo from "../../assets/icons/VueLogo.png";

export default {
  name: "AboutSection",
  components: { ImageFollow },
  computed: {
    JavascriptLogo() {
      return JavascriptLogo;
    },
    ReactLogo() {
      return ReactLogo;
    },
    MongodbLogo() {
      return MongodbLogo;
    },
    MysqlLogo() {
      return MysqlLogo;
    },
    NodeLogo() {
      return NodeLogo;
    },
    PostgresLogo() {
      return PostgresLogo;
    },
    VueLogo() {
      return VueLogo;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
}

.skills {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0px 10px;
  padding: 0px;
  list-style: none;
}
</style>
