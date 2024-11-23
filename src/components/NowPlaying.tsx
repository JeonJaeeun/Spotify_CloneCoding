import React from "react";
import styled from 'styled-components';

const NowPlayingList = styled.div`

`;

const NowPlayingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 4px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #282828;
    color: #fff;
  }

  svg {
    font-size: 24px;
  }
`;
const NowPlaying : React.FC = () => {
    return (
        <NowPlayingList>
            <NowPlayingItem />
            <NowPlayingItem />
            <NowPlayingItem />
        </NowPlayingList>
    )
}

export default NowPlaying;