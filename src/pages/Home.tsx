import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const TopItem = styled.div`
  background-color: #282828;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #333333;
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

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`;

const PlaylistCard = styled(Link)`
  background-color: #181818;
  border-radius: 8px;
  padding: 16px;
  text-decoration: none;
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

const Home: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const topItems = [
    { id: 1, title: 'Liked Songs' },
    { id: 2, title: 'Recently Played' },
    { id: 3, title: 'Top Mix' },
    { id: 4, title: 'Discover Weekly' },
    { id: 5, title: 'Rock Mix' },
    { id: 6, title: 'Daily Drive' },
  ];

  const madeForYou = [
    { id: 1, title: 'Daily Mix 1', description: 'Drake, The Weeknd, Travis Scott and more' },
    { id: 2, title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music' },
    { id: 3, title: 'Release Radar', description: 'Catch all the latest music from artists you follow' },
    { id: 4, title: 'Time Capsule', description: 'We made you a personalized playlist with songs to take you back in time' },
  ];

  const popularPlaylists = [
    { id: 1, title: "Today's Top Hits", description: 'Taylor Swift is on top of the Hottest 50!' },
    { id: 2, title: 'RapCaviar', description: 'New music from Drake, Travis Scott and more' },
    { id: 3, title: 'Rock Classics', description: 'Rock legends & epic songs that continue to inspire generations' },
    { id: 4, title: 'Chill Hits', description: 'Kick back to the best new and recent chill hits' },
  ];

  return (
    <HomeContainer>
      <Greeting>{getGreeting()}</Greeting>

      <Section>
        <SectionTitle>Your Top Items</SectionTitle>
        <TopGrid>
          {topItems.map((item) => (
            <TopItem key={item.id}>
              <ItemImage />
              <ItemTitle>{item.title}</ItemTitle>
            </TopItem>
          ))}
        </TopGrid>
      </Section>

      <Section>
        <SectionTitle>Made For You</SectionTitle>
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
        <SectionTitle>Popular Playlists</SectionTitle>
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
  );
};

export default Home;