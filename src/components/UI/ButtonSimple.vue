<template>
  <button :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonSimple",
  props: {
    type: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "reset", "submit"].includes(value?.toLowerCase());
      },
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  background: var(--color-secondary-darker);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: var(--white-bluesh);
  font-size: 1.25rem;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}

button:hover {
  background: var(--color-secondary);
}
</style>
