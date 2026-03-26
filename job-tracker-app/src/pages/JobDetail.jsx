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
    <div className="job-detail">
      <h1 className="job-detail__title">Job Details</h1>
      <div className="job-detail__card">
        <p className="job-detail__info">
          <strong>Role: </strong>
          {matchingJob.role}
        </p>
        <p className="job-detail__info">
          <strong>Description: </strong>
          {matchingJob.description}
        </p>
        <p className="job-detail__info">
          <strong>Company: </strong>
          {matchingJob.company}
        </p>
        <p className="job-detail__info">
          <strong>Location: </strong>
          {matchingJob.location}
        </p>
        <p className="job-detail__info">
          <strong>Date Applied: </strong>
          {matchingJob.dateApplied}
        </p>
        <p className="job-detail__info">
          <strong>Status: </strong>
          {matchingJob.status}
        </p>
        <p className="job-detail__info">
          <strong>Notes: </strong>
          {matchingJob.notes}
        </p>
      </div>
      <button
        className="btn btn--danger"
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
