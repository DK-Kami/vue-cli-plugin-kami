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
  name: 'PieChart',

  mixins: [dashboardItem],

  methods: {
    renderElement() {
      this.chart = new Chart(this.ctx, {
        type: 'pie',

        data: {
          datasets: [{
            backgroundColor: this.data.colors,
            data: this.data.data,
          }],
          labels: this.data.labels,
        },

        options: {
          ...this.globalOptions,
        },
      });
    },
  },
};
</script>
