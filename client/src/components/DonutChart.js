import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ data }) => {
    return <Doughnut data={data} />;
    
};


export default DonutChart;