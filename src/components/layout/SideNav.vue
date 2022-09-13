<template>
  <div class="side-nav">
    <ul>
      <li>
        <a href="#"> willianfmustafa@gmail.com </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
.side-nav {
  position: fixed;
  right: 5px;
  top: 55%;
  z-index: 100;
  opacity: 1;
  fill: var(--color-text);
  display: flex;
  align-items: center;
  width: 25px;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.side-nav li {
  width: auto !important;
  height: auto !important;
  margin: 0;
  display: block;
  position: relative;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.side-nav ul::before,
.side-nav ul::after {
  content: "";
  display: block;
  height: 70px;
  width: 1px;
  background: linear-gradient(var(--color-text), var(--color-background));
  text-align: center;
  right: -2px;
}

.side-nav ul::before {
  top: -260px;
}

.side-nav ul::after {
  background: linear-gradient(var(--color-background), var(--color-text));
}

.side-nav li:hover {
  fill: var(--neon-blue);
}

.side-nav li a {
  width: 20px;
  height: 20px;
}
</style>
