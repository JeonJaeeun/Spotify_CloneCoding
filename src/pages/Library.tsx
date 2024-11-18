import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LibraryContainer = styled.div`
  padding: 32px;
  background-color: #121212;
  color: #fff;
`;

const Section = styled.section`
  margin-bottom: 32px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
`;

const PlaylistLink = styled(Link)`
  display: block;
  color: #b3b3b3;
  margin-bottom: 12px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const Library: React.FC = () => {
  const playlists = [
    { id: 1, title: 'Liked Songs' },
    { id: 2, title: 'Chill Vibes' },
    { id: 3, title: 'Workout Playlist' },
  ];

  return (
    <LibraryContainer>
      <Section>
        <h2>Your Playlists</h2>
        {playlists.map((playlist) => (
          <PlaylistLink key={playlist.id} to={`/playlist/${playlist.id}`}>
            {playlist.title}
          </PlaylistLink>
        ))}
      </Section>
    </LibraryContainer>
  );
};

export default Library;