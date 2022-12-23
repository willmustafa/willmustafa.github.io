<template>
  <form method="POST" @submit.prevent="onSubmit">
    <div class="holder-field">
      <div class="field-holder">
        <FormGroup name="name" :label="$t('contact.name')">
          <InputText
            name="name"
            placeholder="Willian Mustafa"
            :required="true"
          />
        </FormGroup>
        <FormGroup name="email" label="Email">
          <InputText
            name="email"
            type="email"
            placeholder="ceo@google.com"
            :required="true"
          />
        </FormGroup>
        <FormGroup name="message" :label="$t('contact.message')">
          <TextArea
            name="message"
            :placeholder="$t('contact.messagePlaceholder')"
            :required="true"
          />
        </FormGroup>
        <ButtonSimple type="submit">{{ $t("contact.send") }}</ButtonSimple>
        <AlertSimple v-if="alertMessage" :variation="alertVariation">{{
          alertMessage
        }}</AlertSimple>
      </div>
    </div>
  </form>
</template>

<script>
import FormGroup from "./UI/FormGroup.vue";
import InputText from "./UI/InputText.vue";
import TextArea from "./UI/TextArea.vue";
import ButtonSimple from "./UI/ButtonSimple.vue";
import AlertSimple from "./UI/AlertSimple.vue";
import axios from "axios";

export default {
  components: { FormGroup, InputText, TextArea, ButtonSimple, AlertSimple },
  data() {
    return {
      alertMessage: "",
      alertVariation: "success",
    };
  },
  methods: {
    async onSubmit(event) {
      let name = event.target.name.value;
      let email = event.target.email.value;
      let message = event.target.message.value;

      await axios
        .post(
          "https://formspree.io/f/meqwjloj",
          {
            email,
            message: `From: ${name} - Message: ${message}`,
          },
          { Accept: "application/json" }
        )
        .then(() => (this.alertMessage = this.$t("contact.success")))
        .catch(() => {
          this.alertMessage = this.$t("contact.error");
          this.alertVariation = "danger";
        });
    },
  },
};
</script>

<style scoped></style>
