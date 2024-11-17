import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoPlayCircle,
  IoPauseCircle,
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoShuffle,
  IoRepeat,
} from 'react-icons/io5';
import { BiVolumeFull, BiVolumeMute, BiVolumeLow } from 'react-icons/bi';

const PlayerContainer = styled.div`
  background-color: #181818;
  border-top: 1px solid #282828;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const TrackImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #282828;
  border-radius: 8px;
`;

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    margin: 0;
  }

  p {
    font-size: 0.875rem;
    color: #b3b3b3;
    margin: 4px 0 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 2;
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: #fff;
  }

  &.play-button {
    font-size: 2rem;
    color: #fff;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 0.75rem;
    color: #b3b3b3;
  }
`;

const ProgressBar = styled.input`
  flex: 1;
  height: 4px;
  background-color: #b3b3b3;
  border-radius: 4px;
  appearance: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background-color: #1db954;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const VolumeControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VolumeBar = styled(ProgressBar)`
  width: 100px;
`;

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [trackDuration, setTrackDuration] = useState(240);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <BiVolumeMute />;
    if (volume <= 50) return <BiVolumeLow />;
    return <BiVolumeFull />;
  };

  return (
    <PlayerContainer>
      <TrackInfo>
        <TrackImage />
        <TrackDetails>
          <h4>Track Title</h4>
          <p>Artist Name</p>
        </TrackDetails>
      </TrackInfo>

      <Controls>
        <ControlButtons>
          <Button>
            <IoShuffle />
          </Button>
          <Button>
            <IoPlaySkipBack />
          </Button>
          <Button
            className="play-button"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <IoPauseCircle /> : <IoPlayCircle />}
          </Button>
          <Button>
            <IoPlaySkipForward />
          </Button>
          <Button>
            <IoRepeat />
          </Button>
        </ControlButtons>
        <ProgressBarWrapper>
          <span>{formatTime(currentTime)}</span>
          <ProgressBar
            type="range"
            min="0"
            max={trackDuration}
            value={currentTime}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
          />
          <span>{formatTime(trackDuration)}</span>
        </ProgressBarWrapper>
      </Controls>

      <VolumeControls>
        {getVolumeIcon()}
        <VolumeBar
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </VolumeControls>
    </PlayerContainer>
  );
};

export default Player;