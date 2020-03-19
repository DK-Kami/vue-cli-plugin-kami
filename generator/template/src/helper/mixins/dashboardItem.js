/**
 * Примесь настроек по умолчанию для чартов
 */

import Chart from 'chart.js';

export default {
  props: {
    height: [String, Number],
    width: [String, Number],
    uuid: String,
    data: Object,
  },

  mounted() {
    Chart.defaults.global.elements.rectangle.borderWidth = 0;
    Chart.defaults.global.elements.point.borderWidth = 0;
    Chart.defaults.global.elements.line.borderWidth = 0;
    Chart.defaults.global.elements.arc.borderWidth = 0;

    if (!this.canRender) return;
    this.renderElement();

    this.chart.height = this.height;
    this.chart.canvas.height = this.height;

    this.chart = null;
  },

  data: () => ({
    chart: null,
  }),

  computed: {
    canRender() {
      return !!(this.data
        && this.data.data
        && this.data.data.length);
    },

    globalOptions() {
      return {
        legend: {
          align: 'start',
          labels: {
            fontColor: '#333',
          },
        },
      };
    },

    ctx() {
      return document.getElementById(this.uuid).getContext('2d');
    },
  },

  methods: {
    renderElement() {
      return true;
    },
  },

  watch: {
    'data.data'() {
      if (!this.canRender) return;
      this.renderElement();
      this.chart = null;
    },
  },
};