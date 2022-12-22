<template>
  <div class="form-group">
    <label class="label" :for="name">{{ label }}</label>
    <slot />
  </div>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 0;
}
</style>
