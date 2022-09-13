<template>
  <div class="wrapper">
    <h2 class="bold mb-2">{{ $t("about.title") }}</h2>
    <h5>{{ $t("about.description") }}</h5>
    <ul class="skills">
      <li>JavaScript (ES6+)</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Eleventy</li>
      <li>Node.js</li>
      <li>WordPress</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
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
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}

.skills li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

.skills li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  line-height: 12px;
}
</style>
