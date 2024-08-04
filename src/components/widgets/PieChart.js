// src/components/widgets/PieChart.js
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'; 

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const ChartTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor || '#333'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PieChartWidget = () => (
  <div>
    <ChartTitle>Pie Chart</ChartTitle>
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChartWidget;
