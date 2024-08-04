// src/pages/Profile.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
  margin-left: 250px;
  margin-top: 60px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f0f2f5'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); 
`;

const ProfileCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 2px solid ${({ theme }) => theme.borderColor || '#ddd'};
`;

const ProfileName = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProfileEmail = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textColor || '#555'};
  margin-bottom: 1rem;
`;

const ProfileDetails = styled.div`
  text-align: left;
  margin: 1.5rem 0;
`;

const ProfileDetail = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor || '#555'};
  margin-bottom: 0.75rem;
`;

const ProfileBio = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor || '#555'};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const EditButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ChangePasswordButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #218838;
  }
`;

const LinkedInLink = styled.a`
  display: inline-block;
  color: #0077b5;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    color: #0056a0;
  }
`;

const Profile = () => {
  const [profileData] = useState({
    image: 'https://shorturl.at/SkHRl',
    name: 'Dhruv Jaiswal',
    email: 'dhruvujjain@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    address: '123 Main St, India',
    city: 'India',
    designation: 'Software Engineer',
    phone: '+91 8370052464',
    linkedin: 'https://www.linkedin.com/in/dhruv-jaiswal2981/'
  });


  const handleEditProfile = () => {
    alert('Edit Profile functionality not implemented.');
  };

  
  const handleChangePassword = () => {
    alert('Change Password functionality not implemented.');
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileImage src={profileData.image} alt="Profile" />
        <ProfileName>{profileData.name}</ProfileName>
        <ProfileEmail>{profileData.email}</ProfileEmail>
        <ProfileDetails>
          <ProfileDetail><strong>Designation:</strong> {profileData.designation}</ProfileDetail>
          <ProfileDetail><strong>Address:</strong> {profileData.address}</ProfileDetail>
          <ProfileDetail><strong>City:</strong> {profileData.city}</ProfileDetail>
          <ProfileDetail><strong>Phone:</strong> {profileData.phone}</ProfileDetail>
          <LinkedInLink href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </LinkedInLink>
        </ProfileDetails>
        <ProfileBio>{profileData.bio}</ProfileBio>
        <div>
          <EditButton onClick={handleEditProfile}>Edit Profile</EditButton>
          <ChangePasswordButton onClick={handleChangePassword}>Change Password</ChangePasswordButton>
        </div>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
