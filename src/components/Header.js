import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.headerBg || '#282c34'};
  color: ${({ theme }) => theme.headerText || '#fff'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.headerLogo || '#61dafb'};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.headerLink || '#fff'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.headerLinkHoverBg || '#61dafb'};
    color: ${({ theme }) => theme.headerLinkHoverText || '#fff'};
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 2rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.searchBorder || '#ccc'};
  outline: none;
  font-size: 0.875rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.searchFocusBorder || '#61dafb'};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.searchPlaceholder || '#888'};
  }
`;

const ThemeToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.toggleButtonBg || '#61dafb'};
  color: ${({ theme }) => theme.toggleButtonText || '#fff'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.toggleButtonHoverBg || '#21a1f1'};
  }
`;

const Header = ({ toggleTheme }) => (
  <HeaderContainer>
    <Logo>Logo</Logo>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/profile">Profile</NavLink>
      <NavLink href="/notifications">Notifications</NavLink>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search..." />
        <FaTimes onClick={() => console.log('Clear search')} style={{ position: 'absolute', right: '0.75rem', cursor: 'pointer', color: '#888' }} />
      </SearchWrapper>
      <ThemeToggleButton onClick={toggleTheme}>
        <FaSun /> <FaMoon />
      </ThemeToggleButton>
    </Nav>
  </HeaderContainer>
);

export default Header;
