# React Learning Repo — Copilot Memory

## Who I Am
Akhilesh — AI/ML Engineer learning React JS as a beginner. This monorepo has one project per concept. Every line is written hands-on, no copy-pasting.

## Tech Stack
React 19 | Vite 8 | Plain CSS | JSX (no TypeScript) | No testing yet

## Learning Progress

| # | Folder | Concepts | Status |
|---|--------|----------|--------|
| 01 | quiz-app | Components, props, useState, state lifting, conditional rendering, useEffect, custom hooks | Done |
| 02 | movie-search-app | useEffect, fetch API, loading/error states, API integration, env variables | Done |
| 03 | expense-tracker-app | useReducer, controlled forms, input validation, derived state, array reduce | Done |
| 04 | job-tracker-app | React Router, nested routes, dynamic routes, useParams, useNavigate, useContext, createContext | Done |
| 05 | notes-fullstack-app | Full stack — React + FastAPI, API layer separation, async handlers | Done |
| 06 | _next project_ | _TBD_ | Not started |

## Critical Gotchas (update as you learn)
<!-- 🔴 = broke something, 🟡 = subtle mistake, 🟢 = good pattern learned -->
- 🔴 Never mutate state directly — always use the setter from useState/dispatch from useReducer
- 🔴 Keys in .map() lists must be stable IDs, not array index
- 🟡 useEffect cleanup runs before the next effect execution, not just on unmount
- 🟡 Event handlers in JSX are camelCase (onClick not onclick)
- 🟢 Derived state — calculate values from existing state instead of storing redundant state
- 🟢 Data/UI separation — keep content in data files, not hardcoded in components

## Session Continuity
<!-- Update this at the end of every session -->
**Last session:** _Update me_
**What was done:** _Update me_
**Next steps:** _Update me_

## 12-Week Learning Plan (5-10 hrs/week — feeds into PaperLens frontend)

| Phase | Weeks | Focus | Project |
|-------|-------|-------|---------|
| 1. Revision | 1-2 | Re-read existing code, make small mods | Modify 01-05 |
| 2. MockChat | 3-5 | Tailwind, useRef, streaming UI, Router, useMemo, Context | 06: MockChat (PaperLens rehearsal) |
| 3. PaperLens FE | 6-12 | Real production frontend for PaperLens | PaperLens frontend/ |

**Current phase:** 1 (Revision)
**Detailed plan:** `.learning/plan.md`

## Available Skills
- `/react-revision` — Walk through existing code to refresh forgotten concepts
- `/react-learn` — Guided project-based learning for new concepts
- `/update-memory` — End-of-session memory update (run this every session!)

## Rules for Copilot
1. When I start a new concept, create a new numbered folder (next: 06-xxx/)
2. Explain React concepts at beginner level — I learn by understanding WHY, not just HOW
3. At the end of each session, remind me: "Update your memory files — run /update-memory"
4. If I make a common React mistake, flag it: "🔴 GOTCHA: [explanation]" and remind me to add it here
5. Reference `.learning/concepts.md` for detailed concept notes
6. Reference `.learning/gotchas.md` for full gotcha history with code examples
7. Follow existing patterns: components in `components/`, pages in `pages/`, data in `data/`
8. No TypeScript — use .jsx files (until Phase 4+)
9. Plain CSS — no Tailwind (until Phase 3)
