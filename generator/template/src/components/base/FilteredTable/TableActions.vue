<template>
  <v-layout wrap align-center justify-end>
    <v-flex xs12 class="py-0">
      <v-divider />
    </v-flex>

    <!-- <v-flex shrink>
      <v-layout v-if="headers">
        <footer-table :headers.sync="headers" />
      </v-layout>
    </v-flex> -->

    <v-flex grow>
      <slot name="actions" />
    </v-flex>

    <v-flex shrink>
      <v-layout class="caption grey--text" justify-end align-center>
        <!-- <template v-if="withSelect">
          <v-flex shrink class="mr-4 py-0 pr-3">Строк на странице:</v-flex>
          <v-flex shrink class="py-0">
            <v-select
              v-model="pagination.rowsPerPage"
              :items="rowsPerPageCurrent"
              item-value="value"
              item-text="text"
              class="caption mr-1 pa-0 ma-0 mt-2"
              style="width: 45px;"
            />
          </v-flex>

          <v-flex shrink class="py-0 mx-4 px-2">
            {{ ((pagination.page - 1) * pagination.rowsPerPage) + 1 }}-{{ currentPageItems }} из {{ pagination.totalItems }} 
          </v-flex>
        </template> -->

        <v-flex shrink class="py-0">
          <v-btn
            :disabled="!mayPrevPage"
            icon
            class="grey--text text--darken-1 mr-1"
            @click="prevPage"
          >
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-flex>

        <v-flex v-if="!withSelect" shrink class="py-0 mx-4 px-2">
          {{ ((page - 1) * itemsPerPage) + 1 }}-{{ currentPageItems }} из {{ totalItems }} 
        </v-flex>

        <v-flex shrink class="py-0">
          <v-btn
            :disabled="!mayNextPage"
            icon
            class="grey--text text--darken-1"
            @click="nextPage"
          >
            <v-icon>chevron_right</v-icon>
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
    FooterTable
  },

  props: {
    itemsPerPage: Number,
    withSelect: Boolean,
    totalItems: Number,
    page: Number,
  },

  computed: {
    rowsPerPageCurrent() {
      return [];
    },
    currentPageItems() {
      const page = this.page * this.itemsPerPage;
      return page > this.totalItems
        ? this.totalItems
        : page;
    },
    mayPrevPage() {
      return this.page !== 1;
    },
    mayNextPage() {
      return this.currentPageItems < this.totalItems;
    },
  },

  methods: {
    prevPage() {
      if (this.mayPrevPage) {
        this.$emit('update:page', this.page - 1);
      }
    },
    nextPage() {
      if (this.mayNextPage) {
        this.$emit('update:page', this.page + 1);
      }
    },
  },
};
</script>
