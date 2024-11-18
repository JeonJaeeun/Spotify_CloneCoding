import React from 'react';
import styled from 'styled-components';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: rgba(0, 0, 0, 0.7);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 20px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 500px;
  padding: 8px 16px;
  flex: 1;
  max-width: 600px;

  svg {
    color: #fff;
    margin-right: 8px;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: #b3b3b3;
    }
  }
`;

const UserControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UpgradeButton = styled.button`
  background-color: #1db954;
  color: #000;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 500px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ed760;
  }
`;

const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 500px;
  padding: 8px 12px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    color: #fff;
    font-size: 0.875rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavigationControls>
        <NavButton>
          <IoArrowBack />
        </NavButton>
        <NavButton>
          <IoArrowForward />
        </NavButton>
      </NavigationControls>

      <SearchBar>
        <BiSearch />
        <input type="text" placeholder="What do you want to listen to?" />
      </SearchBar>

      <UserControls>
        <UpgradeButton>Upgrade</UpgradeButton>
        <ProfileButton>
          <img
            src="https://via.placeholder.com/32"
            alt="User Profile"
          />
          <span>Profile</span>
        </ProfileButton>
      </UserControls>
    </HeaderContainer>
  );
};

export default Header;