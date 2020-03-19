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
  name: 'ColumnChart',

  mixins: [dashboardItem],

  methods: {
    renderElement() {
      const datasets = this.data.data.map((data, index) => ({
        backgroundColor: this.data.colors[index],
        label: this.data.labels[index],
        data: [data],
      }));

      this.chart = new Chart(this.ctx, {
        type: 'bar',

        data: {
          datasets,
          labels: [''],
        },

        options: {
          ...this.globalOptions,
          legend: {
            labels: {
              boxWidth: 10,
            },
          },
        },
      });
    },
  },
};
</script>
