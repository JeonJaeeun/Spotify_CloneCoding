import React, { useState } from "react";
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-left: 16px;

  h3 {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    color: #b3b3b3;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.3s;
    display: flex;

    &:hover {
      color: #fff;
    }
  }
`;

let NowPlayingList = styled.div<{ isVisible: boolean }>`
    width: 100%;
    padding-bottom: 16px;
    max-height: ${props => props.isVisible ? '1000px' : '0'};
    opacity: ${props => props.isVisible ? '1' : '0'};
    overflow: hidden;
    padding-bottom: ${props => props.isVisible ? '16px' : '0'};
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
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

const NowPlayingImageWrapper = styled.div`
    position: relative;
    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        background: none;
        border: none;
        color: #b3b3b3;
        font-size: 20px;
        padding: 8px;
        cursor: pointer;
        transition: color 0.3s;
        display: flex;
        overflow-wrap: anywhere;
        text-align: center;
        opacity: 0;
        &:hover {
            color: #fff;
        }
    }
    &:hover button {
        opacity: 1;
    }
    svg {
        width: 32px;
        height: 32px;
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

type Playing =
    { 
        type : "playing";
    } 
    | {
        type : "paused";
    } 
    | {
        type : "not playing";
    };

type nowPlaying = {
    id: number;
    title: string;
    artist: string;
};

// 곡들마다 각각의 state를 가지게 할 수 있게 함
const NowPlayingEntry : React.FC<{nowPlayingItem : nowPlaying}> = ({nowPlayingItem}) => {
    const [ playingState, setplayingState ] = useState<Playing>({ type : "not playing" });

    function togglePlaying() : void {
        if (playingState.type === "playing") {
            setplayingState( { type : "paused" });
        }    
        else if (playingState.type === "paused" || playingState.type === "not playing") {
            setplayingState({ type : "playing" });
        }
    }

    return (
    <NowPlayingItem key={nowPlayingItem.id}>
        <NowPlayingImageWrapper>
            <button onClick={togglePlaying}>
                {playingState.type === "playing" ? <BsFillPauseFill /> : <BsFillPlayFill />}
            </button>
            <NowPlayingImage />
        </NowPlayingImageWrapper>
        <NowPlayingInfo>
            <NowPlayingTitle>{nowPlayingItem.title}</NowPlayingTitle>
            <NowPlayingArtist>{nowPlayingItem.artist}</NowPlayingArtist>
        </NowPlayingInfo>
    </NowPlayingItem>
    );
};

const NowPlaying : React.FC = () => {
    const [ isVisible, setisVisible ] = useState<boolean>(true);
    
    function toggleVisible () : void {
        setisVisible(!isVisible);
    }
    
    const nowPlayings: nowPlaying[] = [
        { id: 1, title : "Now Playing", artist : "Artist"},
        { id: 2, title : "Now Playing-----", artist : "Artist"},
        { id: 3, title : "The Less I Know The Better", artist : "Tame Impala"},
    ];

    return (
        <>
            <LibraryHeader>
                    <h3>Now Playing</h3>
                    <button onClick={toggleVisible}>
                        <AiOutlinePlus style={{ transform: isVisible ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}/>
                    </button>
            </LibraryHeader>
            <NowPlayingList isVisible={isVisible}>
                {nowPlayings.map((nowPlayingItem) => (
                    <NowPlayingEntry key={nowPlayingItem.id} nowPlayingItem={nowPlayingItem} />
                ))}
            </NowPlayingList>
        </>
    )
};

export default NowPlaying;