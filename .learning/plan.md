# React Learning Plan — Revision → MockChat → PaperLens Frontend

**Goal:** Recover forgotten React skills, learn intermediate/advanced patterns, then build the PaperLens production frontend
**Pace:** 5-10 hours/week on React (alongside PaperLens backend work)
**Approach:** Every concept learned in Project 06 directly transfers to PaperLens frontend

---

## How This Plan Works

```
Weeks 1-2          Weeks 3-5                  Week 6+
┌──────────┐      ┌──────────────────┐      ┌──────────────────────┐
│ Revision │ ───▶ │ Project 06:      │ ───▶ │ PaperLens Frontend   │
│ (01-05)  │      │ MockChat         │      │ (Track B, FE W1-W6)  │
│          │      │ (training ground)│      │ (production app)     │
└──────────┘      └──────────────────┘      └──────────────────────┘
   refresh             learn new                apply everything
   fundamentals        patterns needed          to real product
                       for PaperLens
```

**Why MockChat first:**
PaperLens frontend needs APIs (search, RAG, streaming) that don't exist yet (backend is at Week 2).
MockChat teaches the exact same React patterns using a fake backend, so when PaperLens APIs are ready, you're ready.

---

## Aligned with PaperLens Backend Calendar

| Your Week | React Repo | PaperLens Backend (parallel) | Why this order |
|-----------|-----------|------------------------------|----------------|
| 1-2 | Revision (modify projects 01-05) | Backend W3: BM25 search | Refresh fundamentals while backend catches up |
| 3 | MockChat: Layout + Tailwind | Backend W3 continued | Learn Tailwind + layouts (PaperLens uses both) |
| 4 | MockChat: Chat UI + streaming | Backend W4: Hybrid search | Learn SSE + useRef (PaperLens ChatPage needs both) |
| 5 | MockChat: Search + Router | Backend W5: RAG system | Learn routing + search UI (PaperLens SearchPage) |
| 6 | **Start PaperLens FE W1** | Backend W5 done, APIs exist | Skills are fresh, backend is ready |
| 7-8 | PaperLens FE W2-W3 | Backend W6: Observability | Health dashboard, search page (APIs available) |
| 9-10 | PaperLens FE W4-W5 | Backend W7: Agentic RAG | Chat + streaming, agent UI (APIs available) |
| 11-12 | PaperLens FE W6 + polish | Backend W8: Extensions | Production polish, testing, deployment |

---

## Phase 1: Revision (Weeks 1-2)

**Objective:** Recover forgotten React concepts by reading and modifying your own code.
**Method:** Use `/react-revision` skill in Copilot chat.

### Week 1 — Core Hooks
- [ ] Walk through **quiz-app** — understand components, props, useState, custom hooks
- [ ] Walk through **movie-search-app** — understand useEffect, fetch API, loading/error states
- [ ] Modification: Add a "restart quiz" button to quiz-app
- [ ] Modification: Add a "no results found" empty state to movie-search-app

### Week 2 — Advanced Hooks + Routing
- [ ] Walk through **expense-tracker-app** — understand useReducer, controlled forms, derived state
- [ ] Walk through **job-tracker-app** — understand React Router, useContext, useParams
- [ ] Walk through **notes-fullstack-app** — understand API layer separation, async handlers
- [ ] Modification: Add category filter to expense-tracker
- [ ] Modification: Add sort-by-date to notes app

**Milestone:** Can explain every hook you've used without looking at docs.

---

## Phase 2: MockChat — PaperLens Training Ground (Weeks 3-5)

**Objective:** Learn the React patterns PaperLens needs, using a mock backend with no API dependencies.
**Folder:** `06-mock-chat/`

### What MockChat Is

