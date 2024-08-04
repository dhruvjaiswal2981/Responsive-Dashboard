import React from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#ffffff'};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.titleColor || '#333'};
`;

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ActivityItem = styled.li`
  font-size: 1rem;
  color: ${({ theme }) => theme.activityText || '#555'};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.activityBg || '#f9f9f9'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;
  margin-bottom:4px;

  &:hover {
    background-color: ${({ theme }) => theme.activityHoverBg || '#e0e0e0'};
  }
`;

const ActivityFeed = () => {
  return (
    <WidgetContainer>
      <Title>Recent Activity</Title>
      <ActivityList>
        <ActivityItem>New visit from Google</ActivityItem>
        <ActivityItem>Direct traffic increase</ActivityItem>
        <ActivityItem>Referral from partner site</ActivityItem>
        <ActivityItem>Social media campaign</ActivityItem>
      </ActivityList>
    </WidgetContainer>
  );
};

export default ActivityFeed;
