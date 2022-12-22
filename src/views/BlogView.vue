<template>
  <div class="container blog-wrapper">
    <h2>Blog</h2>
    <div class="row">
      <div class="main col-12 col-md-9">
        <div class="row blog-cards">
          <CardSimple
            v-for="post in posts"
            :key="post.id"
            :link="post.slug"
            classes="col-12"
            :title="post.title"
            :content="prepareContent(post.content)"
            :categories="post.metadata?.category"
          />
        </div>
      </div>
      <div class="col-12 col-md-3">
        <BlogSidebar />
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from "../components/layout/BlogSidebar.vue";
import CardSimple from "../components/UI/CardSimple.vue";
import fetchPosts from "../blog/fetchPosts";

export default {
  components: { BlogSidebar, CardSimple },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    prepareContent(html) {
      let tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.innerText.substring(0, 200);
    },
    async getPosts() {
      const metatype = this.$route.params?.metatype;
      let query = null;

      if (metatype)
        query = {
          type: metatype,
        };

      const api = new fetchPosts();
      await api.getPosts(query).then((res) => (this.posts = res.objects));
    },
  },
  async mounted() {
    await this.getPosts();
  },
  watch: {
    $route: async function () {
      await this.getPosts();
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
}

.main,
.blog-cards > * {
  padding: 0 !important;
}

.blog-wrapper {
  margin: 6rem auto;
}

.blog-cards {
  gap: 1rem;
  padding-right: 2rem;
}
</style>
