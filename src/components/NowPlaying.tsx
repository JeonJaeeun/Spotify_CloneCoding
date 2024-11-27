import React from "react";
import styled from 'styled-components';

const NowPlayingList = styled.div`
    width: 100%;
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
    width: 100%;
    align-items: flex-start;
`;

// 글자 수가 박스보다 커지면 ...으로 표시 처리
const NowPlayingTitle = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;  
    overflow: hidden;
`;

const NowPlayingArtist = styled.a.attrs({
    href: "#none",
})`
    color: #b3b3b3;
    font-size: 0.875rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    width: 100%;
    text-decoration: none;
    position: relative;

    &:hover:not(:empty)::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0 2px;
        background: inherit;
    }

    &:hover {
        text-decoration: underline;
        text-decoration-skip-ink: none;
        text-decoration-skip: none;
        color: #fff;
    }
`;

const NowPlaying : React.FC = () => {
    const nowPlayings = [
        { id: 1, title : "Now dssssssssad s slah", artist : "Artist" },
        { id: 2, title : "Now Playing-----", artist : "Artist" },
        { id: 3, title : "Now Playing", artist : "Artist" },
        { id: 4, title : "The Less I Know The Better", artist : "Tame Impala" },
    ];

    return (
        <NowPlayingList>
            {nowPlayings.map((nowPlaying) => (
                <NowPlayingItem key={nowPlaying.id}>
                    <NowPlayingImage />
                    <NowPlayingInfo>
                        <NowPlayingTitle>{nowPlaying.title}</NowPlayingTitle>
                        <NowPlayingArtist>{nowPlaying.artist}</NowPlayingArtist>
                    </NowPlayingInfo>
                </NowPlayingItem>
            ))}
            
        </NowPlayingList>
    )
}

export default NowPlaying;