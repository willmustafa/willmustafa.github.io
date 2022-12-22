<template>
  <div :class="classes">
    <div class="card">
      <router-link :to="`/post/${link}`" class="card-inner">
        <div class="category" v-if="categories">
          <span v-for="(category, index) of categoriesArr" :key="index">{{
            category
          }}</span>
        </div>
        <h2 class="card-title">{{ title }}</h2>
        <p>
          {{ content }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSimple",
  props: ["classes", "title", "content", "link", "categories"],
  computed: {
    categoriesArr() {
      return Array.isArray(this.categories)
        ? this.categories
        : [this.categories];
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(var(--white-bluesh-opac));
  padding: 1.5rem;
  min-height: 20rem;
  display: grid;
  position: relative;
  color: var(--color-background);
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
  overflow: hidden;
}

@media (prefers-color-scheme: light) {
  .card {
    background-color: var(--navy-blue);
    color: var(--white-bluesh);
  }

  .card::after,
  .card::before {
    background: var(--navy-green) !important;
  }
}

.card-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card a:hover {
  color: var(--color-text) !important;
}

.category {
  position: absolute;
  height: 0.5rem;
  display: block;
  left: 0;
  top: 0;
  background-color: var(--purple);
  width: 5rem;
  transition: opacity 0.5s ease;
}

.category > span {
  opacity: 0;
}

.card:hover .category > span {
  opacity: 1;
}

.card-title {
  display: flex;
  align-items: center;
  flex-grow: 1;
  line-height: 2rem;
}

.card::before {
  background: var(--purple);
  width: 250%;
  height: 250%;
}
.card::before,
.card::after {
  content: "";
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -35%;
  top: -35%;
  z-index: -5;
  transition: all 0.5s;
  transition-timing-function: ease-in-out;
}

.card:hover {
  transform: rotate(0);
}

.card::after {
  background: var(--purple);
  width: 200%;
  height: 200%;
}

.card:hover::before,
.card:hover::after {
  transform: scale(1);
}
</style>
