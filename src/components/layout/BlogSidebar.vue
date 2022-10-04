<template>
  <div class="sidebar">
    <h5>
      <span class="sidebar-title"><span>Topics</span></span>
    </h5>
    <ul>
      <SidebarList link="/blog/programacao" title="Programação" />
      <SidebarList link="/blog/javascript" title="JavaScript" />
      <SidebarList link="/blog/css" title="CSS" />
      <SidebarList link="/blog/vue" title="VUE" />
      <SidebarList link="/blog/react" title="React" />
      <SidebarList link="/blog/nosql" title="NoSQL" />
      <SidebarList link="/blog/SQL" title="SQL" />
    </ul>
  </div>
</template>

<script>
import SidebarList from "../UI/SidebarList.vue";
export default { components: { SidebarList } };
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 2rem;
}
.sidebar-title {
  margin-bottom: 2rem;
  padding-top: 0.5rem;
  border-top: 2px solid var(--color-secondary);
  display: block;
  width: 100%;
  font-weight: 900;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
