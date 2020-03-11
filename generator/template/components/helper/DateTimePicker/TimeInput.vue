<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="time"
    transition="scale-transition"
    min-width="300"
    ref="menu"
    offset-y
  >
    <template #activator="{ on }">
      <v-text-field
        v-model="time"
        append-icon="mdi-clock-outline"
        label="Выбор времени"
        readonly
        v-on="on"
      />
    </template>

    <v-time-picker
      v-if="menu"
      v-model="time"
      full-width
      format="24hr"
      use-seconds
      @click:second="$refs.menu.save(time)"
    />
  </v-menu>
</template>

<script>
export default {
  name: 'TimeInput',

  props: {
    value: String,
  },

  data: () => ({
    menu: false,
  }),

  computed: {
    time: {
      get() {
        return this.value;
      },
      set(time) {
        this.$emit('input', time);
      },
    },
  },
};
</script>
