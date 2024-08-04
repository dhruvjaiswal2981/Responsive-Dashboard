import React from 'react';
import LineChartWidget from '../components/widgets/LineChart';
import BarChartWidget from '../components/widgets/BarChart';
import PieChartWidget from '../components/widgets/PieChart';
import ActivityFeed from '../components/widgets/ActivityFeed';
import DailyTrafficChart from '../components/widgets/DailyTrafficChart'; 
import DataTable from '../components/widgets/DataTable';

import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin-left: 250px; /* Assuming the sidebar is 250px wide */
  margin-top: 60px; /* Adjust this value based on your header height */
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f0f2f5'};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const WidgetContainer = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#fff'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.titleColor || '#333'};
  text-align: center;
  margin-bottom: 2rem;
`;

const Dashboard = () => (
  <DashboardContainer>
    <DashboardTitle>Dashboard</DashboardTitle>
    <WidgetContainer>
      <LineChartWidget />
    </WidgetContainer>
    <WidgetContainer>
      <BarChartWidget />
    </WidgetContainer>
    <WidgetContainer>
      <PieChartWidget />
    </WidgetContainer>
    <WidgetContainer>
      <ActivityFeed />
    </WidgetContainer>
    <WidgetContainer>
      <DailyTrafficChart /> 
    </WidgetContainer>
    <WidgetContainer>
      <DataTable /> 
    </WidgetContainer>
  </DashboardContainer>
);

export default Dashboard;
