<template>
  <div class="related-wrapper">
    <div>
      <h2 class="row related-title">Posts Relacionados</h2>
      <div class="row related-posts">
        <CardSimple
          classes="col-4"
          title="Teste 1"
          content="Blabla bla blablalba"
        />
        <CardSimple
          classes="col-4"
          title="Arrays em JS"
          content="Blabla bla blablalba"
        />
        <CardSimple
          classes="col-4"
          title="Objetos"
          content="Blabla bla blablalba"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardSimple from "../UI/CardSimple.vue";
export default {
  name: "RelatedPosts",
  components: { CardSimple },
};
</script>

<style scoped>
.related-wrapper {
  margin-bottom: 4rem;
}
.related-title {
  margin-bottom: 4rem;
}

.related-posts {
  display: flex;
}
</style>
