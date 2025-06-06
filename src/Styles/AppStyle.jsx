import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100vw;
  height: 30vh;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100;
  object-fit: cover;
  display: block;
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 60px;
    padding: 12px 16px;
    padding-left: 50px;
    border: none;
    border-radius: 10px;
    background-color: #121212;
    color: #e2e8f0;
    font-size: 16px;
    outline: none;
    margin-bottom: 12px;
    box-sizing: border-box;

    &::placeholder {
        color: #94a3b8;
    }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 21px;
  color: #7d8590;
  font-size: 18px;
  pointer-events: none;
`;

export const SearchResults = styled.div`
  background-color: #121212;
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  margin-bottom: 24px;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const ItemIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.div`
  color: #f0f6fc;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  text-align: left;
  width: 100%;
`;

export const ItemSubtitle = styled.div`
  color: #7d8590;
  font-size: 12px;
  text-align: left;
  width: 100%;
`;

export const ProfileSection = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background-color: #121212;
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  margin-right: 20px;
`;

export const ProfileStats = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StatItem = styled.div`
  background-color: #121212;
  padding: 12px 16px;
  border-radius: 12px;
  min-width: 100px;
  flex: 1;
  text-align: center;
`;

export const StatLabel = styled.div`
  color: #7d8590;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const StatValue = styled.div`
  color: #f0f6fc;
  font-weight: 600;
  font-size: 16px;
`;

export const ProfileName = styled.h2`
  color: #f0f6fc;
  font-size: 32px;
  font-weight: 600;
  margin: 16px 0 8px 0;
  text-align: center;
`;

export const ProfileDescription = styled.p`
  color: #7d8590;
  font-size: 16px;
  margin: 0 0 16px 0;
  text-align: center;
`;

export const RepositoriesSection = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 24px;
`;

export const RepositoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const RepositoryCard = styled.div`
  background-color: #121212;
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const RepoName = styled.h3`
  color: #58a6ff;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  cursor: pointer;
  text-align: left;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const RepoDescription = styled.p`
  color: #7d8590;
  font-size: 14px;
  margin: 0 0 16px 0;
  line-height: 1.5;
  text-align: left;
`;

export const RepoStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  color: #7d8590;
  text-align: left;
  justify-content: flex-start;
  width: 100%;
`;

export const RepoStat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ViewAllButton = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f0f6fc;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
