<template>
  <v-layout wrap align-center justify-end>
    <v-flex xs12 class="py-0">
      <v-divider />
    </v-flex>

    <v-flex shrink>
      <v-layout v-if="headers">
        <footer-table :headers.sync="headers" />
      </v-layout>
    </v-flex>

    <v-flex grow>
      <slot name="actions" />
    </v-flex>

    <v-flex shrink>
      <v-layout class="caption grey--text" justify-end align-center>
        <template v-if="withSelect">
          <v-flex shrink class="mr-4 py-0 pr-3">Строк на странице:</v-flex>

          <v-flex shrink class="py-0">
            <v-select
              v-model="options.itemsPerPage"
              :items="itemsPerPageCurrent"
              class="caption mr-1 pa-0 ma-0 mt-2"
              style="width: 55px;"
              item-value="value"
              item-text="text"
            />
          </v-flex>
          
          <v-flex shrink class="py-0 mx-4 px-2">
            {{ ((options.page - 1) * options.itemsPerPage) + 1 }}-{{ currentPageItems }} из {{ options.itemsLength }} 
          </v-flex>
        </template>

        <v-flex shrink class="py-0">
          <v-btn
            :disabled="!mayPrevPage"
            class="grey--text text--darken-1 mr-1"
            icon
            @click="prevPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-flex>

        <v-flex v-if="!withSelect" shrink class="py-0 mx-4 px-2">
          {{ ((options.page - 1) * options.itemsPerPage) + 1 }}-{{ currentPageItems }} из {{ options.itemsLength }} 
        </v-flex>

        <v-flex shrink class="py-0">
          <v-btn
            :disabled="!mayNextPage"
            icon
            class="grey--text text--darken-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 class="py-0">
      <v-divider />
    </v-flex>
  </v-layout>
</template>

<script>
import FooterTable from './FooterTable';

export default {
  name: 'TableActions',

  components: {
    FooterTable,
  },

  props: {
    headers: [Array, Boolean],
    withSelect: Boolean,
    itemsPerPage: Array,
    itemsCount: Number,

    options: {
      type: Object,
      default: () => ({
        itemsPerPage: Number,
        itemsLength: Number,
        page: Number,
      })
    }
  },

  computed: {
    itemsPerPageCurrent() {
      return this.itemsPerPage.map(r => ({
        value: r.value || r,
        text: r.text || r,
      }));
    },
    currentPageItems() {
      const page = this.options.page * this.options.itemsPerPage;
      return page > this.options.itemsLength
        ? this.options.itemsLength
        : page;
    },
    mayPrevPage() {
      return this.options.page !== 1;
    },
    mayNextPage() {
      return this.currentPageItems < this.options.itemsLength;
    },
  },

  methods: {
    prevPage() {
      if (this.mayPrevPage) {
        this.options.page--;
        this.$emit('update:options', this.options);
      }
    },
    nextPage() {
      if (this.mayNextPage) {
        this.options.page++;
        this.$emit('update:options', this.options);
      }
    },
  },

  watch: {
    itemsCount(newVal) {
      this.options.itemsLength = newVal;
    }
  },
};
</script>
