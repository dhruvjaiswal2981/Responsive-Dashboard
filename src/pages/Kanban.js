// src/pages/Kanban.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const KanbanContainer = styled.div`
  margin-left: 250px;
  margin-top: 60px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f0f2f5'};
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
`;

const KanbanColumn = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#fff'};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

const ColumnTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.titleColor || '#333'};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const TaskCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg || '#fff'};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  cursor: grab;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.cardHoverBg || '#f8f9fa'};
  }
`;

const AddTaskButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

// Kanban component
const Kanban = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design Dashboard', description: 'Create wireframes for the new dashboard layout.' },
      { id: 2, title: 'Implement Line Chart', description: 'Develop the line chart component with dummy data.' },
    ],
    inProgress: [
      { id: 3, title: 'Build Kanban Feature', description: 'Develop Kanban board feature and integrate with dummy tasks.' },
      { id: 4, title: 'Update Pie Chart', description: 'Adjust pie chart to show updated dummy data.' },
    ],
    done: [
      { id: 5, title: 'Create Kanban UI', description: 'Design the Kanban UI layout and styles.' },
      { id: 6, title: 'Set Up Dummy Data', description: 'Provide detailed dummy data for Kanban, line charts, and pie charts.' },
    ],
  });

  const handleAddTask = (column) => {
    const newTaskTitle = prompt('Enter task title:');
    const newTaskDescription = prompt('Enter task description:');
    if (newTaskTitle && newTaskDescription) {
      setTasks(prevTasks => ({
        ...prevTasks,
        [column]: [
          ...prevTasks[column],
          { id: Date.now(), title: newTaskTitle, description: newTaskDescription }
        ],
      }));
    }
  };

  return (
    <KanbanContainer>
      {['todo', 'inProgress', 'done'].map(column => (
        <KanbanColumn key={column}>
          <ColumnTitle>
            {column === 'todo' ? 'To Do' : column === 'inProgress' ? 'In Progress' : 'Done'}
          </ColumnTitle>
          {tasks[column].map(task => (
            <TaskCard key={task.id}>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem' }}>{task.title}</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>{task.description}</p>
            </TaskCard>
          ))}
          <AddTaskButton onClick={() => handleAddTask(column)}>Add Task</AddTaskButton>
        </KanbanColumn>
      ))}
    </KanbanContainer>
  );
};

export default Kanban;
