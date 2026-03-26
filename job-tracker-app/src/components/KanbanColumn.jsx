import { useNavigate } from "react-router-dom";

export default function KanbanColumn({ status, jobs }) {
  const navigate = useNavigate();

  return (
    <div className="kanban-column">
      <h2 className="kanban-column__title">{status}</h2>
      <p className="kanban-column__count">{jobs.length} jobs</p>
      {jobs.map((job) => (
        <div
          className="job-card"
          key={job.id}
          onClick={() => navigate(`/jobs/${job.id}`)}
        >
          <h3 className="job-card__role">{job.role}</h3>
          {/* <p>{job.description}</p> */}
          <p className="job-card__company">{job.company}</p>
          <p className="job-card__location">{job.location}</p>
          {/* <p>{job.dateApplied}</p>
          <p>{job.status}</p>
          <p>{job.notes}</p> */}
        </div>
      ))}
    </div>
  );
}
