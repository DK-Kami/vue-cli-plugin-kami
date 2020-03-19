<template>
  <form-validate @submit="handleSubmit" @fail-validation="hadleFailValidation">
    <v-card elevation="0">
      <v-card-title class="pa-0">
        <v-layout column>
          <v-layout align-center>
            <slot name="title">
              <span
                class="font-weight-regular"
                :class="{ 'pa-4' : title }"
              >{{ title }}</span>
            </slot>

            <v-spacer />
            <slot name="afterTitle">
              <span class="caption secondary--text cursor--pointer change-form-button" @click="$emit('after-title-action')">
                {{ afterTitle }}
              </span>
            </slot>
          </v-layout>

          <v-flex xs12>
            <v-slide-y-transition>
              <v-alert
                v-if="error"
                style="width:100%"
                class="mb-0 mt-3"
                border="top"
                color="error"
                dark
              >{{ error }}</v-alert>
            </v-slide-y-transition>
          </v-flex>

          <v-divider />
        </v-layout>
      </v-card-title>

      <v-card-text class="mt-4 pb-0">
        <slot></slot>
      </v-card-text>

      <v-card-actions>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </form-validate>
</template>

<script>
/**
 * Компонент формы
 */

import FormValidate from './FormValidate';

export default {
  name: 'FormBase',

  components: {
    FormValidate,
  },

  props: {
    afterTitle: String,
    title: String,
  },

  data: () => ({
    error: '',
  }),

  methods: {
    hadleFailValidation(e) {
      this.$emit('fail-validation', e);
      return this.error = 'Проверьте заполненность и корректность данных полей';
    },
    handleSubmit(e) {
      this.$emit('submit', e);
      return this.error = '';
    },

    setError(error) {
      return this.error = error;
    },
  },
};
</script>
