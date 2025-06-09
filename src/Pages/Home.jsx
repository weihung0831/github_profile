import { useState } from "react";
import {
  Header,
  Image,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchResults,
  SearchItem,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemSubtitle,
  ProfileSection,
  ProfileHeader,
  ProfileAvatar,
  ProfileStats,
  StatItem,
  StatLabel,
  StatValue,
  ProfileName,
  ProfileDescription,
  RepositoriesSection,
  RepositoryGrid,
  RepositoryCard,
  RepoName,
  RepoDescription,
  RepoStats,
  RepoStat,
  ViewAllButton,
  NoSearchResults
} from "../Styles/AppStyle";
import axios from "axios";

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const avatar = "/skill-icons--github-dark.svg";
  const [repositories, setRepositories] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchGithubData(query);
      fetchRepositories(query);
    }
  };

  const fetchGithubData = async (username) => {
    try {
      setHasSearched(true);
      const res = await axios.get(`https://api.github.com/users/${username}`);

      setResults([
        {
          id: res.data.id,
          icon: avatar,
          title: res.data.name,
          subtitle: res.data.bio,
        },
      ]);

      setProfileData({
        avatar: avatar,
        name: res.data.name,
        description: res.data.bio,
        followers: res.data.followers.toString(),
        following: res.data.following.toString(),
        location: res.data.location,
        login: res.data.login,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setResults([]);
        setProfileData(null);
      }
    }
  };

  const fetchRepositories = async (username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repos = res.data.map(repo => {
        const updatedDate = new Date(repo.updated_at);
        const now = new Date();
        const diffTime = Math.abs(now - updatedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let updatedText;
        if (diffDays < 30) {
          updatedText = `${diffDays} days ago`;
        } else {
          const diffMonths = Math.floor(diffDays / 30);
          updatedText = `${diffMonths} months ago`;
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          license: repo.license,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: updatedText,
          url: repo.html_url,
        };
      });
      setRepositories(repos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setRepositories([]);
    }
  };

  const linkUrl = () => {
    window.open("https://github.com/" + query);
  }

  /**
   * 渲染搜尋區塊組件
   * @returns {JSX.Element} 包含搜尋輸入欄位和結果清單的搜尋容器
   */
  const renderSearchSection = () => (
    <SearchContainer>
      <div style={{ position: "relative" }}>
        {" "}
        <SearchIcon>
          <img src="src/images/Search.svg" alt="Search Icon" />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <SearchResults onClick={linkUrl}>
        {results.map((item) => (
          <SearchItem key={item.id}>
            <ItemIcon src={item.icon} alt={item.title} />
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
            </ItemContent>
          </SearchItem>
        ))}
      </SearchResults>
    </SearchContainer>
  );

  /**
   * 渲染個人資料區塊組件
   * @returns {JSX.Element} 包含用戶頭像、統計資料、姓名和描述的個人資料區塊
   */
  const renderProfileSection = () => (
    <ProfileSection>
      <ProfileHeader>
        <ProfileAvatar src={profileData.avatar} alt="GitHub Avatar" />
        <ProfileStats>
          <StatItem>
            <StatLabel>Followers</StatLabel>
            <StatValue>{profileData.followers}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Following</StatLabel>
            <StatValue>{profileData.following}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Location</StatLabel>
            <StatValue>{profileData.location}</StatValue>
          </StatItem>
        </ProfileStats>
      </ProfileHeader>
      <div style={{ textAlign: "center" }}>
        <ProfileName>{profileData.name}</ProfileName>
        <ProfileDescription>{profileData.description}</ProfileDescription>
      </div>
    </ProfileSection>
  );

  /**
   * 渲染儲存庫區塊組件
   * @returns {JSX.Element} 包含儲存庫卡片網格和查看全部按鈕的區塊
   */
  const renderRepositoriesSection = () => (
    <RepositoriesSection>
      <RepositoryGrid>
        {repositories.slice(0, 6).map((repo) => (
          <RepositoryCard key={repo.id}>
            <a href={repo.url}><RepoName>{repo.name}</RepoName></a>
            <RepoDescription>{repo.description}</RepoDescription>
            <RepoStats>
              {repo.license && <RepoStat>🏷️ {repo.license}</RepoStat>}
              <RepoStat>⭐ {repo.stars}</RepoStat>
              <RepoStat>🔧 {repo.forks}</RepoStat>
              <RepoStat>🗓️ {repo.language}</RepoStat>
              <RepoStat>updated {repo.updated}</RepoStat>
            </RepoStats>
          </RepositoryCard>
        ))}
      </RepositoryGrid>
      {repositories.length > 4 && (
        <ViewAllButton onClick={() => window.open(`https://github.com/${profileData.login}?tab=repositories`)}>
          View all repositories
        </ViewAllButton>
      )}
    </RepositoriesSection>
  );

  return (
    <>
      <Header>
        <Image src="src/images/hero-image-github-profile.jpg" />
        {renderSearchSection()}
      </Header>

      {/* 只有當 profileData 不為 null 時才顯示個人資料區塊 */}
      {profileData && renderProfileSection()}

      {/* 只有當 profileData 不為 null 時才顯示儲存庫區塊 */}
      {profileData && renderRepositoriesSection()}

      {/* 當已搜尋但沒有結果時顯示提示訊息 */}
      {hasSearched && !profileData && (
        <NoSearchResults>
          <h3>請輸入有效的 GitHub 用戶名稱</h3>
          <p>使用上方搜尋欄位輸入 GitHub 用戶名稱並按下 Enter 鍵進行查詢。</p>
        </NoSearchResults>
      )}
    </>
  );
}

export default Home;
