<template>
  <div class="container blog-wrapper" v-if="blogPosts.slug">
    <time>{{ toDate(blogPosts?.modified_at) }}</time>
    <article>
      <h1 class="title">
        <b>{{ blogPosts?.title }}</b>
      </h1>
      <div class="content" v-html="blogPosts?.content"></div>
    </article>
    <RelatedPosts :currentPost="blogPosts" />
  </div>
</template>

<script>
import fetchPosts from "../../blog/fetchPosts";
import RelatedPosts from "./RelatedPosts.vue";
import { toDate } from "../../helpers/dateTime";

export default {
  data() {
    return {
      blogPosts: {
        slug: "",
        title: "",
        content: "",
        modified_at: "2022-10-03T11:41:31.933Z",
      },
    };
  },
  methods: {
    async getPosts() {
      const api = new fetchPosts();
      this.blogPosts = await api
        .getPostsBySlug(this.$route.params?.slug)
        .then((res) => (this.blogPosts = res[0]));
    },
    toDate(str) {
      return toDate(str);
    },
  },
  mounted() {
    this.getPosts();
  },
  components: { RelatedPosts },
};
</script>

<style>
.blog-wrapper {
  margin-top: 10rem;
}

.blog-wrapper .title {
  margin-bottom: 2rem;
}

.blog-wrapper p,
.blog-wrapper img,
.blog-wrapper pre,
.blog-wrapper ol,
.blog-wrapper table {
  margin-bottom: 1.5rem;
}

.blog-wrapper .content {
  margin: 4.5rem 0;
}

.blog-wrapper img {
  text-align: center;
}

.blog-wrapper pre {
  background-color: var(--code-background-block);
  border: 1px solid transparent;
  margin: 1rem 0 2rem;
  padding: 1rem 2.5rem 1rem 1rem;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.blog-wrapper li::marker {
  font-weight: 900;
}

.blog-wrapper table {
  border: 1px solid var(--color-secondary);
}

.blog-wrapper table tr:nth-of-type(1) {
  width: 100%;
  background: var(--color-secondary);
  padding: calc(12px * 1.5) 0;
}

.blog-wrapper table tr {
  display: table;
  width: 100%;
  padding: calc(12px * 1.5) 0;
}

.blog-wrapper table td {
  display: table-cell;
}

.blog-wrapper table tr:not(:nth-of-type(1)):nth-of-type(odd) {
  background: #5491383b;
}

@media (prefers-color-scheme: light) {
  .blog-wrapper pre {
    color: var(--white-bluesh);
  }

  .blog-wrapper table tr:nth-of-type(1) {
    color: var(--white-bluesh);
  }
}
</style>
