<template>
  <div class="wrapper">
    <h2 class="bold mb-2">{{ $t("contact.title") }}</h2>
    <h5>{{ $t("contact.description") }}</h5>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../ContactForm.vue";
export default {
  name: "ContactSection",
  components: { ContactForm },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
}
</style>
