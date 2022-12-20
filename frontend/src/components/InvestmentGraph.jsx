import ReactApexChart from 'react-apexcharts';
import React from 'react';
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [20, 15, 30],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ['PPF', 'Mutual Fund', 'Stocks'],
        // theme: {
        //   monochrome: {
        //     enabled: true,
        //   },
        // },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + '%'];
          },
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='pie'
          width='150'
        />
      </div>
    );
  }
}

export default ApexChart;
