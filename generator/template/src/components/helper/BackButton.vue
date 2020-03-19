<template>
  <v-btn
    class="mr-3"
    icon
    @click="goTo"
  >
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BackButton',

  props: {
    to: String,
  },
  
  methods: {
    goTo() {
      if (this.to) {
        return this.$route.push(to);
      }
      return this.$router.back();
    }
  }
};
</script>
