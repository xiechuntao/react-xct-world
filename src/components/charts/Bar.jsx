import React, { Component } from 'react';
// import styles from './center.scss';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
const createSvg = (shadowColor, shadowBlur) => `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 32 128"
        xml:space="preserve"
    >
        <style>
            .st2 {
                fill: transparent;
                stroke: ${shadowColor};
                stroke-width: ${shadowBlur}px;
                filter: url(#chart-inset-shadow);
            }
        </style>
        <defs>
            <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
        		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${
              shadowBlur * 0.75
            }" />
        		<feMerge>
        			<feMergeNode in="gass" />
        		</feMerge>
        	</filter>
        </defs>
        <path class="st2" d="M0 0 L32 0 L32 128 L0 128 Z" />
    </svg>
`;
const svgString = createSvg('#156dff', 8);
const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

const DOMURL = window.URL || window.webkitURL || window;
const insetShadowUrl = DOMURL.createObjectURL(svg);

const dataSet = [
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  [120, 200, 150, 80, 70, 110, 130],
];
export default class Home extends Component {
  componentDidMount() {}
  /**
   * @description 配置图表
   * @returns
   * @memberof EchartsRadar
   */
  getOption() {
    return {
      backgroundColor: '#101631',
      xAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'rgba(255,255,255, 0.5)',
        },
        splitLine: {
          show: false,
        },
        data: dataSet[0],
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'rgba(255,255,255, 0.5)',
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.1)',
            width: 2,
          },
        },
      },
      series: [
        {
          data: dataSet[1],
          type: 'pictorialBar',
          symbol: 'image://' + insetShadowUrl,
          barWidth: 50,
        },
        {
          data: dataSet[1],
          type: 'bar',
          barWidth: 50,
          itemStyle: {
            color: 'transparent',
            borderWidth: 3,
            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#156dff',
              },
              {
                offset: 1,
                color: '#00eaeb',
              },
            ]),
            shadowColor: 'blue',
            shadowBlur: 12,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
        },
      ],
    };
  }
  /**
   * @description 雷达图选中区域点击事件和外部显示标签点击事件
   * @param {any} param
   * @param {any} echarts
   * @memberof EchartsRadar
   */
  onChartClick(param, echarts) {
    console.log(param);
  }
  /**
   * @description 点击legend事件
   * @param {any} param
   * @param {any} echarts
   * @memberof EchartsRadar
   */
  onChartLegendselectchanged(param, echarts) {
    console.log(param);
  }

  render() {
    let onEvents = {
      click: this.onChartClick.bind(this),
      legendselectchanged: this.onChartLegendselectchanged.bind(this),
    };
    return (
      <ReactEcharts
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
        onEvents={onEvents}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}
