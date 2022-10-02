<template>
  <textarea
    :name="name"
    :placeholder="placeholder"
    :required="required"
  ></textarea>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
  font-family: Helvetica, Arial, sans-serif;
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
  color: var(--color-text);
}

textarea:not(:focus):not(:placeholder-shown):invalid {
  border-color: var(--purple);
}
textarea:not(:focus):not(:placeholder-shown):invalid ~ .error-message {
  display: block;
}

textarea:not(:focus):not(:placeholder-shown):valid {
  border-color: var(--green);
}
</style>
