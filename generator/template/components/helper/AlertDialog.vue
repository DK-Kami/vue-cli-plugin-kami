<template>
  <v-dialog max-width="500" v-model="dialog">
    <v-card class="text-center pb-3 pt-5">
      <div v-if="type">
        <v-icon x-large :color="type">{{ currentType }}</v-icon>
      </div>

      <div class="title pt-3">
        <slot name="title">
          {{ title }}
        </slot>
      </div>

      <v-card-text class="body-2 font-weight-light">
        <slot>
          {{ text }}
        </slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          class="mx-3"
          large
          icon
          text
          @click="approve"
        >
          <v-icon large>mdi-check</v-icon>
        </v-btn>

        <v-btn
          color="error"
          class="mx-3"
          large
          icon
          text
          @click="decline"
        >
          <v-icon large>mdi-close</v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AlertDialog',

  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    answer: false,
    dialog: false,
    data: {},
  }),

  computed: {
    currentType() {
      switch(this.type) {
        case 'error':
          return 'mdi-alert-circle-outline';

        case 'warning':
          return 'mdi-alert-outline';

        case 'success':
          return 'mdi-check';
      }
    },
  },

  methods: {
    async alert(data) {
      this.dialog = true;
      this.data = data;
    },
    approve() {
      this.answer = true;
      this.$emit('approve', this.data);
      this.dialog = false;
    },
    decline() {
      this.answer = true;
      this.$emit('decline', this.data);
      this.dialog = false;
    },
  },

  watch: {
    dialog(dialog) {
      if (dialog) this.answer = false;
      if (!dialog && !this.answer) this.$emit('decline');
    }
  }
};
</script>

<style>

</style>
