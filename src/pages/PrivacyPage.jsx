import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import privacyKo from "../assets/PRIVACY_POLICY_KO_FINAL.md?raw";
import privacyEn from "../assets/PRIVACY_POLICY_EN_FINAL.md?raw";
import locationKo from "../assets/LOCATION_TERMS_KO_FINAL.md?raw";
import locationEn from "../assets/LOCATION_TERMS_EN_FINAL.md?raw";

function PrivacyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "kr";
  const tab = searchParams.get("tab") || "privacy";

  // Get content based on current language and tab
  const getContent = () => {
    if (tab === "privacy") {
      return lang === "en" ? privacyEn : privacyKo;
    } else {
      return lang === "en" ? locationEn : locationKo;
    }
  };

  // Update language in URL (keep current tab)
  const handleLanguageChange = (newLang) => {
    setSearchParams({ lang: newLang, tab });
  };

  // Update tab in URL (keep current language)
  const handleTabChange = (newTab) => {
    setSearchParams({ lang, tab: newTab });
  };

  // Scroll to top when tab or language changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab, lang]);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>ULTRAX</h1>
          <p>{lang === "kr" ? "개인정보처리방침 및 위치기반 서비스 이용약관" : "Privacy Policy & Location-Based Service Terms"}</p>

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

      {/* Content Tabs */}
      <div className="content-tabs">
        <button className={`content-tab ${tab === "privacy" ? "active" : ""}`} onClick={() => handleTabChange("privacy")}>
          {lang === "kr" ? "개인정보처리방침" : "Privacy Policy"}
        </button>
        <button className={`content-tab ${tab === "location" ? "active" : ""}`} onClick={() => handleTabChange("location")}>
          {lang === "kr" ? "위치기반 서비스 이용약관" : "Location-Based Service Terms"}
        </button>
      </div>

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

export default PrivacyPage;