A chat interface app that simulates an AI assistant. It has:
- Sidebar with conversation list (like ChatGPT's left panel)
- Main chat area with message bubbles
- Streaming responses (words appear one by one, simulated with setTimeout)
- Search page with filters
- Settings page
- Responsive design (sidebar collapses on mobile)

The "backend" is fake — hardcoded responses with simulated delays. The point is learning React patterns, not building AI.

### Why Each Feature Exists

| MockChat Feature | React Concept It Teaches | PaperLens Page That Needs It |
|-----------------|-------------------------|------------------------------|
| Sidebar + main layout | CSS Grid/Flex with Tailwind | Layout.jsx (all pages) |
| Conversation list | Lists, state, active selection | Sidebar.jsx (RecentQueries) |
| Chat message bubbles | Component composition, conditional styling | ChatPage → ChatMessage |
| Streaming text | useRef (scroll), useEffect (intervals), state batching | ChatPage → StreamingIndicator |
| Search with filters | Controlled forms, derived state, URL params | SearchPage → SearchBar, FilterPanel |
| React Router (3 views) | Routes, NavLink, useNavigate, useParams | All page navigation |
| Responsive sidebar | Media queries, state-driven layout | Mobile support |
| Dark/light theme | useContext, CSS custom properties | SettingsProvider |
| Loading skeletons | Conditional rendering, animation | All pages with data |
| Error boundaries | Error handling patterns | ErrorBoundary wrapper |

### Week 3 — Layout + Tailwind CSS (NEW concepts)

**New concepts:** Tailwind CSS, responsive layouts, CSS Grid/Flexbox in React

- [ ] Scaffold project: `npm create vite@latest 06-mock-chat -- --template react`
- [ ] Install and configure Tailwind CSS 4 with Vite
- [ ] Learn: Tailwind utility classes (padding, margin, flex, grid, colors, responsive prefixes)
- [ ] Build Navbar component (logo + nav links)
- [ ] Build Sidebar component (conversation list with hardcoded items)
- [ ] Build Layout component (sidebar + main area using CSS Grid)
- [ ] Learn: responsive design with Tailwind (`sm:`, `md:`, `lg:` prefixes)
- [ ] Make sidebar collapsible on mobile (hamburger menu)
- [ ] Build placeholder pages (ChatView, SearchView, SettingsView)

**Key takeaway:** Tailwind eliminates CSS files — you style directly in JSX with utility classes.

### Week 4 — Chat UI + Streaming (NEW concepts)

**New concepts:** useRef (DOM + mutable values), useCallback, simulated SSE streaming

- [ ] Build ChatMessage component (user vs assistant bubbles, different styling)
- [ ] Build ChatInput component (text input + send button, Ctrl+Enter to send)
- [ ] Build message list with auto-scroll to bottom
- [ ] Learn: useRef for DOM access — scroll to bottom of chat on new message
- [ ] Learn: useRef for mutable values — storing interval IDs without re-renders
- [ ] Build streaming simulation: response text appears word by word
  - [ ] Create `mockStream(text)` — returns words one at a time with 50ms delays
  - [ ] Display partial response while streaming, final response when done
- [ ] Learn: useCallback — memoize the send-message handler
- [ ] Add conversation switching (click sidebar item → load different messages)
- [ ] Add "new conversation" button
- [ ] Build LoadingSkeleton component for initial load state

**Key takeaway:** useRef is for anything that needs to persist between renders but shouldn't trigger re-renders (DOM nodes, timers, previous values).

### Week 5 — Search + Router + Polish (REINFORCE + NEW)

**New concepts:** URL-driven state, useMemo for filtered lists, Context for theme

- [ ] Set up React Router: `/chat`, `/chat/:id`, `/search`, `/settings`
- [ ] Learn: URL params as state — search query in URL (`/search?q=hooks&type=all`)
- [ ] Build SearchBar component with debounced input
- [ ] Build SearchResults with mock data (paper cards with title, date, tags)
- [ ] Build FilterPanel (filter by type, date range)
- [ ] Learn: useMemo — memoize filtered/sorted results to avoid recalculation
- [ ] Build SettingsPage with theme toggle (dark/light)
- [ ] Learn: useContext for theme — wrap app in ThemeProvider
- [ ] Add error boundary wrapper
- [ ] Polish: loading states, empty states, hover effects, transitions
- [ ] Write 2-3 component tests with Vitest + React Testing Library

**Key takeaway:** useMemo is for expensive calculations. Don't use it for everything — profile first.

**Milestone:** MockChat is a complete, responsive chat app using all the patterns PaperLens needs.

---

## Phase 3: PaperLens Frontend (Weeks 6-12)

**Objective:** Build the real PaperLens frontend. All React skills are now in place.
**Location:** `C:\Users\UB992GN\OneDrive - EY\Documents\Self-Projects\PaperLens\frontend\`
**Reference:** PaperLens Master Plan, Track B (FE W1-W6)

### Week 6 — PaperLens FE W1: Project Shell + Layout

Transfer everything from MockChat's layout to PaperLens's real structure.

- [ ] Scaffold: `npm create vite@latest frontend -- --template react` inside PaperLens
- [ ] Set up Tailwind CSS 4
- [ ] Build Layout.jsx (Navbar + Sidebar + MainContent + StatusBar)
- [ ] Build common components (LoadingSpinner, ErrorMessage, Badge)
- [ ] Build HomePage with quick-action cards
- [ ] Build static HealthPage placeholder
- [ ] Connect to PaperLens API base URL via `.env`

**This should feel fast** — you already built a nearly identical layout in MockChat.

### Weeks 7-8 — PaperLens FE W2-W3: Health Dashboard + Search

- [ ] FE W2: Health dashboard — call `/api/v1/health`, show service status cards with live data
- [ ] FE W3: Search page — call search API, render PaperCard components, pagination
- [ ] SearchBar, SearchResults, FilterPanel — adapted from MockChat patterns
- [ ] Add React Router for all pages

### Weeks 9-10 — PaperLens FE W4-W5: Chat + Agent UI

- [ ] FE W4: ChatPage with real SSE streaming from PaperLens RAG API
- [ ] Replace MockChat's fake streaming with real `EventSource` connection
- [ ] ChatMessage with SourceCard citations
- [ ] FE W5: Agent mode UI — reasoning trace visualization
- [ ] Synthesis page — SynthesisForm, FindingsList, ContradictionCard

### Weeks 11-12 — PaperLens FE W6: Production Polish

- [ ] Responsive design audit (mobile, tablet, desktop)
- [ ] Error boundaries for all pages
- [ ] Vitest component tests (3-5 key components)
- [ ] Production Nginx config for static serving + API proxy
- [ ] Build optimization: `npm run build`, bundle analysis
- [ ] Docker integration: add frontend to PaperLens compose.yml

**Milestone:** PaperLens has a production-ready React frontend deployed alongside the backend.

---

## Concepts Roadmap

| Week | New Concepts | Where They're Used in PaperLens |
|------|-------------|--------------------------------|
| 1-2 | (Revision) | Foundation for everything |
| 3 | Tailwind CSS, responsive layouts, CSS Grid | Layout.jsx, all components |
| 4 | useRef (DOM + mutable), useCallback, streaming UI | ChatPage, StreamingIndicator |
| 5 | useMemo, URL-driven state, useContext (theme), error boundaries, testing basics | SearchPage, FilterPanel, SettingsProvider |
| 6 | (Apply to PaperLens — no new concepts) | FE W1: Shell + Layout |
| 7-8 | Real API integration, live data rendering | FE W2-W3: Health + Search |
| 9-10 | Real SSE streaming (EventSource), complex state | FE W4-W5: Chat + Agent |
| 11-12 | Production build, Nginx, Docker, bundle optimization | FE W6: Deploy |

---

## What's NOT in This Plan (Future Learning)

- TypeScript with React
- Next.js / server-side rendering
- Redux (Zustand or Context+Reducer is sufficient)
- GraphQL
- React Native
- Advanced animation (Framer Motion)
- Storybook

---

## Notes

- This plan is a living document — adjust timelines based on actual pace
- If MockChat takes longer, that's fine — depth > speed
- MockChat is NOT throwaway — it's a direct rehearsal for PaperLens
- Every pattern in MockChat maps to a specific PaperLens component
- Run `/update-memory` at the end of every session
