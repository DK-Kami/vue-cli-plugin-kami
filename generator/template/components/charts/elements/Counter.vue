<template>
  <v-layout
    :class="`font-weight-${currentFontWeight} text-center`"
    :style="{
      fontSize: currentValueFontSize,
      color: valueColor,
    }"
    justify-center
    fill-height
    column
  >
    {{ visibleValue }}
  </v-layout>
</template>

<script>
export default {
  name: 'Counter',

  props: {
    data: {
      type: [String, Number, Object],
      validator: value => {
          return value.hasOwnProperty('value')
            || ( value.hasOwnProperty('how')
              && value.hasOwnProperty('of'));
      }
    },
    valueFontWeight: String,
    valueFontSize: Number,
    titleFontSize: Number,
    valueColor: String,
  },

  computed: {
    currentValueFontSize() {
      return (this.valueFontSize || 34) + 'px';
    },
    currentFontWeight() {
      return this.valueFontWeight || 'medium';
    },

    visibleValue() {
      if (this.data.hasOwnProperty('value')) {
        return this.data.value;
      }

      const { how, of } = this.data;
      return `${how} / ${of}`;
    },
  },
};
</script>
