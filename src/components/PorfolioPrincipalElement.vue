<template>
  <a
    class="portfolio-wrapper"
    :href="link"
    :class="{ 'flex-row-reverse': right }"
  >
    <div class="portfolio-info col-12 col-md-6">
      <h5 class="text-neon-blue">{{ overTitle }}</h5>
      <h2 class="title bold uppercase">{{ title }}</h2>
      <h3 class="mb-2">{{ subtitle }}</h3>
      <h4>{{ description }}</h4>
    </div>
    <div class="portfolio-image col-12 col-md-6">
      <div class="image-wrapper">
        <img :src="image" alt="" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "PortfolioPrincipalElement",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    overTitle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.portfolio-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 11rem;
}

.flex-row-reverse {
  flex-direction: row-reverse;
  text-align: right;
}

.portfolio-info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
}

.portfolio-image {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0 3rem;
}

img {
  height: 100%;
  margin: 0;
  max-width: none;
  padding: 0;
  width: 100%;
}

.image-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
}

@media (max-width: 768px) {
  .portfolio-wrapper {
    flex-direction: column;
    margin: 2rem 0;
  }

  .portfolio-info {
    margin-right: 0 !important;
  }

  .portfolio-image {
    margin-top: 2rem;
    padding: 0 3rem;
  }
}
</style>
