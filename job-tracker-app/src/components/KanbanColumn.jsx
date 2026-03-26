import { useNavigate } from "react-router-dom";

export default function KanbanColumn({ status, jobs }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{status}</h2>
      <p>{jobs.length} jobs</p>
      {jobs.map((job) => (
        <div key={job.id} onClick={() => navigate(`/jobs/${job.id}`)}>
          <h3>{job.role}</h3>
          <p>{job.description}</p>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.dateApplied}</p>
          <p>{job.status}</p>
          <p>{job.notes}</p>
        </div>
      ))}
    </div>
  );
}
