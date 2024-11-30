import React from "react";
import styled from "styled-components";

// Styled Components
const HomeContainer = styled.div`
  padding: 24px;
  background-color: #121212;
  color: white;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SeeAllLink = styled.a`
  font-size: 0.875rem;
  color: #b3b3b3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalScroll = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #282828;
    border-radius: 4px;
  }
`;

const ArtistCard = styled.div<{ image: string }>`
  flex: 0 0 120px;
  text-align: center;
  cursor: pointer;

  & > div {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin-bottom: 8px;
  }

  & > h3 {
    font-size: 0.875rem;
    color: white;
  }

  & > p {
    font-size: 0.75rem;
    color: #b3b3b3;
  }
`;

const AlbumCard = styled.div<{ image: string }>`
  flex: 0 0 180px;
  background-color: #181818;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;

  & > div {
    width: 100%;
    aspect-ratio: 1;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
  }

  & > h3 {
    margin: 8px 16px 4px;
    font-size: 0.875rem;
    color: white;
  }

  & > p {
    margin: 0 16px 16px;
    font-size: 0.75rem;
    color: #b3b3b3;
  }
`;

// Component
const Home: React.FC = () => {
  const topArtists = [
    { id: 1, name: "ROSE", type: "아티스트", image: "/images/rose.jpg" },
    { id: 2, name: "aespa", type: "아티스트", image: "/images/aespa.jpg" },
    { id: 3, name: "DAY6", type: "아티스트", image: "/images/day6.jpg" },
    { id: 4, name: "Faker", type: "신", image: "/images/faker.jpg" },
    { id: 5, name: "New Jeans", type: "아티스트", image: "/images/newjeans.jpg" },
    { id: 6, name: "G-DRAGON", type: "아티스트", image: "/images/gdragon.jpg" },
    { id: 7, name: "Bruno Mars", type: "아티스트", image: "/images/brunomars.jpg" },
    { id: 8, name: "Zico", type: "아티스트", image: "/images/지코.jpg" },
    { id: 9, name: "Faker", type: "신", image: "/images/faker.jpg" },
    { id: 10, name: "Swings", type: "아티스트", image: "/images/swings.jpg" },
  ];

  const albums = [
    { id: 1, title: "MUSE", description: "지민", image: "/images/muse.jpg" },
    { id: 2, title: "GOLDEN", description: "정국", image: "/images/golden.jpg" },
    { id: 3, title: "IM HERO", description: "임영웅", image: "/images/imhero.jpg" },
    { id: 4, title: "Happy", description: "aespa", image: "/images/happy.jpg" },
    { id: 5, title: "APT", description: "로제", image: "/images/apt.jpg" },
  ];

  const popularRadio = [
    { id: 1, title: "잔나비", description: "잔나비의 베스트 트랙", image: "/images/jannabi.jpg" },
    { id: 2, title: "G-DRAGON", description: "G-DRAGON의 대표곡", image: "/images/gdragonpower.jpg" },
    { id: 3, title: "AKMU", description: "AKMU의 인기 곡", image: "/images/akmu.jpg" },
  ];

  const recommendedCharts = [
    { id: 1, title: "인기곡 글로벌", description: "글로벌 차트", image: "/images/global-chart.jpg" },
    { id: 2, title: "인기곡 미국", description: "미국 차트", image: "/images/usa-chart.jpg" },
    { id: 3, title: "Viral 50", description: "가장 인기 있는 바이럴 곡", image: "/images/viral50.jpg" },
  ];

  return (
    <HomeContainer>
      {/* 인기 아티스트 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle>인기 아티스트</SectionTitle>
          <SeeAllLink href="#">모두 표시</SeeAllLink>
        </SectionHeader>
        <HorizontalScroll>
          {topArtists.map((artist) => (
            <ArtistCard key={artist.id} image={artist.image}>
              <div />
              <h3>{artist.name}</h3>
              <p>{artist.type}</p>
            </ArtistCard>
          ))}
        </HorizontalScroll>
      </Section>

      {/* 인기 앨범 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle>인기 앨범 및 싱글</SectionTitle>
          <SeeAllLink href="#">모두 표시</SeeAllLink>
        </SectionHeader>
        <HorizontalScroll>
          {albums.map((album) => (
            <AlbumCard key={album.id} image={album.image}>
              <div />
              <h3>{album.title}</h3>
              <p>{album.description}</p>
            </AlbumCard>
          ))}
        </HorizontalScroll>
      </Section>

      {/* 인기 라디오 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle>인기 라디오</SectionTitle>
          <SeeAllLink href="#">모두 표시</SeeAllLink>
        </SectionHeader>
        <HorizontalScroll>
          {popularRadio.map((radio) => (
            <AlbumCard key={radio.id} image={radio.image}>
              <div />
              <h3>{radio.title}</h3>
              <p>{radio.description}</p>
            </AlbumCard>
          ))}
        </HorizontalScroll>
      </Section>

      {/* 추천 차트 섹션 */}
      <Section>
        <SectionHeader>
          <SectionTitle>추천 차트</SectionTitle>
          <SeeAllLink href="#">모두 표시</SeeAllLink>
        </SectionHeader>
        <HorizontalScroll>
          {recommendedCharts.map((chart) => (
            <AlbumCard key={chart.id} image={chart.image}>
              <div />
              <h3>{chart.title}</h3>
              <p>{chart.description}</p>
            </AlbumCard>
          ))}
        </HorizontalScroll>
      </Section>
    </HomeContainer>
  );
};

export default Home;
