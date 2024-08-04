// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import NFTMarketplace from './pages/NFTMarketplace';
import Notifications from './pages/Notifiactions';
import Kanban from './pages/Kanban';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Sidebar />
        <div style={{ marginTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/nftmarketplace' element={<NFTMarketplace/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/kanban' element={<Kanban/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
