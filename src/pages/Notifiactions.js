// src/pages/Notifications.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const NotificationsContainer = styled.div`
  margin-left: 250px;
  margin-top: 60px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f0f2f5'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotificationsTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.titleColor || '#333'};
  margin-bottom: 2rem;
  font-weight: 700;
`;

const NotificationCard = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#fff'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${({ status }) => (status === 'unread' ? '#007bff' : '#ddd')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const NotificationTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.titleColor || '#333'};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const NotificationContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor || '#555'};
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const NotificationTime = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textColor || '#888'};
  margin-top: 0.5rem;
`;

const ClearAllButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #c82333;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ active }) => (active ? '#007bff' : '#ddd')};
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#f8f9fa')};
  }
`;

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Comment', content: 'You have a new comment on your post.', time: '10 minutes ago', status: 'unread' },
    { id: 2, title: 'System Update', content: 'A new system update is available.', time: '1 hour ago', status: 'read' },
    { id: 3, title: 'Message Received', content: 'You received a new message from Jane.', time: '3 hours ago', status: 'read' },
    { id: 4, title: 'Event Reminder', content: 'Reminder for your upcoming event.', time: '5 hours ago', status: 'unread' },
    { id: 5, title: 'New Follower', content: 'You have a new follower.', time: '1 day ago', status: 'read' },
    { id: 6, title: 'Profile Update', content: 'Your profile has been updated.', time: '2 days ago', status: 'unread' }
  ]);

  const [filter, setFilter] = useState('all');

  const handleClearAll = () => {
    setNotifications([]);
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredNotifications = notifications.filter(notification => 
    filter === 'all' || notification.status === filter
  );

  return (
    <NotificationsContainer>
      <NotificationsTitle>Notifications</NotificationsTitle>
      <FilterContainer>
        <FilterButton active={filter === 'all'} onClick={() => handleFilterChange('all')}>All</FilterButton>
        <FilterButton active={filter === 'unread'} onClick={() => handleFilterChange('unread')}>Unread</FilterButton>
        <FilterButton active={filter === 'read'} onClick={() => handleFilterChange('read')}>Read</FilterButton>
      </FilterContainer>
      {filteredNotifications.map(notification => (
        <NotificationCard key={notification.id} status={notification.status}>
          <NotificationTitle>{notification.title}</NotificationTitle>
          <NotificationContent>{notification.content}</NotificationContent>
          <NotificationTime>{notification.time}</NotificationTime>
        </NotificationCard>
      ))}
      <ClearAllButton onClick={handleClearAll}>Clear All</ClearAllButton>
    </NotificationsContainer>
  );
};

export default Notifications;
