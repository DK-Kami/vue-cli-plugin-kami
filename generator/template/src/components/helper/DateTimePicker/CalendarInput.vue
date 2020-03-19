<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    ref="menu"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="currentDate"
        append-icon="mdi-calendar-month"
        label="Выбор даты"
        readonly
        v-on="on"
      />
    </template>

    <v-date-picker
      v-model="date"
      :show-current="showCurrent"
      :min="showCurrent"
      scrollable
      no-title
      @click:date="$refs.menu.save(date)"
    >
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'CalendarInput',
  props: {
    showCurrent: String,
    value: String,
  },
  data: vm => ({
    menu: false,
  }),
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(date) {
        this.$emit('input', date);
      },
    },

    currentDate() {
      if (!this.date) return;
      const [year, month, day] = this.date.split('-');
      return [day, month, year].join('.');
    }
  },
};
</script>
