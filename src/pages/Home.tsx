import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import RecommendationsView from '../components/RecommendationsView';
import MainView from '../components/Mainview';

const HomeContainer = styled.div`
  padding: 24px;
  background-color: #121212;
  color: white;
`;

const Greeting = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
;`

const TopItem = styled.button<{active:boolean}>`
  background-color: #282828;
  color: ${({ active }) => (active ? '#fff' : '#b3b3b3')};
  background : none;
  border : none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '2px solid #fff' : '2px solid transparent')};
  transition: border-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;

const ItemImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #404040;
  border-radius: 4px;
`;

const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SectionTitled = styled.h2<{ active: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top : 20px;
  margin-bottom: 16px;
  cursor: pointer;
  display: inline-block;
  border-bottom: ${({ active }) => (active ? '2px solid #fff' : '2px solid transparent')};
  transition: border-color 0.3s ease;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`;

const PlaylistCard = styled(Link)`
  background-color: #181818;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: background 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #282828;
    transform: scale(1.05);
  }
`;

const PlaylistImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: #404040;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const PlaylistTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const PlaylistDescription = styled.p`
  font-size: 0.875rem;
  color: #b3b3b3;
  line-height: 1.4;
`;
const CategoryButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  margin-right : 10px;

  background-color: ${({ active }) => (active ? '#fff' : '#282828')};
  color: ${({ active }) => (active ? '#000' : '#fff')};

  &:hover {
    background-color: ${({ active }) => (active ? '#ddd' : '#333')};
  }
`;
const Playlist = styled.div`
  background-color: #181818;
  border-radius: 8px;
  padding: 16px;
  transition: background 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #282828;
    transform: scale(1.05);
  }
`;
const CategoryButtons = styled.div``;

export const ChartsView: React.FC = () => {
  const expandedGive = [
    { id: 1, title: 'Deep Jazz', description: '깊고 부드러운 재즈의 향연' },
    { id: 2, title: '4:00 am Groove', description: '새벽 감성 음악의 결정판' },
    { id: 3, title: 'Dreamlike', description: '몽환적인 음악 세계로 초대합니다' },
    { id: 4, title: 'Lo-fi Relax', description: '집중과 휴식을 위한 Lo-fi 음악' },
  ];
  const days = ['일요일도 잘 자요', '월요일은 상쾌하게 시작', '화요일', '수요일', '목요일', '금요일', '토요일'
  ]
  const today = new Date();
 
  return (
    <Section>
      <SectionTitle>{days[today.getDay()]}</SectionTitle>
      <PlaylistGrid>
        {expandedGive.map((playlist) => (
          <Playlist key={playlist.id}>
            <PlaylistImage />
            <PlaylistTitle>{playlist.title}</PlaylistTitle>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </PlaylistGrid>
    </Section>
  );

};
export const ShowsView: React.FC = () => {
  const expandedShow= [
    { id: 1, title: 'Deep Jazz', description: '깊고 부드러운 재즈의 향연' },
    { id: 2, title: '4:00 am Groove', description: '새벽 감성 음악의 결정판' },
    { id: 3, title: 'Dreamlike', description: '몽환적인 음악 세계로 초대합니다' },
    { id: 4, title: 'Lo-fi Relax', description: '집중과 휴식을 위한 Lo-fi 음악' },
  ];
  const days = ['일요일도 잘 자요', '월요일은 상쾌하게 시작', '화요일', '수요일', '목요일', '금요일', '토요일'
  ]
  const today = new Date();
 
  return (
    <HomeContainer>
    <Section>
      <SectionTitle>{days[today.getDay()]}</SectionTitle>
      <PlaylistGrid>
        {expandedShow.map((playlist) => (
          <Playlist key={playlist.id}>
            <PlaylistImage />
            <PlaylistTitle>{playlist.title}</PlaylistTitle>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </PlaylistGrid>
    </Section>
    </HomeContainer>
  );
};


const Home: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainView />} />
    <Route path="/recommendations" element={<RecommendationsView />} />
    <Route path="/charts" element={<ChartsView />} />
    <Route path="/shows" element={<ShowsView />} />
  </Routes>
  );


export default Home;
