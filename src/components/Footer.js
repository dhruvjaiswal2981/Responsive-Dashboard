import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.footerBg || '#333'};
  color: ${({ theme }) => theme.footerText || '#fff'};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000; /* Ensure the footer is above other elements */
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${({ theme }) => theme.footerText || '#fff'};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.footerText || '#fff'}; 
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s, text-decoration 0.3s;

  &:hover {
    color: ${({ theme }) => theme.footerLinkHover || '#ddd'}; 
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2024 Dashboard App</FooterText>
    <FooterLinks>
      <FooterLink href="/marketplace">Marketplace</FooterLink>
      <FooterLink href="/license">License</FooterLink>
      <FooterLink href="/terms">Terms of Use</FooterLink>
      <FooterLink href="/blog">Blog</FooterLink>
    </FooterLinks>
  </FooterContainer>
);

export default Footer;
