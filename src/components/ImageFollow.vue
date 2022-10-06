<template>
  <li @mousemove="showImage">
    {{ text }}
    <span class="qodef-m-title-hover">{{ text }}</span>
    <img class="follow-img" :src="image" ref="follow-img" />
  </li>
</template>

<script>
export default {
  name: "ImageFollow",
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    showImage(e) {
      var x = e.layerX;
      var y = e.layerY;

      this.$refs["follow-img"].style.left = `${x}px`;
      this.$refs["follow-img"].style.top = `${y}px`;
    },
  },
};
</script>

<style scoped>
.follow-img {
  opacity: 0;
  width: 100px;
  height: auto;
  box-sizing: border-box;
  transition: ease 0.2s;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 0;
  object-fit: cover;
}

li:hover .follow-img {
  opacity: 0.4;
}

li {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: currentColor;
  -webkit-text-stroke-width: 1px;
  position: relative;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  margin-right: 2rem;
}

li span {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-text-stroke-color: transparent;
  -webkit-text-fill-color: currentColor;
  transition: 0.5s -webkit-clip-path cubic-bezier(0.31, 0.76, 0, 0.89);
  transition: 0.5s clip-path cubic-bezier(0.31, 0.76, 0, 0.89);
  transition: 0.5s clip-path cubic-bezier(0.31, 0.76, 0, 0.89),
    0.5s -webkit-clip-path cubic-bezier(0.31, 0.76, 0, 0.89);
  -webkit-clip-path: inset(-1px 100% -1px 0);
  clip-path: inset(-1px 100% -1px 0);
  cursor: default;
  z-index: 2;
}

li:hover span {
  -webkit-clip-path: inset(-1px 0 -1px 0);
  clip-path: inset(-1px 0 -1px 0);
}

li:not(:nth-last-of-type(1))::after {
  content: "/";
  position: absolute;
  right: -2rem;
  top: 0;
}

@media (max-width: 768px) {
  li {
    font-size: 2rem;
  }
}
</style>
