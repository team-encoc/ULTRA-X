import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import deletionKo from "../assets/ACCOUNT_DELETION_GUIDE_KO.md?raw";
import deletionEn from "../assets/ACCOUNT_DELETION_GUIDE_EN.md?raw";

function AccountDeletionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "kr";

  // Get content based on current language
  const getContent = () => {
    return lang === "en" ? deletionEn : deletionKo;
  };

  // Update language in URL
  const handleLanguageChange = (newLang) => {
    setSearchParams({ lang: newLang });
  };

  // Scroll to top when language changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lang]);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>ULTRAX</h1>
          <p>{lang === "kr" ? "계정 삭제 및 데이터 삭제 가이드" : "Account Deletion and Data Deletion Guide"}</p>

          {/* Language Tabs */}
          <div className="language-tabs">
            <button className={`language-tab ${lang === "kr" ? "active" : ""}`} onClick={() => handleLanguageChange("kr")}>
              한국어 (KR)
            </button>
            <button className={`language-tab ${lang === "en" ? "active" : ""}`} onClick={() => handleLanguageChange("en")}>
              English (EN)
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          <div className="markdown-content">
            <ReactMarkdown>{getContent()}</ReactMarkdown>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Sukwang Precision Co., Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AccountDeletionPage;
