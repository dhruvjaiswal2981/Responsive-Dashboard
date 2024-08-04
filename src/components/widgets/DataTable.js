import React, { useState } from 'react';
import styled from 'styled-components';


const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#ffffff'};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 1rem auto;
  border: 1px solid ${({ theme }) => theme.borderColor || '#ddd'};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TableTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor || '#333'};
  margin: 0;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg || '#61dafb'};
  color: ${({ theme }) => theme.buttonTextColor || '#fff'};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg || '#4da1d9'};
  }
`;

const TableRowContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.rowBg || '#f9f9f9'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor || '#ddd'};
`;

const TableRowContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowDetailsButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg || '#61dafb'};
  color: ${({ theme }) => theme.buttonTextColor || '#fff'};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg || '#4da1d9'};
  }
`;

const DetailsContainer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor || '#ddd'};
  background-color: ${({ theme }) => theme.detailsBg || '#f9f9f9'};
`;

const DataTable = () => {
  const [showDetails, setShowDetails] = useState(null);

  const data = [
    { id: 1, name: 'Dhruv Jaiswal', email: 'dhruvujjain@gmail.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', status: 'Active' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 'Active' },
    { id: 5, name: 'Michael Brown', email: 'michael@example.com', status: 'Inactive' },
  ];

  const handleDetailsClick = (index) => {
    setShowDetails(index === showDetails ? null : index);
  };

  return (
    <TableContainer>
      <TableTitleContainer>
        <TableTitle>Team Members</TableTitle>
        <AddButton onClick={() => alert('Add Employee functionality')}>+ Add Employee</AddButton>
      </TableTitleContainer>
      {data.map((row, index) => (
        <TableRowContainer key={row.id}>
          <TableRow>
            <TableRowContent>
              <div>{row.name}</div>
              <ShowDetailsButton onClick={() => handleDetailsClick(index)}>
                {showDetails === index ? 'Hide Details' : 'Show Details'}
              </ShowDetailsButton>
            </TableRowContent>
          </TableRow>
          <DetailsContainer show={showDetails === index}>
            <div>ID: {row.id}</div>
            <div>Email: {row.email}</div>
            <div>Status: {row.status}</div>
          </DetailsContainer>
        </TableRowContainer>
      ))}
    </TableContainer>
  );
};

export default DataTable;
