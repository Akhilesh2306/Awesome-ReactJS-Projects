import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useNavigate } from "react-router-dom";

const STATUSES = ["Applied", "Screening", "Interview", "Offer", "Rejected"];

export default function Dashboard() {
  const { jobs } = useContext(JobContext);
  const navigate = useNavigate();

  const totalJobs = jobs.length;

  const countByStatus = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  // Sort by dateApplied descending, take the first one
  const mostRecent = [...jobs].sort(
    (a, b) => new Date(b.dateApplied) - new Date(a.dateApplied),
  )[0];

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <p className="dashboard__total">Total Applications: {totalJobs}</p>

      <h2 className="dashboard__subtitle">By Status</h2>
      {STATUSES.map((status) => (
        <div key={status} className="status-row">
          <span className="status-row__label">{status}</span>
          <span className="status-row__count">
            {countByStatus[status] || 0}
          </span>
        </div>
      ))}

      {mostRecent && (
        <div className="recent-card">
          <h2 className="dashboard__subtitle">Most Recent Application</h2>
          <p className="recent-card__info">
            {mostRecent.role} at {mostRecent.company}
          </p>
          <p className="recent-card__info">{mostRecent.dateApplied}</p>
          <button
            className="btn"
            onClick={() => navigate(`/jobs/${mostRecent.id}`)}
          >
            View
          </button>
        </div>
      )}
    </div>
  );
}
