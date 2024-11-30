import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

const SearchContainer = styled.div`
  padding: 24px;
  color: #fff;
  background-color: #121212;
  min-height: 100vh;
`;

const SearchHeader = styled.div`
  position: sticky;
  top: 0;
  background: #121212;
  padding: 16px 0;
  z-index: 2;
`;

const SearchInputWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 50px;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  color: #000;
  background: #fff;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: #b3b3b3;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
`;

const BrowseSection = styled.section`
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const GenresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const GenreCard = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    z-index: 1;
  }
`;

const SearchResults = styled.div`
  margin-top: 40px;
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  padding: 16px;
  background: #181818;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #282828;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
  }

  div {
    flex: 1;

    h4 {
      font-size: 1rem;
      margin-bottom: 4px;
      color: #fff;
    }

    p {
      font-size: 0.9rem;
      color: #b3b3b3;
    }
  }
`;

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const genres = [
    { id: 1, name: 'Pop', color: '#148a08' },
    { id: 2, name: 'Rock', color: '#e91429' },
    { id: 3, name: 'Hip-Hop', color: '#bc5900' },
    { id: 4, name: 'Chill', color: '#509bf5' },
    { id: 5, name: 'Dance/Electronic', color: '#e1118c' },
  ];

  const results = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://via.placeholder.com/64' },
    { id: 2, title: 'Levitating', artist: 'Dua Lipa', image: 'https://via.placeholder.com/64' },
    { id: 3, title: 'Good 4 U', artist: 'Olivia Rodrigo', image: 'https://via.placeholder.com/64' },
  ];

  return (
    <SearchContainer>
      {/* 
      <SearchHeader>
        <SearchInputWrapper>
          <SearchIcon size={24} />
          <SearchInput
            type="text"
            placeholder="What do you want to listen to?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInputWrapper>
      </SearchHeader>
      */}

      {searchTerm ? (
        <SearchResults>
          <SectionTitle>Search Results</SectionTitle>
          <ResultList>
            {results.map((result) => (
              <ResultItem key={result.id}>
                <img src={result.image} alt={result.title} />
                <div>
                  <h4>{result.title}</h4>
                  <p>{result.artist}</p>
                </div>
              </ResultItem>
            ))}
          </ResultList>
        </SearchResults>
      ) : (
        <BrowseSection>
          <SectionTitle>Browse All</SectionTitle>
          <GenresGrid>
            {genres.map((genre) => (
              <GenreCard key={genre.id} color={genre.color}>
                <h3>{genre.name}</h3>
              </GenreCard>
            ))}
          </GenresGrid>
        </BrowseSection>
      )}
    </SearchContainer>
  );
};

export default Search;