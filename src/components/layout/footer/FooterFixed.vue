<template>
  <footer>Voltar ao topo</footer>
</template>

<script>
export default {
  name: "FooterFixed",
};
</script>

<style>
footer {
  position: fixed;
  width: 50%;
  bottom: 0;
  right: 0;
  float: right;
  text-align: end;
  margin-right: 8rem;
  height: 60px;
  color: white;
  fill: white;
}
</style>
