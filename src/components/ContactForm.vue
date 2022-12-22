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

export default {
  components: { FormGroup, InputText, TextArea, ButtonSimple, AlertSimple },
  data() {
    return {
      alertMessage: "",
      alertVariation: "success",
    };
  },
  methods: {
    onSubmit(event) {
      let name = event.target.name.value;
      let email = event.target.email.value;
      let message = event.target.name.message;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Basic MGY3NmYyZWUxZDYyYzRkM2NkYjhiYTZkY2NjZWY2MzA6ZGM4Y2VjN2QzZWFmM2FiYTE1OGRhNDRjNmJjNzBjYWQ="
      );

      var raw = JSON.stringify({
        Messages: [
          {
            From: {
              Email: email,
              Name: name,
            },
            To: [
              {
                Email: "willian2142@gmail.com",
                Name: "Willian",
              },
            ],
            Subject: "From Website",
            TextPart: message,
          },
        ],
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://api.mailjet.com/v3.1/send", requestOptions)
        .then((response) => response.text())
        .then((result) => (this.alertMessage = result))
        .catch((error) => {
          this.alertMessage = error;
          this.alertVariation = "danger";
        });
    },
  },
};
</script>

<style scoped></style>
