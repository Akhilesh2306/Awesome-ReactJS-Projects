# Job Application Tracker

A Kanban-style job application tracking app built with React. Track your 
applications across five stages, view detailed info on each role, and manage 
your pipeline from a single dashboard.

## Features

- Kanban board with five status columns — Applied, Screening, Interview, Offer, Rejected
- Click any job card to view full details
- Add new job applications via a dedicated form
- Delete applications from the detail page
- Dashboard with total count, per-status breakdown and most recent application
- Client-side routing — no page reloads on navigation
- Global state shared across all pages via Context API

## Concepts Practiced

| Concept | Where used |
|---|---|
| React Router | Multi-page navigation with BrowserRouter and Routes |
| Nested routes | App as layout wrapper with Outlet |
| Dynamic routes | `/jobs/:id` — job id read from URL |
| useParams | Reading the job id from the URL in JobDetail |
| useNavigate | Programmatic navigation after delete and form submit |
| NavLink | Active state on navbar links automatically |
| createContext | Creating the global job state channel |
| useContext | Reading jobs and dispatch in any page component |
| useReducer | Centralised CREATE_JOB and DELETE_JOB logic |
| Controlled form | AddJob form with all fields driven by state |
| Derived state | jobsByStatus grouping, countByStatus, mostRecent |
| Array reduce | Grouping jobs by status for Kanban columns |
| Component decomposition | Pages, KanbanColumn, JobCard, Navbar |
| Route order | Specific routes before dynamic routes |

## Project Structure
```
job-tracker/
├── src/
│   ├── context/
│   │   └── JobContext.jsx      # createContext, useReducer, Provider
│   ├── data/
│   │   └── jobData.js          # Initial job data
│   ├── components/
│   │   ├── Navbar.jsx          # NavLink navigation
│   │   └── KanbanColumn.jsx    # Single kanban column with job cards
│   ├── pages/
│   │   ├── Dashboard.jsx       # Summary stats and most recent application
│   │   ├── JobBoard.jsx        # Kanban board — jobs grouped by status
│   │   ├── JobDetail.jsx       # Full job info with delete
│   │   └── AddJob.jsx          # Controlled form to add new application
│   ├── App.jsx                 # Layout wrapper — Navbar + Outlet
│   ├── index.css               # Global styles
│   └── main.jsx                # Router setup and context provider
├── index.html
├── package.json
└── vite.config.js
```

## Running Locally
```bash
cd job-tracker
npm install
npm run dev
```

Open `http://localhost:5173`

## Built With

- React 19
- React Router v6
- Vite
- Plain CSS