import React from 'react';
import styled from 'styled-components';
import { IoPlay, IoEllipsisHorizontal } from 'react-icons/io5';

const PlaylistContainer = styled.div`
  padding: 32px;
  color: #fff;
  background-color: #121212;
  min-height: 100vh;
`;

const PlaylistHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 32px;
`;

const PlaylistImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: #282828;
  border-radius: 8px;
`;

const PlaylistDetails = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    margin: 0 0 12px;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
    margin: 0;
  }

  span {
    font-size: 0.875rem;
    color: #b3b3b3;
    margin-top: 8px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;

const PlayButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #1db954;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: #fff;
    font-size: 24px;
  }
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: #fff;
  }
`;

const TrackList = styled.div`
  margin-top: 32px;
  border-top: 1px solid #282828;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #282828;

  &:hover {
    background-color: #282828;
  }
`;

const TrackDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: column;

    h4 {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
    }

    p {
      margin: 0;
      font-size: 0.875rem;
      color: #b3b3b3;
    }
  }
`;

const TrackDuration = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #b3b3b3;
`;

const Playlist: React.FC = () => {
  const tracks = [
    { id: 1, title: 'Track 1', artist: 'Artist 1', duration: '3:45' },
    { id: 2, title: 'Track 2', artist: 'Artist 2', duration: '4:05' },
    { id: 3, title: 'Track 3', artist: 'Artist 3', duration: '5:20' },
  ];

  return (
    <PlaylistContainer>
      <PlaylistHeader>
        <PlaylistImage />
        <PlaylistDetails>
          <h1>Playlist Title</h1>
          <p>3 Tracks</p>
          <span>By User</span>
        </PlaylistDetails>
      </PlaylistHeader>

      <Controls>
        <PlayButton>
          <IoPlay />
        </PlayButton>
        <MoreButton>
          <IoEllipsisHorizontal />
        </MoreButton>
      </Controls>

      <TrackList>
        {tracks.map((track) => (
          <Track key={track.id}>
            <TrackDetails>
              <img
                src={`https://via.placeholder.com/48?text=Album+Art`}
                alt="Album Art"
              />
              <div>
                <h4>{track.title}</h4>
                <p>{track.artist}</p>
              </div>
            </TrackDetails>
            <TrackDuration>{track.duration}</TrackDuration>
          </Track>
        ))}
      </TrackList>
    </PlaylistContainer>
  );
};

export default Playlist;