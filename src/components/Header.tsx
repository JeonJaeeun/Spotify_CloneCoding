import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi"; // 홈 아이콘
import { FiSearch } from "react-icons/fi"; // 검색 아이콘
import { RiShoppingBagLine } from "react-icons/ri"; // 가방 아이콘

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #000;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 600px;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: #333;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #121212;
  border-radius: 999px;
  padding: 8px 16px;
  flex: 1;
  cursor: pointer; /* 검색창을 클릭 가능하게 설정 */
`;

const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  outline: none;
  margin-left: 8px;

  &::placeholder {
    color: #b3b3b3;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #333;
  margin: 0 12px;
`;

const BagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #b3b3b3;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PremiumButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #333;
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 검색창 클릭 시 /search 페이지로 이동
  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <HeaderContainer>
      {/* 로고 */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify Logo"
          style={{ height: "36px" }}
        />
      </Link>

      {/* 중앙 섹션 */}
      <SearchSection>
        <HomeButton to="/">
          <HiOutlineHome />
        </HomeButton>
        <SearchBar onClick={handleSearchClick}>
          <FiSearch />
          <SearchInput placeholder="어떤 콘텐츠를 감상하고 싶으세요?" />
          <Divider />
          <BagIcon>
            <RiShoppingBagLine />
          </BagIcon>
        </SearchBar>
      </SearchSection>

      {/* 오른쪽 섹션 */}
      <RightSection>
        <PremiumButton>Premium 둘러보기</PremiumButton>
        <ProfileButton>Y</ProfileButton>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;