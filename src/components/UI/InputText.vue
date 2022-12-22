<template>
  <input
    :name="name"
    :type="type"
    class="feedback-input"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style scoped>
input {
  color: var(--color-text);
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid var(--color-secondary-darker);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

input:not(:focus):not(:placeholder-shown):invalid {
  border-color: var(--purple);
}
input:not(:focus):not(:placeholder-shown):invalid ~ .error-message {
  display: block;
}

input:not(:focus):not(:placeholder-shown):valid {
  border-color: var(--green);
}
</style>
