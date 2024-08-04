// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaTachometerAlt, FaShoppingCart, FaTasks, FaCog } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.sidebarBg || '#333'};
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  width: 100%;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: ${({ theme }) => theme.sidebarText || '#fff'};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.sidebarHoverBg || '#555'};
    color: ${({ theme }) => theme.sidebarHoverText || '#fff'};
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Sidebar = () => (
  <SidebarContainer>
    <Nav>
      <NavLink href="/">
        <IconWrapper><FaTachometerAlt /></IconWrapper>
        Dashboard
      </NavLink>
      <NavLink href="/nftMarketplace">
        <IconWrapper><FaShoppingCart /></IconWrapper>
        NFT Marketplace
      </NavLink>
      <NavLink href="/kanban">
        <IconWrapper><FaTasks /></IconWrapper>
        Kanban
      </NavLink>
      <NavLink href="/settings">
        <IconWrapper><FaCog /></IconWrapper>
        Settings
      </NavLink>
    </Nav>
  </SidebarContainer>
);

export default Sidebar;
