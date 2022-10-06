<template>
  <div class="sidebar">
    <h5>
      <span class="sidebar-title"><span>Topics</span></span>
    </h5>
    <ul>
      <SidebarList
        v-for="(category, index) of categories"
        :key="index"
        :link="`/blog/${category.slug}`"
        :title="category.title"
      />
    </ul>
  </div>
</template>

<script>
import SidebarList from "../UI/SidebarList.vue";
import fetchPosts from "../../blog/fetchPosts";

export default {
  components: { SidebarList },
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    const api = new fetchPosts();
    await api.getCategories().then((el) => (this.categories = el));
  },
};
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

@media (max-width: 768px) {
  .sidebar {
    margin-top: 4rem;
  }
}
</style>
