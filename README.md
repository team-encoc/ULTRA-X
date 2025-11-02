# ULTRAX Privacy Policy Website

ULTRAX 앱의 개인정보처리방침, 위치기반 서비스 이용약관, 계정 삭제 가이드를 제공하는 웹사이트입니다.

## 기능

### 1. 개인정보처리방침 페이지 (`/` or `/privacy`)

- **개인정보처리방침** 탭: 개인정보 수집 및 이용에 관한 방침
- **위치기반 서비스 이용약관** 탭: 위치정보 수집 및 이용에 관한 약관
- **언어 전환**: 한국어(KR) / 영어(EN) 지원
- **URL 파라미터**: `?lang=kr` 또는 `?lang=en`

### 2. 계정 삭제 가이드 페이지 (`/account-deletion`)

- 계정 삭제 방법 및 절차 안내
- 데이터 삭제 정책 안내
- **언어 전환**: 한국어(KR) / 영어(EN) 지원
- **URL 파라미터**: `?lang=kr` 또는 `?lang=en`

## 기술 스택

- **React 19**: UI 프레임워크
- **Vite**: 빌드 도구 및 개발 서버
- **React Router DOM**: 클라이언트 사이드 라우팅
- **React Markdown**: 마크다운 렌더링

## 설치 및 실행

### 개발 서버 실행

```bash
npm install
npm run dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 프로덕션 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
ULTRA-X/
├── src/
│   ├── assets/               # 마크다운 파일
│   │   ├── PRIVACY_POLICY_KO_FINAL.md
│   │   ├── PRIVACY_POLICY_EN_FINAL.md
│   │   ├── LOCATION_TERMS_KO_FINAL.md
│   │   ├── LOCATION_TERMS_EN_FINAL.md
│   │   ├── ACCOUNT_DELETION_GUIDE_KO.md
│   │   └── ACCOUNT_DELETION_GUIDE_EN.md
│   ├── pages/                # 페이지 컴포넌트
│   │   ├── PrivacyPage.jsx
│   │   └── AccountDeletionPage.jsx
│   ├── App.jsx               # 메인 App 컴포넌트
│   ├── main.jsx              # 엔트리 포인트
│   └── index.css             # 글로벌 스타일
├── index.html                # HTML 템플릿
├── vite.config.js            # Vite 설정
└── package.json              # 프로젝트 설정
```

## URL 구조

### 개인정보처리방침 페이지

- **개인정보처리방침 (한국어)**: `/privacy?tab=privacy&lang=kr` (기본값)
- **개인정보처리방침 (영어)**: `/privacy?tab=privacy&lang=en`
- **위치기반 서비스 이용약관 (한국어)**: `/privacy?tab=location&lang=kr`
- **위치기반 서비스 이용약관 (영어)**: `/privacy?tab=location&lang=en`

**URL 파라미터:**

- `tab`: `privacy` (개인정보처리방침) 또는 `location` (위치기반 서비스 이용약관)
- `lang`: `kr` (한국어) 또는 `en` (영어)

**기본값:** `/` 또는 `/privacy` → `tab=privacy`, `lang=kr`

### 계정 삭제 가이드 페이지

- 한국어: `/account-deletion?lang=kr`
- 영어: `/account-deletion?lang=en`

**URL 파라미터:**

- `lang`: `kr` (한국어) 또는 `en` (영어)

**기본값:** `/account-deletion` → `lang=kr`

## 마크다운 파일 업데이트

마크다운 파일을 업데이트하려면 `src/assets/` 폴더의 해당 파일을 수정하면 됩니다:

1. **개인정보처리방침**

   - 한국어: `PRIVACY_POLICY_KO_FINAL.md`
   - 영어: `PRIVACY_POLICY_EN_FINAL.md`

2. **위치기반 서비스 이용약관**

   - 한국어: `LOCATION_TERMS_KO_FINAL.md`
   - 영어: `LOCATION_TERMS_EN_FINAL.md`

3. **계정 삭제 가이드**
   - 한국어: `ACCOUNT_DELETION_GUIDE_KO.md`
   - 영어: `ACCOUNT_DELETION_GUIDE_EN.md`

## 배포

### Vercel 배포 (권장)

```bash
npm install -g vercel
vercel
```

### Netlify 배포

```bash
npm run build
# dist/ 폴더를 Netlify에 업로드
```

### GitHub Pages 배포

`vite.config.js`에 base path 설정 후:

```javascript
export default defineConfig({
  base: "/your-repo-name/",
  // ...
});
```

```bash
npm run build
# dist/ 폴더를 gh-pages 브랜치에 푸시
```

## 라이선스

© 2025 Sukwang Precision Co., Ltd. All rights reserved.
