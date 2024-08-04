// src/components/Layout.js
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const MainContentWrapper = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f0f2f5'};
`;

const Layout = () => (
  <LayoutContainer>
    <Header />
    <Content>
      <Sidebar />
      <MainContentWrapper>
        <MainContent />
      </MainContentWrapper>
    </Content>
    <Footer />
  </LayoutContainer>
);

export default Layout;
