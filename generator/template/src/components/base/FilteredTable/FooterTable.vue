<template>
  <v-layout align-center justify-start>
    <v-flex shrink>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        close-on-click
        offset-y
      >
        <template #activator="{ on }">
          <v-btn
            class="text-lowercase"
            color="primary lighten-2"
            text
            v-on="on"
          >
            <v-icon class="mr-3">mdi-tune</v-icon>
            Выбрать колонки
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-ripple
            @click="toggleAll"
          >
            <v-list-item-action>
              <v-icon color="primary" class="mr-3">
                {{ selectAllIcon }}
              </v-icon>
            </v-list-item-action>

            <v-list-item-title>Выбрать все</v-list-item-title>
          </v-list-item>

          <template v-for="header in headers">
            <v-list-item
              v-if="header.text"
              :key="header.value"
              v-ripple
              @click="toggleHeader(header)"
            >
              <v-list-item-action>
                <v-icon color="primary" class="mr-3">
                  {{ currentIcon(header.isSelected) }}
                </v-icon>
              </v-list-item-action>

              <v-list-item-title>{{ header.text }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'FooterTable',

  props: {
    headers: Array,
  },

  data: () => ({
    menu: false,
  }),

  computed: {
    headersComp: {
      get() {
        return this.headers;
      },
      set(headers) {
        this.$emit('update:headers', headers);
      },
    },

    name() {
      return this.$route.name;
    },

    isSelectAll() {
      return this.headers.every(h => h.isSelected);
    },
    isUnSelectAll() {
      return this.headers.every(h => !h.isSelected);
    },

    selectAllIcon() {
      if (this.isSelectAll) return 'mdi-checkbox-marked';
      if (this.isUnSelectAll) return 'mdi-checkbox-blank-outline'
      return 'mdi-minus-box';
    }
  },
  methods: {
    currentIcon(isSelected) {
      return isSelected
        ? 'mdi-checkbox-marked'
        : 'mdi-checkbox-blank-outline';
    },

    toggleHeader(header) {
      header.isSelected = !header.isSelected;
    },
    toggleAll() {
      const isSelectAll = this.isSelectAll;
      this.headersComp = this.headersComp.map(h => {
        h.isSelected = !isSelectAll;
        return h;
      });
    }
  },
};
</script>
