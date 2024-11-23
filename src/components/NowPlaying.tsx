import React from "react";
import styled from 'styled-components';

const NowPlayingList = styled.div`
    padding-bottom: 16px;
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

const NowPlayingImage = styled.img.attrs({
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3V2oPuGZb8EcjRIsa05uFdDjC2XIUyqqM8w&s",
    alt: "사진 없음",
})`
    width: 48px;
    height: 48px;
    border-radius: 2px;
`;

const NowPlayingInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
`;

const NowPlayingTitle = styled.span`
   
`;

const NowPlayingArtist = styled.a.attrs({
    href: "#none",
})`
    color: #b3b3b3;
    font-size: 0.875rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        bottom: -2px;
        left: 0;
        color: #FFF;
        transition: width 0.3s ease;
    }

    &:hover {
        width: 100%;
    }
`;
const NowPlaying : React.FC = () => {
    return (
        <NowPlayingList>
            <NowPlayingItem>
                <NowPlayingImage />
                <NowPlayingInfo>
                    <NowPlayingTitle>Now Playing</NowPlayingTitle>
                    <NowPlayingArtist>Artist</NowPlayingArtist>
                </NowPlayingInfo>
            </NowPlayingItem>
        </NowPlayingList>
    )
}

export default NowPlaying;