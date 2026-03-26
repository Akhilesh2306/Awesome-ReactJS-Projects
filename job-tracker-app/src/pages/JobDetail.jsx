import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useNavigate, useParams } from "react-router-dom";

export default function JobDetail() {
  const { id } = useParams();
  const { jobs, dispatch } = useContext(JobContext);

  const navigate = useNavigate();

  const matchingJob = jobs.find((job) => job.id === Number(id));
  if (!matchingJob) return <h1>Job not found</h1>;

  return (
    <div>
      <h1>Job Details</h1>
      <div>
        <h2>{matchingJob.role}</h2>
        <p>{matchingJob.description}</p>
        <p>{matchingJob.company}</p>
        <p>{matchingJob.location}</p>
        <p>{matchingJob.dateApplied}</p>
        <p>{matchingJob.status}</p>
        <p>{matchingJob.notes}</p>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "DELETE_JOB", payload: Number(id) });
          navigate("/jobs");
        }}
      >
        Delete Job
      </button>
    </div>
  );
}
