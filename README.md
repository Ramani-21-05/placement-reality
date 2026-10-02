# Placement Reality: AI-Powered Campus Recruitment & Readiness Evaluator

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

**Placement Reality** is an automated campus placement intelligence platform designed to eliminate recruiter guesswork and help engineering undergraduates realistically benchmark their technical readiness. By aggregating live GitHub coding activity, LeetCode problem-solving metrics, and academic milestones, the platform calculates a unified **Readiness Score** and generates tailored career roadmaps.

---

## ⚡ Core Features

- **Live GitHub Activity Profiling**: Real-time evaluation of commit frequency, repositories, language diversity, and contribution consistency.
- **LeetCode Micro-Audit**: Tracks solved count across Easy, Medium, and Hard tiers with algorithmic breadth analysis.
- **Dynamic Readiness Scoring**: Multi-factor scoring algorithm weighting real problem-solving and open-source output over passive resume claims.
- **Company Tier Matching**: Evaluates suitability across Product-based firms (FAANG/MNCs), Fast-growing Tech Startups, and Enterprise Service Firms.
- **Actionable Roadmap Generator**: Identifies individual skill gaps and produces custom weekly execution milestones.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Vercel CI/CD Pipeline

---

## 🚀 Quickstart & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Ramani-21-05/placement-reality.git
cd placement-reality

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Architecture & Components

```
├── app/
│   ├── globals.css         # Global Tailwind styles
│   ├── layout.tsx          # Root HTML layout and font definitions
│   └── page.tsx            # Main interactive dashboard container
├── components/
│   ├── StudentProfile.tsx  # User academic & biographical input form
│   ├── GithubStats.tsx     # GitHub API data fetcher & metric cards
│   ├── LeetCodeStats.tsx   # LeetCode GraphQL/REST stats analyzer
│   ├── Dashboard.tsx       # Unified visualization grid
│   ├── ReadinessScore.tsx  # Algorithmic readiness gauge
│   ├── CompanyMatch.tsx    # Tiered company eligibility evaluator
│   └── Roadmap.tsx         # Dynamic milestone roadmap renderer
└── public/                 # Static brand assets
```

---

## 👤 Author
- **Ramani** ([@Ramani-21-05](https://github.com/Ramani-21-05))
- Final-Year Artificial Intelligence & Data Science Undergraduate
