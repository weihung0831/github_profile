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
} from "../Styles/AppStyle";

function Home() {
  const [query, setQuery] = useState("username");
  const [results] = useState([
    {
      id: 1,
      icon: "/skill-icons--github-dark.svg",
      title: "GitHub",
      subtitle: "How people build software.",
    },
  ]);

    /**
     * 個人資料資料物件，包含 GitHub 個人資料資訊
     * @type {Object}
     * @property {string} avatar - 個人資料頭像圖片路徑
     * @property {string} name - 個人資料顯示名稱
     * @property {string} description - 個人資料描述文字
     * @property {string} followers - 追蹤者數量（字串格式）
     * @property {string} following - 追蹤中數量（字串格式）
     * @property {string} location - 個人資料地理位置
     */
  const [profileData] = useState({
    avatar: "/skill-icons--github-dark.svg",
    name: "GitHub",
    description: "How people build software.",
    followers: "27839",
    following: "0",
    location: "San Francisco, CA",
  });

  /**
   * 包含儲存庫物件陣列的狀態變數，每個物件包含其元資料。
   * 每個儲存庫物件包含如 id、名稱、描述、程式語言、星星數量、
   * 分支數量、授權條款和最後更新時間等資訊。
   * 
   * @type {Array<Object>} repositories - 儲存庫物件陣列
   * @property {number} repositories[].id - 儲存庫的唯一識別碼
   * @property {string} repositories[].name - 儲存庫名稱
   * @property {string} repositories[].description - 儲存庫簡要描述
   * @property {string} [repositories[].license] - 授權條款類型（選填）
   * @property {string} repositories[].language - 主要程式語言
   * @property {number} repositories[].stars - 儲存庫獲得的星星數量
   * @property {number} repositories[].forks - 儲存庫被分支的次數
   * @property {string} repositories[].updated - 距離最後更新的時間（人類可讀格式）
   */
  const [repositories] = useState([
    {
      id: 1,
      name: ".github",
      description: "Community health files for the @GitHub organization",
      language: "JavaScript",
      stars: 703,
      forks: 2369,
      updated: "4 days ago",
    },
    {
      id: 2,
      name: "accessibility-alt-text-bot",
      description:
        "An action to remind users to add alt text on Issues, Pull Requests, and Discussions",
      license: "MIT",
      language: "JavaScript",
      stars: 50,
      forks: 7,
      updated: "3 days ago",
    },
    {
      id: 3,
      name: "accessibilityjs",
      description: "Client side accessibility error scanner.",
      license: "MIT",
      language: "JavaScript",
      stars: 2181,
      forks: 72,
      updated: "4 days ago",
    },
    {
      id: 4,
      name: "actions-cheat-sheet",
      description: "A cheat sheet for GitHub Actions",
      license: "MIT",
      language: "JavaScript",
      stars: 194,
      forks: 26,
      updated: "4 days ago",
    },
  ]);
  
  /**
   * 渲染搜尋區塊組件
   * @returns {JSX.Element} 包含搜尋輸入欄位和結果清單的搜尋容器
   */
  const renderSearchSection = () => (
    <SearchContainer>
      <div style={{ position: "relative" }}>        <SearchIcon>
          <img src="src/images/Search.svg" alt="Search Icon" />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <SearchResults>
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
      <div style={{ textAlign: 'center' }}>
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
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id}>
            <RepoName>{repo.name}</RepoName>
            <RepoDescription>{repo.description}</RepoDescription>
            <RepoStats>
              {repo.license && <RepoStat>🏷️ {repo.license}</RepoStat>}
              <RepoStat>⭐ {repo.stars}</RepoStat>
              <RepoStat>🔧 {repo.forks}</RepoStat>
              <RepoStat>updated {repo.updated}</RepoStat>
            </RepoStats>
          </RepositoryCard>
        ))}
      </RepositoryGrid>
      <ViewAllButton>View all repositories</ViewAllButton>
    </RepositoriesSection>
  );

  return (
    <>      <Header>
        <Image src="src/images/hero-image-github-profile.jpg" />
        {renderSearchSection()}
      </Header>

      {renderProfileSection()}
      {renderRepositoriesSection()}
    </>
  );
}

export default Home;
