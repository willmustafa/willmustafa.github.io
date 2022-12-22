<template>
  <div class="alert" :class="variation" role="alert">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AlertSimple",
  props: {
    variation: {
      type: String,
      validator(value) {
        return ["danger", "success"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.danger {
  color: var(--color-text);
  background-color: var(--purple);
}

.success {
  background-color: var(--green);
}
</style>
