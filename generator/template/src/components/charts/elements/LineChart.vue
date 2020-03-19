<template>
  <canvas
    v-show="canRender"
    :height="height"
    :width="width"
    :id="uuid"
    role="img"
  />
</template>

<script>
import dashboardItem from '@/helper/mixins/dashboardItem';

export default {
  name: 'LineChart',

  mixins: [dashboardItem],

  methods: {
    renderElement() {
      this.chart = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: this.data.labels,
          datasets: [{
            backgroundColor: this.data.colors[0],
            borderColor: this.data.colors[0],
            data: this.data.data.slice(),
            fill: 'start',
          }],
        },

        options: {
          ...this.globalOptions,
          legend: {
            display: false,
          },
        },
      });
    },
  },
};
</script>
