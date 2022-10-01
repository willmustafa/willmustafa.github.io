<template>
  <button type="submit">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "ButtonSubmit",
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped>
button[type="submit"] {
  width: 100%;
  background: var(--color-secondary-darker);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: var(--color-text);
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}
button[type="submit"]:hover {
  background: var(--color-secondary);
}
</style>
