import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoHomeOutline, IoHome, IoSearchOutline, IoSearch } from 'react-icons/io5';
import { BiLibrary } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
`;

const NavSection = styled.div`
  margin-bottom: 24px;
`;

const NavItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
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

const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

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

    &:hover {
      color: #fff;
    }
  }
`;

const LibraryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: #b3b3b3;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
      color: #fff;
    }
  }
`;

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      {/* Navigation Section */}
      <NavSection>
        <NavItem to="/" active={location.pathname === '/'}>
          {location.pathname === '/' ? <IoHome /> : <IoHomeOutline />}
          Home
        </NavItem>
        <NavItem to="/search" active={location.pathname === '/search'}>
          {location.pathname === '/search' ? <IoSearch /> : <IoSearchOutline />}
          Search
        </NavItem>
      </NavSection>

      {/* Library Section */}
      <div>
        <LibraryHeader>
          <h3>Your Library</h3>
          <button>
            <AiOutlinePlus />
          </button>
        </LibraryHeader>
        <LibraryList>
          <Link to="/playlist/1">Liked Songs</Link>
          <Link to="/playlist/2">Recently Played</Link>
          <Link to="/playlist/3">Discover Weekly</Link>
        </LibraryList>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;