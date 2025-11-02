import { Routes, Route } from 'react-router-dom';
import PrivacyPage from './pages/PrivacyPage';
import AccountDeletionPage from './pages/AccountDeletionPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PrivacyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
      </Routes>
    </div>
  );
}

export default App;
