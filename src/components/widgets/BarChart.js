// src/components/widgets/BarChart.js
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'; // Import styled-components

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

// Styled component for chart title
const ChartTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor || '#333'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const BarChartWidget = () => (
  <div>
    <ChartTitle>Bar Chart</ChartTitle>
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </RechartsBarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartWidget;
