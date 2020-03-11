<template>
  <div :id="unique"></div>
</template>

<script>
// import Highcharts from 'highcharts';

export default {
  name: 'StackedColumnChart',

  props: {
    categories: Array,
    unique: String,
    title: String,
    data: Object,
  },

  // mounted() {
  //   const {
  //     secondary,
  //     primary,
  //     accent,
  //     info,
  //   } = this.$vuetify.theme.defaults.light;

  //   const {
  //     secondary: secondaryTheme,
  //     primary: primaryTheme,
  //     accent: accentTheme,
  //     info: infoTheme,
  //   } = this.$vuetify.theme.themes.light;

  //   Highcharts.chart(this.unique, {
  //     chart: {
  //       backgroundColor: 'transparent',
  //       borderWidth: 0,
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'column',
  //       height: '150%',
  //     },
  //     title: {
  //       text: this.title,
  //       style: {
  //         color: '#fff',
  //       },
  //     },
  //     xAxis: {
  //       categories: this.categories,
  //       labels: {
  //         style: {
  //           color: '#fff',
  //         },
  //       },
  //     },
  //     yAxis: {
  //       stackLabels: {
  //         enabled: true,
  //         style: {
  //           fontWeight: 'bold',
  //           color: 'white',
  //         },
  //       },
  //       labels: {
  //         style: {
  //           color: '#fff',
  //         },
  //       },
  //       lineGridColor: info,
  //       lineColor: info,
  //       title: '',
  //       min: 0,
  //     },
  //     legend: {
  //       align: 'right',
  //       width: '100%',
  //       verticalAlign: 'top',
  //       floating: false,
  //       backgroundColor: '#e2e2e2',
  //       shadow: false,
  //     },
  //     tooltip: {
  //       headerFormat: '<b>{point.x}</b><br/>',
  //       pointFormat: '{series.name}: {point.y}<br/>Общее: {point.stackTotal}',
  //     },
  //     plotOptions: {
  //       column: {
  //         stacking: 'normal',
  //         dataLabels: {
  //           enabled: true,
  //         },
  //       },
  //     },
  //     series: this.data,
  //   });
  // },
};
</script>
