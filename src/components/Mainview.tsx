import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import RecommendationsView from './RecommendationsView';

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
const DetailText = styled.div<{ active: boolean }>`
  font-size: 0.5rem
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
const CategoryButtons = styled.div``;



const MainView: React.FC = () => {
    const [isAlternateView, setIsAlternateView] = useState(false);
    const navigate = useNavigate();
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 18) return 'Good afternoon';
      return 'Good evening';
    };
    const topItems = [
      { id: 1, title: 'Liked Songs', category : '모두' },
      { id: 2, title: 'Recently Played', category : '모두' },
      { id: 3, title: 'Top Mix', category : '음악' },
      { id: 4, title: 'Discover Weekly', category : '팟캐스트' },
      { id: 5, title: 'Rock Mix', category : '팟캐스트' },
      { id: 6, title: 'Daily Drive', category : '음악' },
    ];
    const madeForYou = [
      { id: 1, title: 'Daily Mix 1', description: 'Drake, The Weeknd, Travis Scott and more', category : '모두' },
      { id: 2, title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music', category : '음악' },
      { id: 3, title: 'Release Radar', description: 'Catch all the latest music from artists you follow', category : '팟캐스트' },
      { id: 4, title: 'Time Capsule', description: 'We made you a personalized playlist with songs to take you back in time', category : '음악' },
    ];
    const popularPlaylists = [
      { id: 1, title: "Today's Top Hits", description: 'Taylor Swift is on top of the Hottest 50!', category : '모두' },
      { id: 2, title: 'RapCaviar', description: 'New music from Drake, Travis Scott and more', category : '음악' },
      { id: 3, title: 'Rock Classics', description: 'Rock legends & epic songs that continue to inspire generations', category : '음악' },
      { id: 4, title: 'Chill Hits', description: 'Kick back to the best new and recent chill hits', category : '팟캐스트' },
    ];
    const categories = ['모두', '음악', '팟캐스트'];
    const [activeCategory, setActiveCategory] = useState('모두');
  
    const filteredTopItems =
      activeCategory === '모두' ? topItems : topItems.filter((item) => item.category === activeCategory);
  
    const filteredMadeForYou =
      activeCategory === '모두' ? madeForYou : madeForYou.filter((item) => item.category === activeCategory);
    const filteredPopularPlaylists = 
      activeCategory === '모두' ? popularPlaylists : popularPlaylists.filter((item) => item.category === activeCategory)
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
    };
    const handleClick = () => {
      navigate('/recommendations')
    }
  
    return (
      <>
      <HomeContainer>
        <Greeting>{getGreeting()}</Greeting>
        <CategoryButtons>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryButtons>
        <Section>
        <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <SectionTitled active={false} onClick={handleClick}>
            회원님을 위한 추천 목록
          </SectionTitled>
          <DetailText active={false} onClick={handleClick}>
            모두 표시
          </DetailText>
          </div>
          <PlaylistGrid>
            {topItems.map((playlist) => (
              <Playlist key={playlist.id}>
                <PlaylistImage />
                <PlaylistTitle>{playlist.title}</PlaylistTitle>
              </Playlist>
            ))}
          </PlaylistGrid>
        </Section>
  
        {/* 다른 섹션들 */}
        <Section>
        <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <SectionTitled active={false} onClick={() => navigate('/charts')}>추천 차트</SectionTitled>
          <DetailText active={false} onClick={() => navigate('/charts')}>
            모두 표시
          </DetailText>
          </div>
          <PlaylistGrid>
          {madeForYou.map((playlist) => (
              <PlaylistCard to={`/playlist/${playlist.id}`} key={playlist.id}>
                <PlaylistImage />
                <PlaylistTitle>{playlist.title}</PlaylistTitle>
                <PlaylistDescription>{playlist.description}</PlaylistDescription>
              </PlaylistCard>
            ))}
          </PlaylistGrid>
        </Section>
  
        <Section>
        <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <SectionTitled active={false} onClick={() => navigate('/shows')}>추천 차트</SectionTitled>
          <DetailText active={false} onClick={() => navigate('/shows')}>
            모두 표시
          </DetailText>
          </div>
          <PlaylistGrid>
            {popularPlaylists.map((playlist) => (
              <PlaylistCard to={`/playlist/${playlist.id}`} key={playlist.id}>
                <PlaylistImage />
                <PlaylistTitle>{playlist.title}</PlaylistTitle>
                <PlaylistDescription>{playlist.description}</PlaylistDescription>
              </PlaylistCard>
            ))}
          </PlaylistGrid>
        </Section>
        </HomeContainer>
      </>
    );
  };

  export default MainView;