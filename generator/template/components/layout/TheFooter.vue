<template>
  <v-footer
    color="primary"
    dark
    app
  >
    <span class="px-3 body-2" aria-label="Написать в поддержку" data-direction="top">
      &copy; {{ new Date().getFullYear() }} — all rigths reserved
    </span>
  </v-footer>
</template>

<script>
/**
 * Компонент футера
 */

export default {
  name: 'TheFooter',
};
</script>
