# GitHub Roasted 📚

## 🚀 Description

GitHub Roasted is a platform that uses AI to provide humorous and constructive analysis of users' GitHub profiles. This platform combines comedy with useful feedback to help users improve their GitHub presence.

## 🛠️ Tech Stack

-   **Frontend**: Next.js 15.0.3
-   **Styling**: Tailwind CSS
-   **AI Integration**: Google Gemini AI
-   **State Management**: Zustand
-   **Animation**: Framer Motion
-   **Analytics**: Google Analytics & Umami

## 🏗️ Application Architecture

### 1. Folder Structure
├── public/
│ └── json/
│ └── languages.json
├── src/
│ ├── app/
│ │ ├── (home)/
│ │ │ └── page.tsx
│ │ ├── api/
│ │ │ └── roasted/
│ │ │ └── route.ts
│ │ └── layout.tsx
│ └── components/

### 2. Main Components
- **Layout (layout.tsx)**: Sets up basic application structure, fonts, and analytics
- **Home Page (page.tsx)**: Main page with Background, Title, Form, and ResultRoasted components
- **API Route (route.ts)**: Handles integration with GitHub API and Gemini AI

## 🔧 Configuration

### Environment Variables
Create a `.env` file based on `.env.example`:

API_KEY_GEMINI_AI=<your_gemini_ai_key>
GITHUB_PERSONAL_TOKEN=<your_github_token>
NEXT_PUBLIC_BASE_URL=<your_website_url>

## 🌟 Main Features

### 1. GitHub Profile Analysis
- Fetches complete profile data from GitHub API
- Analyzes statistics such as:
  - Followers/following ratio
  - Number of repositories
  - Contributions
  - GitHub account age

### 2. Roasting AI
- Uses Gemini AI to generate roasts that are:
  - Humorous and entertaining
  - Constructive
  - Multi-language
  - Enhanced with emojis and pop culture references

### 3. Development Suggestions
Provides 3 categories of suggestions:
- Repository quality improvement
- Collaboration and networking
- Personal branding on GitHub

## 🚀 How to Run

### Development
```bash
npm run dev
```
Server will run at `http://localhost:3000` with Turbopack

### Production
```bash
npm run build
npm run start
```

## 📊 Analytics
Platform uses:
- Google Analytics for visitor tracking
- Umami for more privacy-focused analytics

## 🔒 Security
- Uses environment variables to store API keys
- GitHub Personal Token for GitHub API access
- Rate limiting on API endpoints

## 🌐 SEO
- Meta tags for SEO optimization
- Google site verification
- Sitemap generation
- Optimal descriptions and keywords

## 📝 Development Notes
- Use latest Node.js version
- Ensure access to Gemini AI
- GitHub Personal Token requires scope for reading public profile data
- Application uses TypeScript for type safety

## 🤝 Contributing
To contribute:
1. Fork repository
2. Create new branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 👨‍💻 Developer
Developed by [Yusup Supriyadi](https://yusupsupriyadi.com)
