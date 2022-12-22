<template>
  <li v-if="title" :class="{ active: $route.fullPath === link }">
    <router-link :to="link">
      <h5>{{ title }}</h5>
      <span v-if="count">{{ count }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "SidebarList",
  props: {
    link: {
      type: String,
      required: true,
      default: "#",
    },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: String || Number,
    },
  },
};
</script>

<style scoped>
li {
  border-bottom: 1px solid;
  border-bottom-color: var(--color-text);
  overflow: hidden;
  transition: color, border 0.1s ease;
}

li:hover,
li.active {
  color: var(--color-secondary);
  border-bottom-color: var(--color-secondary);
}

li a {
  padding: 1.25rem 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
