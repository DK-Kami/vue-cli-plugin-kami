<template>
  <v-layout justify-space-between align-center>
    <div class="title">
      {{ label }}
    </div>

    <v-flex xs5>
      <calendar-input v-model="date" :show-current="showCurrent" />
    </v-flex>

    <v-flex xs5>
      <time-input v-model="time" />
    </v-flex>
  </v-layout>
</template>

<script>
import CalendarInput from './CalendarInput'
import TimeInput from './TimeInput'

export default {
  name: 'DateTimePicker',

  components: {
    CalendarInput,
    TimeInput,
  },

  props: {
    showCurrent: [String, Date],
    value: String,
    label: String,
  },

  computed: {
    date: {
      get() {
        if (!this.value) return '';
        return this.value.split(' ')[0];
      },
      set(date) {
        this.$emit('input', [date, this.time].join(' '));
      },
    },

    time: {
      get() {
        if (!this.value) return '';
        return this.value.split(' ')[1];
      },
      set(time) {
        this.$emit('input', [this.date, time].join(' '));
      },
    },
  },
};
</script>
