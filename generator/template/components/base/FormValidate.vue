<template>
  <v-form
    v-model="valid"
    :lazy-validation="lazyValidation"
    ref="form"
    @submit.prevent="handleSubmit"
  >
    <slot></slot>
  </v-form>
</template>

<script>
/**
 * Компонент валидации
 */

export default {
  name: 'FormValidate',

  props: {
    lazyValidation: Boolean,
  },

  data: () => ({
    valid: false,
  }),

  computed: {
    form() {
      return this.$refs.form;
    },
    rules() {
      return this.$store.getters['getRules'];
    },
  },

  methods: {
    handleSubmit(e) {
      if (this.form.validate() && this.valid) {
        return this.$emit('submit', e);
      }
      return this.$emit('fail-validation', e);
    },
  },
};
</script>
