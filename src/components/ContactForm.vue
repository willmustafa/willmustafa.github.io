<template>
  <form method="POST" @submit.prevent="onSubmit">
    <div class="holder-field">
      <div class="field-holder">
        <FormGroup name="name" :label="$t('contact.name')">
          <InputText name="name" placeholder="Willian Mustafa" />
        </FormGroup>
        <FormGroup name="email" label="Email">
          <InputText name="email" placeholder="ceo@google.com" />
        </FormGroup>
        <FormGroup name="message" :label="$t('contact.message')">
          <TextArea
            name="message"
            :placeholder="$t('contact.messagePlaceholder')"
          />
        </FormGroup>
        <ButtonSubmit :name="$t('contact.send')" />
      </div>
    </div>
  </form>
</template>

<script>
import FormGroup from "./UI/FormGroup.vue";
import InputText from "./UI/InputText.vue";
import TextArea from "./UI/TextArea.vue";
import ButtonSubmit from "./UI/ButtonSubmit.vue";
export default {
  components: { FormGroup, InputText, TextArea, ButtonSubmit },
  methods: {
    onSubmit() {},
  },
};
</script>

<style scoped></style>
