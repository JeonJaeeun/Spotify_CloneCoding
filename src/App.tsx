import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Global Styles
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

// Pages
import Home from './pages/Home';
import Library from './pages/Library';
import Search from './pages/Search';
import Playlist from './pages/Playlist';

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #121212;
  color: #fff;
`;

const MainSection = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.8) 100%);
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <MainSection>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <ContentWrapper>
            <ContentArea>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/search" element={<Search />} />
                <Route path="/playlist/:id" element={<Playlist />} />
              </Routes>
            </ContentArea>

            {/* Player */}
            <Player />
          </ContentWrapper>
        </MainSection>
      </AppContainer>
    </Router>
  );
};

export default App;