<template>
  <a class="portfolio-wrapper" href="#">
    <div class="portfolio-info">
      <h5 class="text-neon-blue">Projeto Open Source</h5>
      <h2 class="title bold uppercase">Money 7</h2>
      <h3 class="mb-2">React, Express, Postgres</h3>
      <h4>
        Site para controle financeiro, com importação de movimentações e
        definições de metas.
      </h4>
    </div>
    <div class="portfolio-image">
      <div class="image-wrapper">
        <img src="../assets/images/preview-3.922e88b86f7.webp" alt="" />
      </div>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped>
.portfolio-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
}

.portfolio-info {
  position: relative;
  z-index: 2;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
}

.portfolio-image {
  position: relative;
  z-index: 1;
  display: flex;
  width: 50%;
}

img {
  height: 100%;
  margin: 0;
  max-width: none;
  padding: 0;
  width: 100%;
}

.image-wrapper {
  height: 100%;
  vertical-align: middle;
  width: 100%;
  position: relative;
}
</style>
