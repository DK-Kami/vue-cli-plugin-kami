<template>
  <v-snackbar
    v-model="show"
    :timeout="5000"
    :color="type"
    :type="type"
    class="notification"
    top
  >
    {{ message }}
    <v-btn
      dark
      text
      icon
      @click="show = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
/**
 * Компонент для уведомлений
 * 
 * Вызов уведомлений происходит через VueX
 * @see @/store/modules/notification
 */

export default {
  computed: {
    show: {
      get() {
        return this.$store.state.notification.show;
      },
      set(show) {
        this.$store.commit('notification/CHANGE_SHOW', show);
      }
    },
    message() {
      return this.$store.state.notification.message;
    },
    type() {
      return this.$store.state.notification.type;
    },
  },
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
