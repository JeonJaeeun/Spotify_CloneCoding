import React, { useState } from "react";
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { on } from "events";

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

const NowPlayingItem = styled.div<{ isPlaying?: boolean }>`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    border-radius: 4px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${props => props.isPlaying ? '#282828' : 'transparent'};
    color: ${ props => props.isPlaying ? '#fff' : 'inherit' };

    &:hover {
        background-color: #282828;
        color: #fff;
    }

    svg {
        font-size: 24px;
    }
`;

const NowPlayingImageWrapper = styled.div<{ isPlaying?: boolean }>`
    position: relative;
    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        background: none;
        border: none;
        color: ${props => props.isPlaying ? '#fff' : '#b3b3b3'};
        font-size: 20px;
        padding: 8px;
        cursor: pointer;
        transition: color 0.3s;
        display: flex;
        overflow-wrap: anywhere;
        text-align: center;
        opacity: ${props => props.isPlaying ? '1' : '0'};

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

const NowPlayingDelete = styled.div<{isPlaying? : boolean}>`
    display: flex;
    align-items: center;

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: ${props => props.isPlaying ? '#fff' : '#b3b3b3'};
    }
    svg {
        width: 24px;
        height: 24px;
        font-size: 20px;
    }
`;

type nowPlaying = {
    id: number;
    title: string;
    artist: string;
};

// 곡들마다 각각의 state를 가지게할 수 있게.ham
const NowPlayingEntry : React.FC<{nowPlayingItem : nowPlaying, isCurrentlyPlaying: boolean, onPlayingChange: (isPlaying: boolean) => void, onDelete: (id: number) => void}> = ({nowPlayingItem, isCurrentlyPlaying, onPlayingChange, onDelete}) => {
    function togglePlaying() : void {
        onPlayingChange(!isCurrentlyPlaying);
    }

    function deleteNowPlaying(id: number) {
        onDelete(id);
    }

    return (
    <NowPlayingItem key={nowPlayingItem.id} isPlaying={isCurrentlyPlaying}>
        <NowPlayingImageWrapper isPlaying={isCurrentlyPlaying}>
            <button onClick={togglePlaying}>
                {isCurrentlyPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
            </button>
            <NowPlayingImage />
        </NowPlayingImageWrapper>
        <NowPlayingInfo>
            <NowPlayingTitle>{nowPlayingItem.title}</NowPlayingTitle>
            <NowPlayingArtist>{nowPlayingItem.artist}</NowPlayingArtist>
        </NowPlayingInfo>
        <NowPlayingDelete isPlaying={isCurrentlyPlaying}>
            <button onClick={() => deleteNowPlaying(nowPlayingItem.id)}>
                <AiOutlineDelete />
            </button>
        </NowPlayingDelete>
        
    </NowPlayingItem>
    );
};

const NowPlaying : React.FC = () => {
    const [ isVisible, setisVisible ] = useState<boolean>(true);
    const [ currentlyPlayingId, setCurrentlyPlayingId ] = useState<number | null>(null);
    
    function toggleVisible () : void {
        setisVisible(!isVisible);
    }

    function handlePlayingChange(id: number, isPlaying: boolean) : void {
        if (isPlaying) {
            setCurrentlyPlayingId(id);
        } else if (currentlyPlayingId === id) {
            setCurrentlyPlayingId(null);
        }
    }
    
    const nowPlayings: nowPlaying[] = [
        { id: 1, title : "Now Playing", artist : "Artist"},
        { id: 2, title : "Now Playing-----", artist : "Artist"},
        { id: 3, title : "The Less I Know The Better", artist : "Tame Impala"},
    ];

    // 미완성
    function deleteNowPlaying(id: number) : void {
        nowPlayings.splice(nowPlayings.findIndex((nowPlayingItem) => nowPlayingItem.id === id), 1);
    }

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
                    <NowPlayingEntry 
                        key={nowPlayingItem.id} 
                        nowPlayingItem={nowPlayingItem}
                        isCurrentlyPlaying={currentlyPlayingId === nowPlayingItem.id}
                        onPlayingChange={(isPlaying) => handlePlayingChange(nowPlayingItem.id, isPlaying)}
                        onDelete={deleteNowPlaying}
                    />
                ))}
            </NowPlayingList>
        </>
    )
};

export default NowPlaying;