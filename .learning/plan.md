# 12-Week React Learning Plan

**Goal:** Go from beginner (forgotten fundamentals) to full stack ready (React + deployment)
**Pace:** 5-10 hours/week
**Approach:** Project-based — every concept learned by building something real

---

## Phase 1: Revision (Weeks 1-2)

**Objective:** Recover forgotten concepts by reading and modifying your own projects.

### Week 1 — Core Hooks Revision
- [ ] Walk through **quiz-app** — Components, props, useState, state lifting, custom hooks
- [ ] Walk through **movie-search-app** — useEffect, fetch API, loading/error states
- [ ] Modification challenge: Add a "restart quiz" button to quiz-app
- [ ] Modification challenge: Add a "no results" empty state to movie-search-app

### Week 2 — Advanced Hooks + Routing Revision
- [ ] Walk through **expense-tracker-app** — useReducer, controlled forms, derived state
- [ ] Walk through **job-tracker-app** — React Router, useContext, useParams, useNavigate
- [ ] Walk through **notes-fullstack-app** — API layer separation, async handlers
- [ ] Modification challenge: Add category filter to expense-tracker
- [ ] Modification challenge: Add a "sort by date" feature to notes app

**Milestone:** Can explain every hook you've used without looking at docs.

---

## Phase 2: Intermediate Hooks & Patterns (Weeks 3-5)

**Objective:** Learn performance hooks, refs, and component composition patterns.

### Week 3 — Project 06: Pomodoro Timer
**New concepts:** useRef, useCallback, React.memo

- [ ] Scaffold project: `06-pomodoro-timer/`
- [ ] Build timer logic with useRef for interval references
- [ ] Learn: useRef for mutable values that don't trigger re-renders
- [ ] Learn: useRef for DOM element access (focus an input)
- [ ] Add start/pause/reset controls
- [ ] Add session counter (work sessions completed)
- [ ] Learn: useCallback — memoizing event handlers
- [ ] Learn: React.memo — preventing unnecessary child re-renders
- [ ] Add sound notification when timer ends

**Key takeaway:** useRef is NOT just for DOM access — it's for any mutable value that shouldn't trigger re-renders.

### Week 4-5 — Project 07: Kanban Board
**New concepts:** useMemo, complex state management, compound components, drag interaction

- [ ] Scaffold project: `07-kanban-board/`
- [ ] Build column layout with cards (To Do, In Progress, Done)
- [ ] Learn: useMemo — expensive calculations (filtered/sorted lists)
- [ ] Learn: when NOT to use useMemo (premature optimization)
- [ ] Implement card creation with modal form
- [ ] Implement card movement between columns (button-based, not drag-drop)
- [ ] Learn: compound component pattern (Column + Card work together)
- [ ] Learn: error boundaries — catching render errors gracefully
- [ ] Add local storage persistence
- [ ] Stretch: basic drag-and-drop with HTML5 drag API

**Key takeaway:** useMemo and useCallback are optimizations — profile before using them. Most components don't need them.

**Milestone:** Comfortable with all core React hooks. Understands when to optimize and when not to.

---

## Phase 3: Styling & Professional UI (Weeks 6-7)

**Objective:** Learn modern CSS tooling and build production-quality interfaces.

### Week 6-7 — Project 08: Analytics Dashboard
**New concepts:** Tailwind CSS (or CSS Modules), responsive design, chart library, loading skeletons

- [ ] Scaffold project: `08-analytics-dashboard/`
- [ ] Learn: Tailwind CSS setup with Vite (or CSS Modules if preferred)
- [ ] Build responsive sidebar + header layout
- [ ] Learn: responsive design — mobile-first approach, breakpoints
- [ ] Integrate Recharts (or Chart.js) for data visualization
- [ ] Learn: third-party component integration in React
- [ ] Build stat cards with loading skeleton states
- [ ] Learn: loading states beyond spinners (skeleton screens, shimmer)
- [ ] Add dark mode toggle with CSS custom properties
- [ ] Build data table with sorting and pagination

**Key takeaway:** CSS architecture matters in React. Component-scoped styles prevent global conflicts.

**Milestone:** Can build professional-looking, responsive UIs.

---

