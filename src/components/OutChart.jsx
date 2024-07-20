import ReactApexChart from 'react-apexcharts';

const data = {  
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
          // width: 350,
          type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: [],
      legend: {
        position: 'top'
      }
    },
};

const state = {  
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
        chart: {
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%', // Augmente la largeur des barres
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
};

const OutChart = () => {
    return (
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-6 sm:px-8 px-4 mt-7">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-4">
          <div className="p-2 pt-0 pb-2">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Secteur du pi</h6>
            </div>
          </div>
          <div className="p-6 pt-0 pb-2">
            <ReactApexChart options={data.options} series={data.series} type="pie" height={350} />
          </div>
        </div>
      </div>    
    );
}

export default OutChart;

