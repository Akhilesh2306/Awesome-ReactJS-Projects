import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import JobBoard from "./pages/JobBoard.jsx";
import JobDetail from "./pages/JobDetail.jsx";
import { JobContextProvider } from "./context/JobContext.jsx";

createRoot(document.getElementById("root")).render(
  <JobContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<JobBoard />} />
          <Route path="jobs/:id" element={<JobDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </JobContextProvider>,
);
