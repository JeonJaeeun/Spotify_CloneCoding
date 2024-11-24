import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 24px;
  background-color: #121212;
  color: white;
`;
const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
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

const RecommendationsView: React.FC = () => {
    const expandedPlaylists = [
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
          {expandedPlaylists.map((playlist) => (
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
export default RecommendationsView