## Phase 4: Real-World Patterns — State & Auth (Weeks 8-9)

**Objective:** Learn production patterns — auth, global state, server state, and form validation.

### Week 8-9 — Project 09: Auth + CRUD App (React + FastAPI)
**New concepts:** Zustand, React Query (TanStack Query), JWT auth, protected routes, form validation

- [ ] Scaffold project: `09-auth-crud-app/` (frontend + backend)
- [ ] Build FastAPI backend with JWT auth endpoints
- [ ] Learn: Zustand — lightweight global state (replaces Context + Reducer for most cases)
- [ ] Implement login/register forms with validation
- [ ] Learn: protected routes — redirect unauthenticated users
- [ ] Learn: JWT token storage (httpOnly cookies vs localStorage trade-offs)
- [ ] Learn: React Query (TanStack Query) — server state management
  - [ ] Queries for fetching data (automatic caching, refetching)
  - [ ] Mutations for creating/updating/deleting
  - [ ] Optimistic updates — update UI before server confirms
- [ ] Build CRUD interface for a resource (notes, tasks, or items)
- [ ] Learn: error boundaries for API failure handling
- [ ] Add toast notifications for success/error feedback

**Key takeaway:** Client state (Zustand) and server state (React Query) are different concerns. Don't store fetched data in useState.

**Milestone:** Can build a full auth-protected CRUD app with proper state management.

---

## Phase 5: Production Full Stack + Deployment (Weeks 10-12)

**Objective:** Build a portfolio-grade app, add testing, deploy to production.

### Week 10-11 — Project 10: Portfolio-Grade Full Stack App
**New concepts:** Testing, CI/CD, production build, environment management

Choose one:
- **Option A:** Real-time Chat App (WebSockets, presence indicators)
- **Option B:** Project Management Tool (teams, assignments, deadlines)
- **Option C:** E-commerce Store (cart, checkout flow, order history)

- [ ] Scaffold project: `10-[chosen-app]/`
- [ ] Build with everything learned: Router, Zustand, React Query, Tailwind, auth
- [ ] Learn: Vitest — unit testing React components
- [ ] Learn: React Testing Library — testing user interactions
- [ ] Learn: mocking API calls in tests
- [ ] Write tests for at least 3 key components
- [ ] Learn: environment management (dev/staging/prod)
- [ ] Production build optimization: `npm run build`, bundle analysis

### Week 12 — Deployment & Polish
**New concepts:** Deployment, CI/CD, performance basics

- [ ] Learn: Vercel deployment (or Netlify) — connect GitHub repo
- [ ] Learn: environment variables in production
- [ ] Set up GitHub Actions for CI (lint + test on PR)
- [ ] Performance basics: Lighthouse audit, lazy loading routes
- [ ] Learn: React.lazy + Suspense for code splitting
- [ ] Polish README, add screenshots, live demo link
- [ ] Review and update all learning memory files

**Milestone:** Have a deployed, tested, production-grade React app with CI/CD.

---

## Concepts Roadmap (Summary)

| Week | New Concepts |
|------|-------------|
| 1-2 | (Revision — no new concepts) |
| 3 | useRef, useCallback, React.memo |
| 4-5 | useMemo, compound components, error boundaries, local storage |
| 6-7 | Tailwind/CSS Modules, responsive design, charts, loading skeletons, dark mode |
| 8-9 | Zustand, React Query, JWT auth, protected routes, optimistic updates, form validation |
| 10-11 | Vitest, React Testing Library, mocking, production builds |
| 12 | Deployment (Vercel), CI/CD (GitHub Actions), code splitting, lazy loading |

---

## Concepts NOT in This Plan (Future Learning)
- TypeScript with React
- Next.js / server-side rendering
- Redux (Zustand is simpler and sufficient for most apps)
- GraphQL
- React Native (mobile)
- Advanced animation (Framer Motion)
- Micro-frontends
- Web Workers / Service Workers
- Storybook (component documentation)

---

## Notes
- This plan is a living document — adjust timelines based on actual pace
- If a project takes longer than planned, that's fine — depth > speed
- Skip stretch goals if short on time, come back to them later
- Each project builds on previous ones — don't skip ahead
