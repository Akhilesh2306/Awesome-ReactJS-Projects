import { useContext } from "react";
import { JobContext } from "../context/JobContext.jsx";

export default function JobBoard() {
  const { jobs } = useContext(JobContext);
  return (
    <div>
      <h1>Job Board</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.role}</h2>
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
