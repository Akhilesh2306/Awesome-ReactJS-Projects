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
    <div>
      <h1>Dashboard</h1>
      <p>Total Applications: {totalJobs}</p>

      <h2>By Status</h2>
      {STATUSES.map((status) => (
        <div key={status}>
          <span>{status}</span>
          <span>{countByStatus[status] || 0}</span>
        </div>
      ))}

      {mostRecent && (
        <div>
          <h2>Most Recent Application</h2>
          <p>
            {mostRecent.role} at {mostRecent.company}
          </p>
          <p>{mostRecent.dateApplied}</p>
          <button onClick={() => navigate(`/jobs/${mostRecent.id}`)}>
            View
          </button>
        </div>
      )}
    </div>
  );
}
