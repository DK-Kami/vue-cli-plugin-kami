<template>
  <v-app-bar color="primary" clipped-left dark app>
    <div>
      <v-img src="/logo.svg" max-width="230" class="ml-1" contain />
    </div>
    <v-spacer />

    <v-toolbar-items>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
/**
 * Компонент верхнего меню
 */

export default {
  name: "TheToolbar",

  props: {
    helper: Boolean,
  },

  computed: {
    user() {
      return this.$store.getters["auth/getUser"];
    },
    fullUserName() {
      const { lastName, firstName, middleName } = this.user;
      return [lastName, firstName].join(" ");
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("unsetUserData");
      setTimeout(() => {
        this.$router.replace({ name: "login" });
      }, 0);
    },

    openProfile() {
      this.$router.push("/profile");
    },
    toggleHelper() {
      this.$emit("toggle-helper");
    }
  }
};
</script>
