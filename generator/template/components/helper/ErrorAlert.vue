<template>
  <v-alert
    style="width:100%"
    class="mb-0 mt-3"
    border="top"
    color="error"
    dark
  >{{ label }}</v-alert>
</template>

<script>
export default {
  name: 'ErrorAlert',

  props: {
    label: String,
  },
};
</script>
