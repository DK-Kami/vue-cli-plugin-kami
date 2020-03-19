<template>
  <v-dialog
    v-model="dialog"
    :max-width="maxWidth"
  >
    <v-card :height="height" class="d-flex flex-column">
      <v-card-title>
        <v-layout justify-space-between align-center>
          <slot name="title">{{ title }}</slot>

          <slot name="closeIcon">
            <v-tooltip top>
              <template #activator="{ on }">
                <v-btn
                  color="error"
                  v-on="on"
                  icon
                  text
                  @click="closeDialog"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              Закрыть диалоговое окно
            </v-tooltip>
          </slot>
        </v-layout>
      </v-card-title>
      <v-divider />

      <slot name="beforeContent"></slot>

      <v-card-text class="overflow-y-auto">
        <slot />
      </v-card-text>

      <slot name="afterContent"></slot>

      <v-card-actions class="mt-auto">
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/**
 * Компонент модального окна
 */

import dialog from '@/helper/mixins/dialog';

export default {
  name: 'DialogBase',

  mixins: [dialog],

  props: {
    maxWidth: [String, Number],
    height: [String, Number],
    withClose: Boolean,
    title: String,
  },

  computed: {
    withTitle() {
      return this.withClose || this.title;
    },
  },
};
</script>
