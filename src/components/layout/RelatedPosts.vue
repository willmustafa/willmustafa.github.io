<template>
  <div class="related-wrapper">
    <div>
      <h2 class="row related-title">Posts Relacionados</h2>
      <div class="row related-posts">
        <CardSimple
          v-for="post of posts"
          :key="post.id"
          classes="col-12 col-md-4"
          :title="post.title"
          :content="prepareContent(post.content)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardSimple from "../UI/CardSimple.vue";
import fetchPosts from "../../blog/fetchPosts";

export default {
  name: "RelatedPosts",
  components: { CardSimple },
  props: ["currentPost"],
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    prepareContent(html) {
      let tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.innerText.substring(0, 100);
    },
  },
  async mounted() {
    const metatype = this.currentPost.type;
    let query = null;

    if (metatype)
      query = {
        type: metatype,
      };

    const api = new fetchPosts();
    await api
      .getPosts(query)
      .then(
        (res) =>
          (this.posts = res.objects
            .filter((el) => el.id !== this.currentPost.id)
            .slice(0, 3))
      );
  },
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
