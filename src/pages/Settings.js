// src/pages/Settings.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  margin-left: 250px; /* Assuming the sidebar is 250px wide */
  margin-top: 60px; /* Adjust this value based on your header height */
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f7f9fc'};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Adjust based on header height */
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#fff'};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const SettingsTitle = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.titleColor || '#2d3436'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.labelColor || '#555'};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.inputBorder || '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputText || '#333'};
  &:focus {
    border-color: ${({ theme }) => theme.inputFocusBorder || '#007bff'};
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.buttonBg || '#007bff'};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg || '#0056b3'};
  }
`;

const Settings = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Settings saved!');
  };

  return (
    <SettingsContainer>
      <FormContainer>
        <SettingsTitle>Update Your Settings</SettingsTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormGroup>
          <Button type="submit">Save Settings</Button>
        </form>
      </FormContainer>
    </SettingsContainer>
  );
};

export default Settings;
