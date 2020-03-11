<template>
  <v-card
    :aria-label="description"
    :height="itemHeight"
    :width="itemWidth"
    :color="itemColor"
    class="no-select pa-2 d-flex flex-column"
    data-direction="right"
  >
    <div
      class="text-center title font-weight-bold"
      :style="{ fontSize: itemTitleFontSize }"
    >{{ name }}</div>

    <component
      class="mt-2"
      v-if="loadedComponent"
      v-bind="options"
      :height="chartHeight"
      :is="dashboardItem"
      :width="itemWidth"
      :uuid="uuid"
      :data="data"
    />

    <div v-else class="text-center">
      <v-progress-circular
        color="primary"
        class="mt-2"
        size="75"
        indeterminate
      />
    </div>
  </v-card>
</template>

<script>
import StackedColumnChart from './elements/StackedColumnChart';
import ColumnChart from './elements/ColumnChart';
import LineChart from './elements/LineChart';
import PieChart from './elements/PieChart';
import Counter from './elements/Counter';

export default {
  name: 'DashboardItem',

  components: {
    StackedColumnChart,
    ColumnChart,
    LineChart,
    PieChart,
    Counter,
  },

  props: {
    options: {
      type: Object,
      default: () => ({
        backgroundColor: '',
        textColor: '',
        height: '',
        width: '',
      })
    },

    data: [String, Number, Array, Object],
    description: String,
    params: Array,
    uuid: String,
    name: String,
    type: String,
  },

  data: () => ({
    loading: false,
  }),

  computed: {
    dashboardItem() {
      switch(this.type) {
        case 'simpleCounter':
          return 'Counter';

        case 'pieChart':
          return 'PieChart';

        case 'columnChart':
          return 'ColumnChart';

        case 'lineChart':
          return 'LineChart';

        default:
          return 'div';
      }
    },

    loadedComponent() {
      const loading = !this.loading && this.data;
      if (this.type === 'simpleCounter') return loading;
      return loading && this.data.labels && this.data.labels.length
    },

    itemColor() {
      // return this.options.backgroundColor || 'secondary';
      return '#FFFFFF';
    },
    itemHeight() {
      return this.options.height || 'auto';
    },
    itemWidth() {
      return this.options.width || 'auto';
    },
    itemTitleFontSize() {
      return (this.options.titleFontSize || 20) + 'px';
    },
    chartHeight() {
      return this.options.height
        ? this.options.height - 50
        : 'auto';
    }
  },

  methods: {
    changeLoading(loading) {
      this.loading = loading;
    },
  },
};
</script>

<style scoped>
  .chart-counter {
    max-width: 220px;
  }
</style>
