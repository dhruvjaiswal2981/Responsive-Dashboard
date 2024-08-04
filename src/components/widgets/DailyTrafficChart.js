import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Registering ChartJS components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const theme = {
  widgetBg: '#ffffff',
  titleColor: '#4a4a4a', 
  lineColor: '#4a90e2', 
  gridColor: '#f0f0f0', 
  tooltipBgColor: '#333333',
  tooltipTextColor: '#ffffff',
  axisTickColor: '#4a4a4a', 
};

const WidgetContainer = styled.div`
  background-color: ${theme.widgetBg};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px; /* Adjust the width of the widget */
  margin: auto; /* Center the widget horizontally */
`;

const ChartTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.titleColor};
  text-align: center; /* Center the title */
  margin-bottom: 1.5rem;
`;

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Traffic',
      data: [120, 150, 180, 200, 170, 130, 160],
      fill: false,
      borderColor: theme.lineColor,
      tension: 0.2,
      borderWidth: 2, 
      pointRadius: 5, 
      pointBackgroundColor: theme.lineColor, 
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: theme.axisTickColor,
        font: {
          size: 14, 
        },
      },
    },
    tooltip: {
      backgroundColor: theme.tooltipBgColor,
      titleColor: theme.tooltipTextColor,
      bodyColor: theme.tooltipTextColor,
      bodyFont: {
        size: 14, 
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: theme.gridColor,
      },
      ticks: {
        color: theme.axisTickColor,
        font: {
          size: 12, 
        },
      },
    },
    y: {
      grid: {
        color: theme.gridColor,
      },
      ticks: {
        color: theme.axisTickColor,
        font: {
          size: 12, 
        },
      },
    },
  },
};

const DailyTrafficChart = () => {
  return (
    <WidgetContainer>
      <ChartTitle>Daily Traffic Chart</ChartTitle>
      <Line data={chartData} options={chartOptions} />
    </WidgetContainer>
  );
};

export default DailyTrafficChart;
