import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
// import DonutLabels from './DonutLabels';
// import {chart_Data, getTotal} from '../helper/helper';
import Card from '../userinterface/Card';
import classes from './DonutChart.module.css';

Chart.register(ArcElement);
const config = {

  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10
      }]
  },
  options: {
    cutout: 114
  }

};




export default function DonutChart() {
  return (
    <Card>
      <div id={classes.donut} className="flex justify-content max-w-xs ms-auto">
        <div className='item'>
          <div className='chart relative'>
            <Doughnut {...config} ></Doughnut>
            <h3 className='mb-4 font-bold title'>Total
              <span className='block text-3xl text-emeral-400'>${0}</span>
            </h3>
          </div>


          <div className='flex flex-col py-10 gap-4'>
            {/* {DonutLabels} */}
          </div>
        </div>

      </div>
    </Card>
  )
}
